import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../../CartContext/CartContext";
import { db } from "../../firebase/firebase";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'




const Cart = () => {
    const { products, removeItem, clear, productQty, getFinalPrice } = useContext(ItemContext);
    const [validar, setValidar] = useState(false);


    const checkout = (valoresInput) => {
        if (valoresInput != undefined) {
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
                    Swal.fire({
                        icon: "success",
                        title: `Gracias por su compra, por favor guarde su ID único:`,
                        text: (result.id),
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                    for (const product of products) {
                        let nuevoStock = (product.stock - product.quantity)
                        const updateCollection = doc(db, "productos", product.id);
                        updateDoc(updateCollection, { stock: nuevoStock })
                    }
                }
                );
            clear()
        }
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

                        <div className="row">
                            <div className="col-12 col-md-12 d-flex justify-content-center">
                                <img src={product.img} alt="Foto del producto" width="100px" height="100px" />
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-center text-center my-1">
                                <h2>{product.name}</h2>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-center text-center my-1">
                                <h2>${product.price}</h2>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-center text-center my-1">
                                <h2>Cantidad: {product.quantity}</h2>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-center my-1">
                                <button onClick={() => removeItem(product.id)} className={'btn btn-outline-danger w-50'}>Quitar producto</button>
                            </div>
                        </div>

                    </div>
                ))}
                {productQty > 0
                    ?
                    <div style={{ textAlign: 'center' }}>
                        <Formik initialValues={{
                            nombre: "",
                            telefono: "",
                            email: "",
                        }} onSubmit={(valoresInput => {
                            checkout(valoresInput);
                            setValidar(true);
                        })} validationSchema={ErrorSchema}
                        >
                            {
                                (props) => {
                                    return (
                                        <Form className={'m-auto w-50 center-form'}>
                                            <div className="row">
                                                <label>Nombre: </label>
                                                <Field name={'nombre'} type={'text'} className={'w-100 form-control'} />
                                                <small className={'error'}>{props.errors.nombre}</small>
                                                <label>Telefono: </label>
                                                <Field name={'telefono'} type={'number'} className={'w-100 form-control'} />
                                                <small className={'error'}>{props.errors.telefono}</small>
                                                <label>Email: </label>
                                                <Field name={'email'} type={'email'} className={'w-100 form-control'} />
                                                <small className={'error'}>{props.errors.email}</small>

                                                <div className="col-12 col-md-12 d-flex justify-content-center my-1">
                                                    <button onClick={() => checkout()} className={'btn btn-outline-success w-50 mt-5'} type={'submit'} disabled={!props.isValid}> Finalizar Compra</button>
                                                </div>
                                                <div className="col-12 col-md-12 d-flex justify-content-center my-1">
                                                    <button onClick={() => clear(props)} className={'btn btn-outline-danger w-50 mb-5'} type={'reset'}> Vaciar Carrito</button>
                                                </div>
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
            <h2 style={{ textAlign: 'center', marginBottom: '570px', marginTop: '22px'}}>Precio final: ${getFinalPrice()}</h2>
        </>
    );
}

export default Cart;