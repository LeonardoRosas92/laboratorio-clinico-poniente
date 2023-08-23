import { Link } from 'react-router-dom';
import Logo from './../assets/img/Logo.svg';
export default function NavComponent() {
  return (
    <nav className="bg-gradient navbar navbar-dark navbar-expand-md">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={Logo} className="logo"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nosotros">Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/estudios">Estudios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contáctanos</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
