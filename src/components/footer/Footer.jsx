import { Row, Col, Image, Button } from 'react-bootstrap'
export function Footer() {
	return (
		<>
			{/* Footer */}
			<footer className="footer text-center text-white bg-dark py-5 mt-5">
				<div className="container">
					<Row>
						{/* Footer Endereço */}
						<Col lg={4} className="mb-5 mb-5 ">
							<h4 className="text-uppercase mb-4">Endereço</h4>
							<p className="lead mb-0">
								Ananideua - PA
								<br />
								Passagem Bragantina 318
								<br />
								CEP: 00000-000
							</p>
						</Col>
						{/* Footer Social Icons */}
						<Col lg={4} sm={4} className="mb-5  mx-auto ">
							<h4 className="text-uppercase mb-4">
								Nossas Mídias
							</h4>
							<div className="my-auto">
								<a
									className=" mb-2 btn btn-outline-light btn-social mx-1"
									href="#!">
									<Image
										width="50"
										height="50"
										src="https://img.icons8.com/bubbles/50/facebook.png"
										alt="facebook"
									/>
								</a>
								<a
									className="mb-2 btn btn-outline-light btn-social mx-1"
									href="#!">
									<Image
										width="50"
										height="50"
										src="https://img.icons8.com/bubbles/50/instagram-new--v2.png"
										alt="instagram-new--v2"
									/>
								</a>
								<a
									className="mb-2 btn btn-outline-light btn-social mx-1"
									href="#!">
									<Image
										width="50"
										height="50"
										src="https://img.icons8.com/bubbles/50/linkedin.png"
										alt="linkedin"
									/>
								</a>
								<a
									className="mb-2 btn btn-outline-light btn-social mx-1"
									href="#!">
									<Image
										width="50"
										height="50"
										src="https://img.icons8.com/bubbles/50/youtube-play.png"
										alt="youtube-play"
									/>
								</a>
							</div>
						</Col>
						{/* Footer About Text */}
						<Col lg={4} className="mb-5 mb-5 ">
							<h4 className="text-uppercase mb-4">
								Quer ganhar cupons? Cadastra-se
							</h4>
							{/*  Contact Section Form */}
							<Row className="">
								<form>
									<Row className="mb-3">
										<label
											for="inputEmail3"
											className="col-sm-2 col-form-label">
											Nome
										</label>
										<div className="col-sm-10">
											<input
												type="text"
												className="form-control"
												id="inputEmail3"
											/>
										</div>
									</Row>
									<Row className="mb-3">
										<label
											for="inputPassword3"
											className="col-sm-2 col-form-label">
											Email
										</label>
										<div className="col-sm-10">
											<input
												type="email"
												className="form-control"
												id="inputPassword3"
											/>
										</div>
									</Row>

									<Row>
										<div className="align-self-center  ps-1 ">
											<Button
												type="submit"
												className="btn btn-primary w-50 text-center me-5 ">
												Cadastrar
											</Button>
										</div>
									</Row>
								</form>
							</Row>
						</Col>
					</Row>
				</div>
			</footer>
			{/* Copyright Section */}
			<div className="copyright py-4 text-center text-white bg-secondary">
				<div className="container">
					<small>Copyright &copy; Lumiar 2023</small>
				</div>
			</div>
		</>
	)
}
