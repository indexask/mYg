import "../../assets/css/perfil.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";






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
                <div>
                    <img className="imgProfile" src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png" alt="" />
                </div>
                <div className="datosProfile">
                    <h3>Informacion Perfil</h3>
                    <h3>Nombre: Benjamin</h3>
                    <h3>Apellido: Octavio</h3>
                    <h3>Email: benjamin.octavio@gmail.com</h3>
                </div>
            </div>
        </div>
    );
}
