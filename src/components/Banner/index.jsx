import logobanner from '../../assets/img/banner.png'
import { Layout } from '../Layout'

const Banner = () => {
  return(
    <Layout>
      <div className="relative w-full h-80 mb-3">
        <div>
          <img src={logobanner} alt="laboratorio quimico" className='w-full h-80 object-cover' />
        </div>
        <div className='absolute flex bottom-0 md:top-4.5 md:right-5 md:w-2/5 md:h-60 md:rounded-md m-auto bg-white/85 backdrop-blur-lg pb-4'>
          <p className="m-2 p-4 md:text-md overflow-hidden text-base text-seconde text-center self-center">Expertos en Asesoría Técnica para la Industria Cosmética,
          Diseño y Desarrollo de Productos y Distribución de
          Materias Primas: Potenciando la Innovación y Crecimiento
          de Empresas del Sector Cosmético.
          </p>
        </div>
      </div>
      <div className='bg-seconde my-5 w-full h-0.5'> </div>
    </Layout>

  )
}
export default Banner