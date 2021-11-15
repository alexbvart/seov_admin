
import ButtonLink from '@components/ButtonLink';
import { EyeOpenIcon, Heading, Pane, Position, Table, Menu, Popover, Button } from 'evergreen-ui';
import { useState } from 'react';
import Link from 'next/link'


const ObjetiveID = ({ test,alumno }) => {
    const [tests, setTests] = useState(test)

    return (
        <>

            <div className="main main_container">

                <nav className="bg-grey-light rounded font-sans w-full py-6">
                    <ol className="list-reset flex text-grey-dark">
                        <li>
                            <Link href="/alumnos">
                                <a className="font-bold">Alumnos</a>
                            </Link>
                        </li>
                        <li><span className="font-bold mx-2">/</span></li>
                        <li>Resultados de test</li>
                        <li><span className="mx-2">/</span></li>
                        <li>{alumno.nombre} {alumno.apellido_paterno} {alumno.apellido_materno}</li>
                    </ol>
                </nav>
                <br />
                <br />
                <Heading size={900} marginTop={0}>
                    Resultados de los test realizados
                </Heading>
                <br />
                <Pane display="flex" >
                    <Table width="100%">
                        <Table.Head>
                            <Table.TextHeaderCell>CASM</Table.TextHeaderCell>
                            <Table.TextHeaderCell>BERGER</Table.TextHeaderCell>
                            <Table.TextHeaderCell>HEA</Table.TextHeaderCell>
                            <Table.TextHeaderCell>Final</Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body height={400}>
                            {tests
                                .map((alumno) => (
                                    <Table.Row key={alumno.id} >
                                        <Table.TextCell>{alumno.resultado_casm}</Table.TextCell>
                                        <Table.TextCell>{alumno.resultado_berger}</Table.TextCell>
                                        <Table.TextCell>{alumno.resultado_lea}</Table.TextCell>
                                        <Table.TextCell>{alumno.resultado}</Table.TextCell>
                                        <Table.TextCell>
                                            <Popover
                                                position={Position.BOTTOM_LEFT}
                                                content={
                                                    <Menu>
                                                        <Menu.Group>

                                                            <Menu.Item icon={EyeOpenIcon} >
                                                                <Link href={`alumnos/${alumno.id}`}><a>Ver detalles del test</a></Link>
                                                            </Menu.Item>
                                                        </Menu.Group>
                                                    </Menu>
                                                }
                                            >
                                                <Button marginRight={16}>Opciones </Button>
                                            </Popover>
                                        </Table.TextCell>
                                    </Table.Row>
                                ))}
                        </Table.Body>
                    </Table>
                </Pane>
                <br />
            </div>

        </>
    );
}
export default ObjetiveID;

export async function getServerSideProps(context) {
    const { params } = context;

    /* const { query } = params; */
    const SERVER_HOST = "http://localhost:3001";

    const test = await fetch(`${SERVER_HOST}/test`)
        .then(res => res.json())

    const alumno = await fetch(`${SERVER_HOST}/alumnos/?id=${params.id}`)
        .then(res => res.json())

    return {
        props: {
            test,
            alumno: alumno[0],
        }
    };

}