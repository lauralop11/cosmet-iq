import { Link } from 'react-scroll';
import logo from '../../assets/logo/Subject.png'
import './Navegation.css'

const Navbar = () => {
  let menuRoutes =[
    {to: 'home', text: 'Inicio',},
    {to: 'info', text: 'Nosotros',},
    {to: 'service', text: 'Servicios',},
    {to: 'contact', text: 'Contactenos',},
  ];
return(
  <nav className="navbar flex justify-between font-playfair-display ">
    <div className="navbar-logo flex w-full p-4 ">
      <img src={logo} alt="Cosmet+IQ logo" className="w-10 h-10 self-center"/>
      <div className="text-white flex flex-col justify-center">
        <p className="text-2xl font-light ">COSMET+IQ</p>
        <p className='-mt-1 font-stretch-expanded italic'>Donde la ciencia encuentra la belleza</p>
      </div>
    </div>
    <ul className="navbar-list md:flex hidden justify-end self-center">
      {
        menuRoutes.map((item, index) => 
          <li key={index} >
            <Link to={item.to} smooth={true} duration={500} >{item.text}</Link>
          </li>
          )
      }
    </ul>
  </nav>
)
}
export default Navbar