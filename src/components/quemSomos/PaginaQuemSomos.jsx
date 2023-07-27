import { Row, Col } from 'react-bootstrap'
export function PaginaQuemSomos() {
	return (
		<section className=" py-5 my-5 text-center" id="quemSomos">
			{/*  Título Quem Somos */}
			<Row class="py-5 my-5 mx-auto">
				<h2 class="text-center text-uppercase ">Quem Somos</h2>
			</Row>
			{/*  Conteúdo */}
			<Row>
				<Col lg={6} className="mx-auto py-3 text-start">
					<p className="lead quemSomos-p">
						Somos uma empresa que trás o que ha de mais luxuoso para
						os nossos clientes, com dedicação e cuidado para que os
						nossos clientes tenha uma pitada de luxo em suas vidas .
					</p>
				</Col>
				<Col lg={5} className="mx-auto my-auto">
					<img
						src="/assets/quem somos.jpg"
						className="circle img-fluid"
						alt="Loja Lumiar"
					/>
				</Col>
			</Row>
		</section>
	)
}
