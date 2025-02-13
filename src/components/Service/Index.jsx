import { Layout } from "../Layout"
import { Title } from "../Title"
import {Card} from "../Card"
import logo from '../../assets/logo/Subject.png'

const Service = () => {
  
  const cardsData = {
  cart1:{
    title:'DISEÑO Y DESARROLLO DE PRODUCTOS COSMÉTICOS',
    content:'Convertimos tus ideas en productos cosméticos innovadores, seguros y adaptados a las necesidades del mercado. Ofrecemos un enfoque integral que abarca tanto el diseño creativo como el desarrollo técnico para garantizar el éxito de tus productos.',
    list:['Diseño de productos', 'Formulación personalizada', 'Pruebas de laboratorio y prototipos', 'Acompañamiento en escalonamiento','Soporte técnico regulatorio'],
    },
  cart2:{
    title:'CONSTRUCCIÓN Y GESTIÓN DE ESTUDIOS DE ESTABILIDAD',
    content: 'Aseguramos la calidad y la seguridad a largo plazo de tus productos cosméticos mediante estudios de estabilidad confiables. Nuestro enfoque integral abarca desde el diseño del protocolo hasta la interpretación de resultados, garantizando el cumplimiento de los requisitos regulatorios aplicables.',
    list:['Diseño del protocolo de estabilidad','Soporte en la ejecución', 'Análisis e interpretación de resultados','Preparación de informes finales'],
    },
  cart3: {
    title:'VERIFICACIÓN E IMPLEMENTACIÓN DE BUENAS PRÁCTICAS DE MANUFACTURA COSMÉTICAS',
    content:'Asegura la calidad y seguridad de tus productos mediante la implementación de Buenas Prácticas de Manufactura (BPM), un estándar esencial para empresas competitivas. Este enfoque minimiza el riesgo de contaminación, mejora la productividad y aumenta la rentabilidad.',
    list:['Evaluación y diagnóstico','Plan de acción personalizado','Diseño de estrategias de monitoreo'],
  },
  cart4: {
    title:'PROGRAMA DE ENTRENAMIENTOS',
    content:'Un programa de entrenamiento es un conjunto estructurado de actividades diseñadas para mejorar las habilidades y conocimientos de los empleados en áreas específicas. Un entrenamiento efectivo optimiza el desempeño individual y organizacional, reduce errores y aumenta la productividad.',
    list:['Diseño y desarrollo de programas de entrenamiento','Ejecución de entrenamientos','Evaluación del aprendizaje'],
  },
  cart5: {
    title:'DISTRIBUCIÓN DE COMMODITIES Y MATERIAS PRIMAS PARA LA INDUSTRIA COSMÉTICA',
    content: 'Contamos con una sólida red de proveedores de commodities y materias primas de alta calidad, esenciales para la fabricación de productos cosméticos. Nuestra experiencia nos permite ofrecer soluciones personalizadas, asegurando que los materiales utilizados cumplan con los estándares más rigurosos de calidad y normativa.',
    list:['Provisión de materias primas especializadas','Selección de proveedores confiables','Asesoría técnica','Gestión de logística eficiente'],
  },
};
  return (
    <Layout>
      <section id="service">
        <Title>Nuestros Servicios</Title>
      <ul className="mx-6 md:flex md:w-full md:overflow-y-scroll">
      {
      Object.keys(cardsData).map((key) => (
        <li key={key} className="md:flex-none md:max-w-[400px]">
        <Card key={key} title={cardsData[key].title} content={cardsData[key].content} list={cardsData[key].list} />
        </li>
      ))}
      </ul>
      </section>
      <div className='bg-seconde my-5 w-full h-0.5'> </div>
    </Layout>
  )
}
export default Service