import {
	Row,
	Col,
	Container,
	Image,
	Button,
	CardGroup,
	Card,
} from 'react-bootstrap'
// import { CardsProduto } from './CardsProduto'

export function PaginaProdutos(props) {
	const { products, onAdd } = props
	return (
		<>
			<section className="py-5 my-5" id="produtos">
				{/* Título Produto */}
				<Row className="py-5 mt-5 mx-auto">
					<h2 className="text-center text-uppercase">Produtos</h2>
				</Row>
				<Container>
					<Row xs={1} md={2} lg={3} className="g-4">
						{products.map((product) => (
							<Col
								key={product.id}
								products={product}
								onAdd={onAdd}>
								<Card style={{ minHeight: '100%' }}>
									<Card.Img
										variant="top"
										src={product.image}
									/>
									<Card.Body>
										<Card.Title>{product.title}</Card.Title>
										<Card.Text>
											{product.description}
										</Card.Text>
										<div className="d-flex justify-content-between">
											<Button
												variant="primary"
												onClick={() => onAdd(product)}>
												Comprar
											</Button>
											<h2 className="text-success">
												{product.price} R$
											</h2>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	)
}
