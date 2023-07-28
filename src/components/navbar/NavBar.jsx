import { Navbar, Nav, Container, Image, Badge } from 'react-bootstrap'

const NavBar = (props) => {
	const { countItems } = props
	return (
		<Navbar
			fixed="top"
			collapseOnSelect
			expand="lg"
			className="mb-5 bg bg-white">
			<Container>
				<Navbar.Brand>Lumiar</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
						<Nav.Link href="#quemSomos">Quem Somos</Nav.Link>
						<Nav.Link href="#nossoTime">Nosso Time</Nav.Link>
						<Nav.Link href="#produtos">Produtos</Nav.Link>
						<Nav.Link>
							Carrinho
							<Image
								className="position-relative mx-1"
								width="16"
								height="16"
								src="https://img.icons8.com/cute-clipart/64/shopping-bag.png"
								alt="shopping-bag"
							/>
							{countItems ? (
								<Badge bg="success">{countItems}</Badge>
							) : (
								''
							)}
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar
