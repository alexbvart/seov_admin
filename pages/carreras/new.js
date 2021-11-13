import React, { useState } from 'react';

import { useForm } from "react-hook-form";

import post from '@services/post'
import Form from '@components/Form/Form';
import { Input, Select, TextArea } from '@components/InputForm/Input';
import Footer from '@components/Form/Footer';


const newSupplier = ({}) => {

    const onSubmit = async (data,e) => {
        const res = await post({src:"objective","data":data})
        if(res.status="201") e.target.reset()
    }


    return (
        <>
            <Form onSubmit={onSubmit} title="Registra objetivos">
                
                <Input name="name" span="6"  />
                <TextArea name="description" span="6" />
                <Footer />
            </Form>
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