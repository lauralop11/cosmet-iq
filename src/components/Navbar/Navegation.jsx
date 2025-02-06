import { NavLink } from "react-router-dom"
import logo from '../../assets/logo/Subject.png'
import './Navegation.css'

const Navbar = () => {
  let menuRoutes =[
    {to: '/', text: 'Inicio',},
    {to: '/info', text: 'Nosotros',},
    {to: '/service', text: 'Servicios',},
    {to: '/contact', text: 'Contactenos',},
  ];
  const activeStyle = 'underline underline-offset-4 decoration-white';
return(
  <nav className="navbar flex justify-between font-playfair-display">
    <div className="flex w-full md:justify-start justify-center ">
      <img src={logo} alt="Cosmet+IQ logo" className="w-20 p-1"/>
      <div className="text-white self-center">
        <p>COSMET+IQ</p>
        <p>Donde la ciencia encuentra la belleza</p>
      </div>
    </div>
    <ul className="md:flex hidden justify-end content-center self-center">
      {
        menuRoutes.map((item, index) => 
          <li key={index}>
            <NavLink to={item.to} className={({isActive})=> isActive ? activeStyle: undefined}>{item.text}</NavLink>
          </li>
          )
      }
    </ul>
   
  </nav>
)
}
export default Navbar