export const Card = ({ title, content, list }) => {
  return(
    <div className="m-5  shadow-lg list-decimal md:grid md:grid-rows-[104px_auto_170px] md:min-h-[524px]"> 
      <h3 className=" text-seconde font-xl font-bold p-4 font-stretch-expanded text-center">{title}</h3>
      <p className="font-[verdana] p-4 text-gray-700 ">{content}</p>   
        <ul className="list-disc border-2 p-6 border-seconde bg-seconde rounded-b-md font-[verdana] text-white">
        {
        list.map((item, index) => (
          <li  key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}