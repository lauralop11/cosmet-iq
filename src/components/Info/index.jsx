import { Layout } from "../Layout"
import logo from '../../assets/logo/Subject.png'
const Info =() => {
  return (
    <Layout >
      <div id="info">
        <h2 className=" w-full text-center text-seconde font-bold h-15 text-4xl p-3 mt-5 font-stretch-expanded">Acerca de Nosotros</h2>
        <div className="relative columns-1 md:columns-2 gap-8 mt-3 p-5 px-6 font-[verdana] text-gray-700">
          <p className="text-base/7 tracking-wide ">Nos especializamos en brindar
          asesoría experta en asuntos
          regulatorios, implementación de
          Buenas Prácticas de Manufactura
          Cosmética, así como en el diseño y
          desarrollo de programas de
          formación y capacitación orientados
          a fortalecer el conocimiento y las
          competencias en el sector
          cosmético.
          </p>
          <p className="text-base/7 tracking-wide mt-5"> 
          Somos un equipo de profesionales en
          Química Farmacéutica, con
          especialización en Ciencia y
          Tecnología Cosmética, y una amplia
          experiencia en el desarrollo integral
          de productos cosméticos,
          aseguramiento de calidad,
          producción y transferencia
          tecnológica.
          COSMET+IQ
          Donde la ciencia encuentra la belleza
          dircientifica.
         </p>
         <div>
          <img src={logo} alt="logo" className="absolute -z-1 md:top-3 md:left-10 top-3 left-0 grayscale"/>
         </div>
        </div>
        <div className='bg-seconde my-5 w-full h-0.5'> </div>

      </div>    
    </Layout>
  )
}
export default Info