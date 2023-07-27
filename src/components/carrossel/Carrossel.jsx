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
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
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
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
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
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
