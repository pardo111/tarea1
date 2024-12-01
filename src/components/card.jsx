const Card = (props) => {
    return (
        <div className="flex flex-col bg-gray-300 rounded-3xl m-4 p-6 max-w-xs hover:scale-105 transition duration-200 h-[450px] ">
             <img src={props.urlImagen} alt="" className="min-w-[80%] min-h-[50%] object-cover rounded-xl" />
             <div className="flex flex-col justify-start pb-12">
                <h1 className="text-3xl bold py-3 ">{props.producto}</h1>
                <h2 className="text-xl py-2">${props.precio}</h2>
                <p className="text-center text-xs  ">{props.descripcion}</p>
            </div>
        </div>
    );
};

export default Card;