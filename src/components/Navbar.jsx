const Navbar = (props) => {
  return (
    <div>
      <nav className="bg-black w-fit rounded-b-lg h-[100px] flex justify-center  items-center px-[200px] ">
        <div className="text-white mx-6 text-2xl ">
          <ul className="flex flex-row gap-6">
            <li className="hover:scale-110 hover:pointer hover:text-cyan-200">
              <a href="#{props.arr[0]}">
                <i className="fas fa-home mx-2"></i>
                <p className="hidden md:block inline">{props.arr[0]}</p>
              </a>
            </li>
            <li className="hover:scale-110 hover:pointer hover:text-cyan-200">
              <a href="#{props.arr[1]}">
                <i className="fas  fa-gamepad mx-2"></i>
                <p className="hidden md:block inline">{props.arr[1]}</p>
              </a>
            </li>
            <li className="hover:scale-110 hover:pointer hover:text-cyan-200">
              <a href="#{props.arr[2]}">
                <i className="fas fa-address-book mx-2 "></i>
                <p className="hidden md:block inline">{props.arr[2]}</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
