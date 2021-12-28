import React, { useState } from 'react';
import { Pane, Tab, Heading,  Paragraph, Table, Tablist, Popover, Position, Menu, TrashIcon, EditIcon, EyeOpenIcon, Button } from 'evergreen-ui'
import ButtonLink from '@components/ButtonLink';
import Link from 'next/link'


const Objective = ({ carreras }) => {
    console.log(carreras)
    const [keyword, setKeyword] = useState("")
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [tabs] = React.useState(['CASM', 'HEA', 'BERGER'])

    return (
        <>

            <div className="main main_container">
                <Heading size={900} marginTop={52}>
                    Items de los cuestionarios
                </Heading>
                <br />
                <ButtonLink href="carreras/new" >
                    Agregar una nueva carrera
                </ButtonLink>
                <br />
                <br />


                <Pane height={120}>
                    <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                        {tabs.map((tab, index) => (
                            <Tab
                                key={tab}
                                id={tab}
                                onSelect={() => setSelectedIndex(index)}
                                isSelected={index === selectedIndex}
                                aria-controls={`panel-${tab}`}
                            >
                                {tab}
                            </Tab>
                        ))}
                    </Tablist>
                    <Pane padding={16} background="tint1" flex="1">
                        {tabs.map((tab, index) => (
                            <Pane
                                key={tab}
                                id={`panel-${tab}`}
                                role="tabpanel"
                                aria-labelledby={tab}
                                aria-hidden={index !== selectedIndex}
                                display={index === selectedIndex ? 'block' : 'none'}
                            >
                                <Paragraph>Panel {tab}</Paragraph>
                            </Pane>
                        ))}
                    </Pane>
                </Pane>

                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>ID</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Item A</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Item B</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Opciones</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={500}>
                        {carreras
                            .filter(carrera => String(carrera.title).toUpperCase().includes(keyword.toUpperCase()))
                            .map((carrera,index) => (
                                <Table.Row key={carrera.id} isSelectable onSelect={() => console.log("a")}>
                                    <Table.TextCell>{index+1}</Table.TextCell>
                                    <Table.TextCell>{carrera.a}</Table.TextCell>
                                    <Table.TextCell>{carrera.b}</Table.TextCell>
                                    <Table.TextCell>
                                            <Popover
                                                position={Position.BOTTOM_LEFT}
                                                content={
                                                    <Menu>
                                                        <Menu.Group>

                                                            <Menu.Item icon={EyeOpenIcon} >
                                                                <Link href={`items/${carrera.id}`}><a>Visitar</a></Link>
                                                            </Menu.Item>
                                                            <Menu.Item icon={EditIcon} >
                                                                <Link href={`items/edit/${carrera.id}`}><a>Renombrar</a></Link>
                                                            </Menu.Item>
                                                            {/* <Menu.Item icon={TrashIcon}
                                                                intent="danger"
                                                                isSelectable onSelect={() => verifyDeleteAlumn(alumno.id, alumno.apellidos)}>
                                                                Delete...
                                                            </Menu.Item> */}
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

    const carreras = await fetch(`${SERVER_HOST}/items`)
        .then(res => res.json())

    return {
        props: {
            carreras
        }
    };
}