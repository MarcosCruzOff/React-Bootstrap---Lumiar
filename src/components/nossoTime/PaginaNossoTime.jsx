import { Row, Card, CardGroup, Image } from 'react-bootstrap'

export function PaginaNossoTime() {
	return (
		<section className="py-5 my-5 text-center" id="nossoTime">
			{/* <!-- Título --> */}
			<Row className="py-5 mt-5 mx-auto">
				<h2 className="text-center text-uppercase">Nosso Time</h2>
			</Row>
			<CardGroup>
				<Card className="py-5">
					<div className="">
						<Image
							width="120"
							height="120"
							src="/assets/eu.png"
							roundedCircle
							alt="..."
						/>
					</div>
					<Card.Body>
						<Card.Title>Hellen Silva</Card.Title>
						<Card.Text>
							CEO visionário e estrategista com histórico
							comprovado de liderança inspiradora e alcance de
							resultados excepcionais. Experiência em gestão de
							negócios em diversos setores, demonstrando
							habilidades excepcionais em tomada de decisão.
						</Card.Text>
						{/* <!-- Icons midias --> */}
						<div className="icons">
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/instagram-new--v2.png"
								alt="instagram-new--v2"
							/>
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/facebook.png"
								alt="facebook"
							/>
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/linkedin.png"
								alt="linkedin"
							/>
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/youtube-play.png"
								alt="youtube-play"
							/>
						</div>
					</Card.Body>
				</Card>
				<Card className="py-5">
					<div className="">
						<Image
							width="120"
							height="120"
							src="/assets/ele.png"
							roundedCircle
							alt="..."
						/>
					</div>
					<Card.Body>
						<Card.Title>Marcos Cruz</Card.Title>
						<Card.Text>
							Desenvolvedor Full Stack altamente qualificado, com
							amplo conhecimento em linguagens de programação
							front-end e back-end. Experiência sólida no
							desenvolvimento de aplicações web e habilidade para
							resolver problemas de forma eficiente.
						</Card.Text>
						{/* <!-- Icons midias --> */}
						<div className="icons">
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/instagram-new--v2.png"
								alt="instagram-new--v2"
							/>
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/facebook.png"
								alt="facebook"
							/>
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/linkedin.png"
								alt="linkedin"
							/>
							<Image
								width="50"
								height="50"
								src="https://img.icons8.com/bubbles/50/youtube-play.png"
								alt="youtube-play"
							/>
						</div>
					</Card.Body>
				</Card>
			</CardGroup>
		</section>
	)
}
