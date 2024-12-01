import Card from './card';
 
const Venta = (props) => {
    
 
     let id= "store";
    

    return (
        <div id={id}className='pl-[25%] sm:px-[70px]   grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 xl:grid-cols-5  my-12 '>
            {
                props.data.map(i=>
                      <Card producto={i.producto} precio={i.precio} descripcion={i.descripcion} urlImagen={i.urlImagen} />

                )
            }
        </div>
    );
};

export default Venta;