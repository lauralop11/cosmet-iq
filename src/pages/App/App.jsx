import Home from '../Home/home'
import './App.css'

/* import Info from '../Info/info'
import Service from '../Service/service'
import Contact from '../Contact/contact' */
/* RUTAS PARA PAGINAS EXTERNAS EN REACT
const AppRoutes = () => {
    let routes = useRoutes ([
    {path:'/',element:<Home/>},
    {path:'/info',element:<Info/>},
    {path:'/service',element:<Service/>},
    {path:'/contact',element:<Contact/>}
  ])
  return routes
} */

function App(){
  return (
      <Home/>
  )
}
export default App