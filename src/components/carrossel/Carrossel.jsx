import { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export function Carrossel() {
	const [index, setIndex] = useState(0)

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex)
	}

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="my-5">
			<Carousel.Item>
				<Image
					className="d-block w-100"
					src="/assets/carrosel__1.png"
					text="First slide"
					fluid
				/>
				<Carousel.Caption className="text-secondary bg-light bg-gradient">
					<h3>Kit Cuidado Facial Completo</h3>
					<p>
						Cuide da sua pele com nosso kit completo! Inclui
						limpador facial, tônico, sérum hidratante e creme
						rejuvenescedor
					</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image
					className="d-block w-100"
					src="/assets/carrosel__2.png"
					text="Second slide"
					fluid
				/>
				<Carousel.Caption className="text-secondary bg-light bg-gradient">
					<h3>Loção Corporal Relaxante - Aroma Lavanda - 250ml</h3>
					<p>
						Mime-se com nossa loção corporal relaxante! Com o aroma
						calmante de lavanda, sua pele ficará hidratada e
						perfumada.
					</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image
					className="d-block w-100"
					src="/assets/carrosel__3.png"
					text="Third slide"
					fluid
				/>
				<Carousel.Caption className="text-secondary bg-light bg-gradient">
					<h3>Nauthy de Juventude Radiante - 30ml</h3>
					<p>
						Revitalize sua pele com nosso sérum poderoso! Com
						ingredientes avançados, este sérum reduzirá linhas finas
						e rugas, deixando sua pele radiante e jovem
					</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image
					className="d-block w-100"
					src="/assets/carrosel__4.png"
					text="Third slide"
					fluid
				/>
				<Carousel.Caption className="text-secondary bg-light bg-gradient">
					<h3>Paleta de Sombras Encantadas - Edição Limitada</h3>
					<p>
						Crie looks mágicos com nossa paleta de sombras
						encantadoras! Com tons brilhantes e pigmentação intensa,
						você conquistará qualquer ocasião.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
