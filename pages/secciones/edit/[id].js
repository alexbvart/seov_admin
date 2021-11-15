import { useRouter } from 'next/router'
import swal from 'sweetalert';
import { Pane } from 'evergreen-ui';
import Link from 'next/link'
import Form from '@components/Form/Form';
import { Input } from '@components/InputForm/Input';
import Footer from '@components/Form/Footer';
import put from '@services/put'

const objectivesEdit = ({ secciones }) => {
    const router = useRouter()
    const onSubmit = async (data) => {
        const res = await put({ "src": "seccioness", "put": data , "id":secciones.id})
        if(res.status="200") router.push("/seccioness")
    }
    console.log(secciones)
    return (
        <>
        <>
            <Pane >
                <nav className="bg-grey-light rounded font-sans w-full py-6">
                    <ol className="list-reset flex text-grey-dark">
                        <li>
                            <Link href="/secciones">
                                <a className="font-bold">Secciones</a>
                            </Link>
                        </li>
                        <li><span className="font-bold mx-2">/</span></li>
                        <li>Renombrar</li>
                        <li><span className="mx-2">/</span></li>
                        <li>{secciones.nombre}</li>
                    </ol>
                </nav>
                <Form onSubmit={onSubmit} title="Registrar nuevo secciones" defaultValues={secciones} >
                    <Input name="nombre" label="Nombre" span="3" />
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

    const secciones = await fetch(`${SERVER_HOST}/secciones/?id=${params.id}`)
    .then(res => res.json())

    return {
        props: {
            secciones:secciones[0],
        }
    };
}