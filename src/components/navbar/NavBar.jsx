import { Navbar, Nav, Container } from 'react-bootstrap'

export function NavBar() {
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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
