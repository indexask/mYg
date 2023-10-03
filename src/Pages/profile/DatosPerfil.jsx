import "../../assets/css/perfil.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
                <div className="dataProfile">
                    {/* <div className="datos">
                        <h2 className="datoChange">CORREO: </h2>
                        <input type="email" value="" className="inputDate" />
                    </div>
                    <div className="datos">
                        <h2 className="datoChange">NOMBRE: </h2>
                        <input type="text" className="inputDate" />
                    </div>
                    <div className="datos">
                        <h2 className="datoChange">APELLIDO: </h2>
                        <input type="text" className="inputDate" />
                    </div>
                    <div className="datos">
                        <h2 className="datoChange">CONTRASEÑA: </h2>
                        <input type="text" className="inputDate" />
                    </div>
 */}

                    <>
                        <Form.Label htmlFor="inputPassword5">Nombre: </Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputPassword5">Apellido: </Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />

                        <Form.Label htmlFor="inputPassword5">Correo: </Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />

                        <Form.Label htmlFor="inputPassword5">Password: </Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                    </>

                    <div className="buttonModificar">
                        <Button variant="primary" >MODIFICAR</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
