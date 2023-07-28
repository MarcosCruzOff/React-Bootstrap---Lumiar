import { Button, Card } from 'react-bootstrap'

export function CardsProduto() {
	return (
		<>
			<Card className="w-100">
				<Card.Img
					className="image-card w-100 h-50"
					fluid
					src="/assets/produto_6.png"
				/>
				<Card.Body>
					<Card.Title>Perfume Aqua Marina</Card.Title>
					<Card.Text>com notas de jasmim e sândalo </Card.Text>
					<div className="d-flex justify-content-between">
						<Button variant="primary">Comprar</Button>
						<h2 className="text-success">109,00$</h2>
					</div>
				</Card.Body>
			</Card>
		</>
	)
}
