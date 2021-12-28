import React, { useState } from 'react';

import { useForm } from "react-hook-form";

import post from '@services/post'
import Form from '@components/Form/Form';
import { Input, Select, TextArea } from '@components/InputForm/Input';
import Footer from '@components/Form/Footer';
import swal from 'sweetalert';
import { Heading } from 'evergreen-ui';


const newSupplier = ({ }) => {

    const onSubmit = async (data, e) => {
        const res = await post({ src: "carreras", "data": data })
        if (res.status = "201") {
            swal({
                title: "¡Buen trabajo!",
                text: "La información de la carrera fue registrada",
                icon: "success",
                button: "¡OK!",
            });
            e.target.reset()
        }
    }


    return (
        <>
            <div className="main main_container">
                <Heading size={900} marginTop={52}>
                    Registra carreras que recomie la carrera el sistema experto
                </Heading>
                <br />
                <Form onSubmit={onSubmit} title="Registra carreras">
                    <Input name="name" span="6" />
                    <TextArea name="description" span="6" />
                    <Footer />
                </Form>
            </div>

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