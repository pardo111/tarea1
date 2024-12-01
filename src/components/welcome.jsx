import photo from '../img/medium-shot-man-wearing-vr-glasses.jpg';

const Welcome = () => {
    const id= "welcome`";
    return (
        <div id={id} className="h-[90vh] w-screen relative z-0 mb-16">
            {/* Imagen de fondo */}
            <img 
                src={photo} 
                alt="Imagen de bienvenida" 
                className="h-full w-full object-cover absolute top-0 left-0"
            />
            {/* Contenido sobre la imagen */}
            <div className="relative  flex justify-center items-center h-full w-full bg-black bg-opacity-50 z-0">
                <h1 className="text-6xl md:text-9xl text-white">Welcome! <br /> Tecnology Store</h1>
            </div>
        </div>
    );
};

export default Welcome;