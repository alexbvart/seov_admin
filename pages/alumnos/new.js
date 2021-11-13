import React, { useState } from 'react';

import { useForm } from "react-hook-form";

import post from '@services/post'
import Form from '@components/Form/Form';
import { Input, Select, TextArea } from '@components/InputForm/Input';
import Footer from '@components/Form/Footer';
import swal from 'sweetalert';
import { Pane } from 'evergreen-ui';
import Link from 'next/link'


const newSupplier = ({ }) => {

    const onSubmit = async (data, e) => {
        const res = await post({ "src": "alumnos", "data": data })
        if (res.status = "201") {
            swal({
                title: "¡Buen trabajo!",
                text: "La información del alumno fue registrada",
                icon: "success",
                button: "¡OK!",
            });
            e.target.reset()
        }
    }

    return (
        <>
            <Pane >
                <nav className="bg-grey-light rounded font-sans w-full py-6">
                    <ol className="list-reset flex text-grey-dark">
                        <li>
                            <Link href="/alumnos">
                                <a className="font-bold">Alumnos</a>
                            </Link>
                        </li>
                        <li><span className="mx-2">/</span></li>
                        <li>Nuevo</li>
                    </ol>
                </nav>
                <Form onSubmit={onSubmit} title="Registrar nuevo alumno">
                    <Input name="nombre" label="Nombre" span="3" />
                    <Input name="apellido_paterno" label="Apellido paterno" span="3" />
                    <Input name="apellido_materno" label="Apellido materno" span="3" />
                    <Input name="dni" label="DNI" span="3" />
                    <Input name="direccion" label="Dirección" span="3" />
                    <Input name="telefono" label="Telefono" span="3" />
                    <Footer />
                </Form>
            </Pane>
        </>
    );
}
export default newSupplier;

export async function getServerSideProps(context) {
    const { params } = context;

    /*     const SERVER_HOST = "http://localhost:3001";
        const ENTERPRISE_ID = 2;
    
        const objectives = await fetch(`${SERVER_HOST}/enterprise/${ENTERPRISE_ID}/objective`)
        .then(res => res.json())
        const process = await fetch(`${SERVER_HOST}/enterprise/${ENTERPRISE_ID}/process`)
        .then(res => res.json()) */

    return {
        props: {

        }
    };
}