export default function TextoProps(props: { texto: string; titulo: string }) {
  return (
    <div className="text-white mb-7 flex flex-col items-start justify-start w-250 p-6 text-left">
      <h1 className="text-white">{props.titulo}</h1>
      <br /> <br />      
        <p className="text-white px-6">{props.texto}</p>          
          <br /> <br />   
                </div>
          );
        }
