import { React, useState } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './components/navbar/NavBar'
import { Carrossel } from './components/carrossel/Carrossel'
import { PaginaQuemSomos } from './components/quemSomos/PaginaQuemSomos'
import { PaginaNossoTime } from './components/nossoTime/PaginaNossoTime'
import { PaginaProdutos } from './components/produtos/PaginaProdutos'
import { Footer } from './components/footer/Footer'
import Carrinho from './components/carrinho/Carrinho'

import data from './js/dataProdutos'

function App() {
	const { products } = data
	const [cartItems, setCartItems] = useState([])
	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id)
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			)
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }])
		}
	}
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id)
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id))
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			)
		}
	}
	return (
		<>
			<Container>
				<NavBar countItems={cartItems.length} />
				<Carrossel />
				<PaginaQuemSomos />
				<PaginaNossoTime />
				<PaginaProdutos products={products} onAdd={onAdd} />
				<Carrinho
					onAdd={onAdd}
					onRemove={onRemove}
					cartItems={cartItems}
				/>
			</Container>
			<Footer />
		</>
	)
}

export default App
