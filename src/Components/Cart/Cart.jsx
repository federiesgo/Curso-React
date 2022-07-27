import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../../CartContext/CartContext";
import { db } from "../../firebase/firebase";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";



const Cart = () => {
    const { products, removeItem, clear, productQty, getFinalPrice } = useContext(ItemContext);
    const [saleId, setSaleId] = useState("");
    const [validar, setValidar] = useState(false);


    const checkout = (valoresInput) => {
        const salesCollection = collection(db, 'ventas');
        addDoc(salesCollection, {
            buyer: {
                nombre: valoresInput.nombre,
                telefono: valoresInput.telefono,
                email: valoresInput.email
            },
            items: { products },
            date: serverTimestamp(),
            total: getFinalPrice(),
        })
            .then((result) => {
                setSaleId(result.id)
            }
            );
        clear()
    }

    const ErrorSchema = Yup.object().shape({
        nombre: Yup.string().required("Ingrese un nombre correcto.").min(3, "El nombre es muy corto").max(20, "El nombre es muy largo"),
        telefono: Yup.number().required("Telefono requerido").positive().integer().max(9999999999, "Telefono muy largo").min(999999999, "Telefono incorrecto"),
        email: Yup.string().email("Email incorrecto").required("Email requerido")
    })

    return (
        <>
            <div>
                {products.map((product) => (
                    <div className="carrito-estilo" key={product.id}>
                        <div>
                            <img src={product.img} alt="Foto del producto" width="100px" height="100px" />
                        </div>
                        <h2>Producto: {product.name}</h2>
                        <h2>${product.price}</h2>
                        <h2>Cantidad: {product.quantity}</h2>
                        <button onClick={() => removeItem(product.id)}>Quitar producto</button>
                    </div>
                ))}
                {productQty > 0
                    ?
                    <div style={{ textAlign: 'center' }}>
                        <Formik initialValues={{
                            nombre: "",
                            telefono: "",
                            email: ""
                        }} onSubmit={(valoresInput => {
                            checkout(valoresInput);
                            setValidar(true);
                        })} validationSchema={ErrorSchema}
                        >
                            {
                                (props) => {
                                    return (
                                        <Form className={'m-auto w-50 center-form'}>
                                            <div className={'d-flex flex-column m-3 align-items-center'}>
                                                <label>Nombre: </label>
                                                <Field name={'nombre'} type={'text'} className={'w-100 form-control'} />
                                                <small className={'error'}>{props.errors.nombre}</small>
                                                <label>Telefono: </label>
                                                <Field name={'telefono'} type={'number'} className={'w-100 form-control'} />
                                                <small className={'error'}>{props.errors.telefono}</small>
                                                <label>Email: </label>
                                                <Field name={'email'} type={'email'} className={'w-100 form-control'} />
                                                <small className={'error'}>{props.errors.email}</small>
                                                <button onClick={() => checkout()} className={'btn btn-outline-success w-50'} type={'submit'} disabled={!props.isValid}> Finalizar Compra</button>
                                                <button onClick={() => clear(props)} className={'btn btn-outline-danger w-50'} type={'reset'}> Vaciar Carrito</button>
                                            </div>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>

                    </div>
                    :
                    <div style={{ textAlign: 'center' }}>
                        <h1>El carrito esta vacio</h1>
                        <Link to={"/"}> <button className={'btn btn-outline-warning w-50'}>Volver al home</button> </Link>
                    </div>
                }
            </div>
            <h2 style={{ textAlign: 'center' }}>Precio final: ${getFinalPrice()}</h2>
        </>
    );
}

export default Cart;