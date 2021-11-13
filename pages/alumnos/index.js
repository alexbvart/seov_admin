import React, { useState,useEffect } from 'react';
import { Heading, Pane, Table, Popover, Menu, Position, Button, TrashIcon, EditIcon } from 'evergreen-ui'
import ButtonLink from '@components/ButtonLink';
import Link from 'next/link'
import swal from 'sweetalert';
import deleteById from '@services/deleteById';
import getAll from '@services/getAll';

const Objective = ({ alumnos }) => {
    const [keyword, setKeyword] = useState("")
    const [alumns, setAlumns] = useState(alumnos)

        const loadData = async () => {
            let data = await getAll({"src":"alumnos"})
            if (data.status == "200") {
                setAlumns(data.data)
            }
            else{
                toaster.success('Stick around for 10 seconds', {
                    duration: 10
                })
                swal({
                    text: "No se encontraron datos",
                    icon: "danger",
                });
            }
        }
    const verifyDeleteAlumn = (id, nombre) => {
        swal({
            title: "¿Deseas eliminar este alumno?",
            text: "Eliminaras al alumno: " + nombre,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteAlumn(id)
                } else {
                    swal("!Los datos del alumno estan a salvo!");
                }
            });
    }
    const deleteAlumn = async(id)=>{
        const res = await deleteById({ "src": "alumnos", "id": id })
        if (res.status = "201") {
            loadData()
            swal({
                title: "¡Buen trabajo!",
                text: "!El alumno fue eliminado con exito!",
                icon: "success",
            });
        }else{
            swal({
                title: "¡Algo fallo!",
                text: "!El alumno no fue eliminado con exito!",
                icon: "danger",
            });
        }
    }
    useEffect(() => {
        loadData()
    }, [alumnos])

    return (
        <>

            <div className="main main_container">
                <Heading size={900} marginTop={0}>
                    Alumnos registrados
                </Heading>
                <br />
                <ButtonLink href="alumnos/new" >
                    Agregar una nueva alumno
                </ButtonLink>
                <br />
                <br />
                <Pane display="flex" >
                    <Table width="100%">
                        <Table.Head>
                            <Table.SearchHeaderCell onChange={(value) => setKeyword(value)} placeholder="Busca por el nombre" />
                            <Table.TextHeaderCell>DNI</Table.TextHeaderCell>
                            <Table.TextHeaderCell>Dirección</Table.TextHeaderCell>
                            <Table.TextHeaderCell>Telefono</Table.TextHeaderCell>
                            <Table.TextHeaderCell>Operaciones</Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body height={400}>
                            {alumns
                                .filter(alumno => String(alumno.title).toUpperCase().includes(keyword.toUpperCase()))
                                .map((alumno) => (
                                    <Table.Row key={alumno.id} >

                                        <Table.TextCell>{alumno.apellidos|| `${alumno.nombre} ${alumno.apellido_paterno} ${alumno.apellido_materno}`}</Table.TextCell>
                                        <Table.TextCell>{alumno.dni}</Table.TextCell>
                                        <Table.TextCell>{alumno.direccion}</Table.TextCell>
                                        <Table.TextCell>{alumno.telefono}</Table.TextCell>
                                        <Table.TextCell>
                                            <Popover
                                                position={Position.BOTTOM_LEFT}
                                                content={
                                                    <Menu>
                                                        <Menu.Group>

                                                            <Menu.Item icon={EditIcon} >
                                                                <Link href={`alumnos/${alumno.id}`}><a>Renombrar</a></Link>
                                                            </Menu.Item>
                                                            <Menu.Item icon={TrashIcon}
                                                                intent="danger"
                                                                isSelectable onSelect={() => verifyDeleteAlumn(alumno.id, alumno.apellidos)}>
                                                                Delete...
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
export default Objective;
{/* <Table.Row key={alumno.id} isSelectable onSelect={() => alert(alumno.name)}></Table.Row> 
secondaryText="⌘R"*/ }
export async function getServerSideProps(context) {
    const { params } = context;

    /* const { query } = params; */
    const SERVER_HOST = "http://localhost:3001";

    const alumnos = await fetch(`${SERVER_HOST}/alumnos`)
        .then(res => res.json())

    return {
        props: {
            alumnos
        }
    };
}