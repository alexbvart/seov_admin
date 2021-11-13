import React, { useState } from 'react';
import { Heading, Table } from 'evergreen-ui'
import ButtonLink from '@components/ButtonLink';

const Objective = ({carreras}) => {
    console.log(carreras)
    const [keyword, setKeyword] = useState("")


    return (
        <>

            <div className="main main_container">
                <Heading size={900} marginTop={52}>
                    Carreras que recomienda el sistema experto
                </Heading>
                <br />
                <ButtonLink href="carreras/new" >
                    Agregar una nueva carrera
                </ButtonLink>
                <br />
                <br />

                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>Nombre</Table.TextHeaderCell>
                        <Table.SearchHeaderCell onChange={(value) => setKeyword(value)} placeholder="Busca por el nombre" />
                    </Table.Head>
                    <Table.Body height={240}>
                        {carreras
                            .filter(carrera => String(carrera.title).toUpperCase().includes(keyword.toUpperCase()))
                            .map((carrera) => (
                                <Table.Row key={carrera.id} isSelectable onSelect={() => alert(carrera.name)}>
                                    <Table.TextCell>{carrera.title}</Table.TextCell>
                                </Table.Row>
                            ))}
                    </Table.Body>
                </Table>                
                <br />
            </div>

        </>
    );
}
export default Objective;

export async function getServerSideProps(context) {
    const { params } = context;

    /* const { query } = params; */
        const SERVER_HOST = "http://localhost:3001";
    
        const carreras = await fetch(`${SERVER_HOST}/carreras`)
        .then(res => res.json())

    return {
        props: {
            carreras
        }
    };
}