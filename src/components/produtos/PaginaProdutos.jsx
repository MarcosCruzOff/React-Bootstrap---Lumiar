import { Row, Col, Container, Image, Button } from 'react-bootstrap'
// import { CardsProduto } from './CardsProduto'

export function PaginaProdutos() {
	return (
		<>
			<section className="py-5 my-5" id="produtos">
				{/* Título Produto */}
				<Row className="py-5 mt-5 mx-auto">
					<h2 class="text-center text-uppercase">Produtos</h2>
				</Row>
				<Container>
					<Row
						sm={1}
						md={2}
						lg={3}
						className="g-4 px-auto d-flex justify-content-center">
						<Col lg={3} className=" px-0 mx-3 ">
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto_1.png"
							/>
							<h4>Sérum de Juventude Radiante - 30ml</h4>
							<p className="text-wrap">
								Revitalize sua pele com nosso sérum poderoso!
								Com ingredientes avançados, este sérum reduzirá
								linhas finas e rugas, deixando sua pele radiante
								e jovem.
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 89,99</h2>
							</div>
						</Col>
						<Col lg={3} className=" px-0 mx-3 ">
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto_2.png"
							/>
							<div className="text-wrap">
								<h4>
									Paleta de Sombras Encantadas - Edição
									Limitada
								</h4>
								<p>
									Crie looks mágicos com nossa paleta de
									sombras encantadoras! Com tons brilhantes e
									pigmentação intensa, você conquistará
									qualquer ocasião.
								</p>
							</div>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 65,00</h2>
							</div>
						</Col>
						<Col lg={3} className=" px-0 mx-3">
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto_3.png"
							/>
							<h4>Máscara Capilar Reparação Profunda - 200ml</h4>
							<p className="text-wrap">
								Dê vida aos seus cabelos com nossa máscara de
								reparação profunda! Enriquecida com nutrientes,
								ela revitaliza, nutre e fortalece seus fios
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 42,50</h2>
							</div>
						</Col>
						<Col lg={3} className=" px-0 mx-3">
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto_4.png"
							/>
							<h4>Batom Hidratante Luxe - Cor Sedução</h4>
							<p className="text-wrap">
								Adicione um toque de luxo aos seus lábios com
								nosso batom hidratante! A cor sedutora é
								perfeita para qualquer ocasião, mantendo seus
								lábios macios e hidratados.
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 34,99</h2>
							</div>
						</Col>
						<Col lg={3} className=" px-0 mx-3">
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto_5.png"
							/>
							<h4>Gel Esfoliante Revigorante - 100g</h4>
							<p className="text-wrap">
								Experimente a sensação de frescor com nosso gel
								esfoliante! Remova as impurezas e células mortas
								da pele, deixando-a revitalizada e suave
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 25,99</h2>
							</div>
						</Col>
						<Col lg={3} className=" px-0 mx-3">
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto_6.png"
							/>
							<h4>Perfume Encantador Noturno - 50ml</h4>
							<p className="text-wrap">
								Deixe uma trilha cativante por onde passar com
								nosso perfume encantador! Sua fragrância
								envolvente e duradoura é ideal para noites
								especiais.
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 120,00</h2>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
