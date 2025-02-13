import Navbar from "../../components/Navbar/Navegation"
import Banner from "../../components/Banner"
import About from "../../components/Info"
import Service from "../../components/Service"
import Contact from "../../components/Contact"

function Home(){
  return (
    <div id="home" className="overflow-hidden w-full">
       <Navbar/>
       <Banner/>
       <About/>
       <Service/>
       <Contact/>
    </div>
  )
}
export default Home