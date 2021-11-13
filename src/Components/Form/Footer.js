import { Button } from 'evergreen-ui';
import { useRouter } from 'next/router';
import React from 'react';
import swal from 'sweetalert';
import {
	footer,
	footer_buttons,
} from './footer.module.css';

function Footer({ textContent }) {
	const router = useRouter()

	const cancelForm = (e) => {
		e.preventDefault();
		console.log("cancelar todo");
		router.back()
	}
	const okForm = () => {
/* 		swal({
			title: "¡Buen trabajo!",
			text: "La información fue registrada",
			icon: "success",
			button: "¡OK!",
		}); */
		console.log("submit form");
	}
	return (
		<footer className={footer}>
			<div className={footer_buttons}>
				<Button marginRight={16} onClick={(e) => cancelForm(e)}>Cancelar</Button>
				<Button marginRight={16} onClick={() => okForm()} appearance="primary">
					Registrar
				</Button>
			</div>
		</footer>
	);
}

export default Footer;
