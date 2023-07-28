import React from 'react'
import {
	ListGroup,
	Image,
	Row,
	Col,
	Button,
	InputGroup,
} from 'react-bootstrap/'

export default function Carrinho(props) {
	const { cartItems, onAdd, onRemove } = props
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)

	return (
		<>
			<div className="mb-5  d-flex align-items-center">
				<div className="me-3">
					<h2>Seu carrinho de compra</h2>
				</div>
				<div>
					<Image
						width="64"
						height="64"
						src="https://img.icons8.com/cute-clipart/64/shopping-bag.png"
						alt="shopping-bag"
					/>
				</div>
			</div>

			{cartItems.length === 0 && <h4 className="mb-5">Carrinho vazio</h4>}
			{cartItems.map((item) => (
				<ListGroup className="mb-3">
					<ListGroup.Item key={item.id} className="py-3">
						<Row>
							<Col className="align-self-center" lg={1} md={3}>
								<Image
									src={item.image}
									thumbnail
									fluid
									className="h-75 w-100"
								/>
							</Col>
							<Col
								md={9}
								lg={7}
								xl={8}
								className="text-left text-black align-self-center">
								<a href="#">
									<h4>{item.title}</h4>
								</a>
								<small>{item.description}</small>
							</Col>
							<Col
								sm={6}
								md={4}
								lg={3}
								xl={2}
								className="align-self-center mt-3">
								<InputGroup className="mb-2">
									{/* Botão reduz quantidade */}
									<Button
										onClick={() => onRemove(item)}
										variant="outline-secondary"
										className="btn-sm border">
										<Image
											width="16"
											height="16"
											src="https://img.icons8.com/cute-clipart/16/minus-math.png"
											alt="minus-math"
										/>
									</Button>
									{/* input quantidade */}
									<div className="px-4 border">
										{item.qty}
									</div>
									{/* Botão adcionar quantidade */}
									<Button
										onClick={() => onAdd(item)}
										variant="outline-secondary"
										className="btn-sm border">
										<Image
											className="align-self-center"
											width="16"
											height="16"
											src="https://img.icons8.com/cute-clipart/16/plus-math.png"
											alt="plus-math"
										/>
									</Button>
									{/* botão deletar */}
									<Button
										variant="outline-danger"
										className="btn-sm border">
										<Image
											width="16"
											height="16"
											src="https://img.icons8.com/dusk/16/delete-forever.png"
											alt="delete-forever"
										/>
									</Button>
								</InputGroup>
								<div>
									<small>
										<b>
											Preço:
											{item.qty * item.price.toFixed(2)}
											R$
										</b>
									</small>
								</div>
							</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
			))}

			{cartItems.length !== 0 && (
				<>
					<hr></hr>
					<ListGroup className="py-3">
						<div className="text-center text-md-end mt-4">
							<h3 className="text-dark mb-3">
								Total {itemsPrice.toFixed(2)} R$
							</h3>
						</div>
					</ListGroup>
					<hr />
					<Row>
						<Button
							variant="outline-success"
							onClick={() => alert('Venda realizada')}>
							Comprar
						</Button>
					</Row>
				</>
			)}
		</>
	)
}
