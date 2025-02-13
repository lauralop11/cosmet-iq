import { Layout } from "../Layout"
import { Title } from "../Title"
import logo from '../../assets/logo/Subject.png'

const Contact = () => {
  return (
      <div id="contact">
        <Title>Contactenos</Title>
        <div className="relative m-3 px-20 py-10 text-gray-700 w-screen">
          <p className="font-[verdana]  md:flex hidden">Estamos comprometidos en ofrecer soluciones integrales y personalizadas para el
éxito de su empresa en la industria cosmética. Con nuestra experiencia,
conocimiento técnico y enfoque en la calidad, podemos ayudarte a alcanzar tus
objetivos de innovación, cumplimiento normativo y eficiencia operativa.</p>
          <p className="font-extrabold text-lg mb-10 md:mt-10">¿Estás listo para llevar tu negocio al siguiente nivel?</p>
          <p className="font-[verdana] ">Nos encantaría conversar sobre cómo podemos apoyarte en el diseño, desarrollo y
optimización de tus productos cosméticos, así como en la implementación de
prácticas que garantizan la calidad y la seguridad de tus productos.</p>
        <div>
          <img src={logo} alt="logo" className="absolute -z-1 md:-top-2 md:left-20 -top-5 left-10 grayscale opacity-[0.3]"/>
         </div>
        </div>
          <div className="bg-seconde p-5 text-white font-[verdana] text-center font-bold">
            <p><span></span>Teléfono: +57 350 311 89 75</p>
            <p><span></span>Correo Electrónico: dircientifica.cosmetiq@gmail.com</p>
          </div>
      </div>
  )
}
export default Contact