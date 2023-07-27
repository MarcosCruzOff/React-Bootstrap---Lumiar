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
							src="/assets/roxo.png"
							roundedCircle
							alt="..."
						/>
					</div>
					<Card.Body>
						<Card.Title>Hellen Silva</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
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
							src="/assets/roxo.png"
							roundedCircle
							alt="..."
						/>
					</div>
					<Card.Body>
						<Card.Title>Hellen Silva</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
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
							src="/assets/roxo.png"
							roundedCircle
							alt="..."
						/>
					</div>
					<Card.Body>
						<Card.Title>Hellen Silva</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
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
