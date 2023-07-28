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
				<Carousel.Caption className="text-light bg-dark bg-gradient">
					<h3>Invista no seu maior patrimônio. VOCÊ</h3>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image
					className="d-block w-100"
					src="/assets/carrosel__2.png"
					text="Second slide"
					fluid
				/>
				<Carousel.Caption className="text-light bg-dark bg-gradient">
					<h3>Vista de Perfume</h3>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image
					className="d-block w-100"
					src="/assets/carrosel__3.png"
					text="Third slide"
					fluid
				/>
				<Carousel.Caption className="text-light bg-dark bg-gradient">
					<h3>Sinta a paz de se cuidar</h3>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image
					className="d-block w-100"
					src="/assets/carrosel__4.png"
					text="Third slide"
					fluid
				/>
				<Carousel.Caption className="text-light bg-dark bg-gradient">
					<h3>Colere o seu dia</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
