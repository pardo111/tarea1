 

const Footer =(props)=>{
    const id= "footer";
     return (
        <footer id={id} className='bg-black text-white p-6 min-h-[200px] flex flex-row flex-wrap justify-around'>
            <div className="flex items-center justify-center align-center py-6">
                <img src="" alt="aqui deberia ir el logo" />
            </div>
            <div className="flex flex-col align-center items-start  py-6"> 
                <h1>Social Media</h1>
                {
        Object.entries(props.data).map(i=> <a href={ i[1][0]} className="hover:scale-105 hover:text-cyan-200"><i className={ i[1][1] + "m-3 "}></i>{i[0]}</a>)
                }
            </div>
            <div className="flex items-center justify-center align-center  py-6">
                &copy; derechos reservados para el uso de esta web 
                <br />
                realizada el 01/12/12
            </div>
        </footer>
    );
};

export default Footer;