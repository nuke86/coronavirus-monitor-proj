import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = () => {
  return (
    <div>
		<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
		  <Navbar.Brand href="./"><strong>CoronaVirus-italy.it</strong></Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			  <Nav.Link href="http://mappa.coronavirus-italy.it">Situazione Italia</Nav.Link>
			  <Nav.Link href="#protection-covid-19">Prevenzione</Nav.Link>
			  <Nav.Link href="#protezione-coronavirus">Protezione</Nav.Link>
			  <Nav.Link href="http://mappa.coronavirus-italy.it/#previsioni-coronavirus">Previsioni Italia</Nav.Link>
			  <NavDropdown title="Link esterni utili" id="collasible-nav-dropdown">
				<NavDropdown.Item href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">News OMS</NavDropdown.Item>
				<NavDropdown.Item href="https://people.com/health/coronavirus-ways-to-help-your-community/">Aiutiamoci</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="http://www.dariofadda.it">Autore</NavDropdown.Item>
			  </NavDropdown>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
    </div>
  );
};

export default header;
