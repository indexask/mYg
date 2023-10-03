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
                    <Card.Img variant="top" src="https://falabella.scene7.com/is/image/Falabella/gsc_116606109_1556237_1?wid=800&hei=800&qlt=70" />
                    <Card.Body>
                        <Card.Title>FAVORITE 1</Card.Title>
                        <Button variant="primary">ELIMINAR</Button>
                    </Card.Body>
                </Card>
                </div>

               <div className="Card">
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://falabella.scene7.com/is/image/Falabella/gsc_113405007_637637_1?wid=800&hei=800&qlt=70" />
                    <Card.Body>
                        <Card.Title>FAVORITE 2</Card.Title>
                        <Button variant="primary">ELIMINAR</Button>
                    </Card.Body>
                </Card>
               </div>
                <div className="Card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://falabella.scene7.com/is/image/Falabella/gsc_117006195_1638828_1?wid=800&hei=800&qlt=70" />
                    <Card.Body>
                        <Card.Title>FAVORITE 2</Card.Title>
                        <Button variant="primary">ELIMINAR</Button>
                    </Card.Body>
                </Card>

                </div>

                
            </div>
        </div>
    );
}