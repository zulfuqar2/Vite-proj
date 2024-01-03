import './component-css/main.css'; 
import img from "../img/logo.png"

function Header() {
  return (
    <>
    <div>
     
    <div className='flex justify-start w-100 bg-purple-50 '>
    <img src={img} alt=""className='w-25 h-14 flex justify-start' />
    <h1 className="text-3xl font-bold   justify-center">
      Pizza Menu
    </h1>
    </div>
    </div>


    </>
  );
}

export default Header;
