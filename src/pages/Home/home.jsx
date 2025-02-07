import Navbar from "../../components/Navbar/Navegation"
import Banner from "../../components/Banner"
import About from "../../components/Info"

function Home(){
  return (
    <div id="home" className="overflow-hidden w-full">
       <Navbar/>
       <Banner/>
       <About/>
    </div>
  )
}
export default Home