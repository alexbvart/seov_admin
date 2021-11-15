import { useRouter } from 'next/router'
import swal from 'sweetalert';
import { Pane } from 'evergreen-ui';
import Link from 'next/link'
import Form from '@components/Form/Form';
import { Input } from '@components/InputForm/Input';
import Footer from '@components/Form/Footer';
import put from '@services/put'

const objectivesEdit = ({ alumno }) => {
    const router = useRouter()
    const onSubmit = async (data) => {
        const res = await put({ "src": "alumnos", "put": data , "id":alumno.id})
        if(res.status="200") router.push("/alumnos")
    }
    console.log(alumno)
    return (
        <>
        <>
            <Pane >
                <nav className="bg-grey-light rounded font-sans w-full py-6">
                    <ol className="list-reset flex text-grey-dark">
                        <li>
                            <Link href="/tutores">
                                <a className="font-bold">Tutores</a>
                            </Link>
                        </li>
                        <li><span className="font-bold mx-2">/</span></li>
                        <li>Renombrar</li>
                        <li><span className="mx-2">/</span></li>
                        <li>{alumno.nombre} {alumno.apellido_paterno} {alumno.apellido_materno}</li>
                    </ol>
                </nav>
                <Form onSubmit={onSubmit} title="Registrar nuevo alumno" defaultValues={alumno} >
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
        </>
    );
}
export default objectivesEdit;

export async function getServerSideProps(context) {
    const { params } = context;

    const SERVER_HOST = "http://localhost:3001";
    const ENTERPRISE_ID = 2;

    const alumno = await fetch(`${SERVER_HOST}/tutores/?id=${params.id}`)
    .then(res => res.json())

    return {
        props: {
            alumno:alumno[0],
        }
    };
}