import buttons from './button.module.css'
import Link from 'next/link'
import { Button as EvergreenButton, Table } from 'evergreen-ui'


const ButtonLink = ({href,children,className=""}) => {
        return ( 
        <>
        <Link href={`${href}`}> 
            <a 
                className={ `${className}` }
                >
                <EvergreenButton marginRight={16}>{children}</EvergreenButton>
            </a>
        </Link>
        </>
    );
}
export default ButtonLink;
/* className={ `${buttons.button} ${className}` } */