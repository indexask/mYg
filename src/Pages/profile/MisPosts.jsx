import "../../assets/css/perfil.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {


    return (
        <div className="perfil">
            <div className="">
                <div className="viewprofile">
                    <Nav.Link >
                        <Link to="/perfil" className="profile"> MI PERFIL</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link  >
                        <Link to="/datosperfil" className="profile"> EDITAR PERFIL</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link  >
                        <Link to="/favoritos" className="profile">  FAVORITOS</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link >
                        <Link to="/crearpublicacion" className="profile"> CREAR PUBLICACION</Link>
                    </Nav.Link>
                </div>

                <div className="viewprofile">
                    <Nav.Link >
                        <Link to="/MisPosts" className="profile"> MIS PUBLICACIONES</Link>
                    </Nav.Link>
                </div>
            </div>


            <div className="infoProfile">
                <div className="Card">
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.lider.cl/wmtcl?source=url[file:/productos/767981a.jpg]&scale=size[2000x2000]&sink" />
                    <Card.Body>
                        <Card.Title>POST 1</Card.Title>
                        <Button variant="primary">ELIMINAR</Button>
                    </Card.Body>
                </Card>

                </div>

                <div className="Card">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://falabella.scene7.com/is/image/Falabella/gsc_113884894_807010_1?wid=800&hei=800&qlt=70" />
                    <Card.Body>
                        <Card.Title>POST 2</Card.Title>
                        <Button variant="primary">ELIMINAR</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="Card">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://fernapetcl.vtexassets.com/arquivos/ids/190185-1600-auto?v=637769961604530000&width=1600&height=auto&aspect=true" />
                    <Card.Body>
                        <Card.Title>POST 2</Card.Title>
                        <Button variant="primary">ELIMINAR</Button>
                    </Card.Body>
                </Card>
                </div>

                
            </div>
        </div>
    );
}