import "../../assets/css/perfil.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';





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
                <div className="zoneCamera">
                    <FontAwesomeIcon icon={faCamera} className="camera" />
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="primary" className="buttonPublicar">PUBLICAR</Button>
                </div>
                <div>
                </div>
                <div className="inputPostGeneral">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Titulo"
                            className="mb-3"
                        >
                            <Form.Control type="Titulo" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Descripcion">
                            <Form.Control type="Descripcion" placeholder="Password" />
                        </FloatingLabel>
                </div>
            </div>

        </div>
    );
}
