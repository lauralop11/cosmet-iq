import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/home'
import Info from '../Info/info'
import Service from '../Service/service'
import Contact from '../Contact/contact'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes ([
    {path:'/',element:<Home/>},
    {path:'/info',element:<Info/>},
    {path:'/service',element:<Service/>},
    {path:'/contact',element:<Contact/>}
  ])
  return routes
}

function App(){

  return (
    <BrowserRouter> 
      <AppRoutes/>
    </BrowserRouter>
   
  )

}
export default App