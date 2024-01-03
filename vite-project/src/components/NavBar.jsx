
import './component-css/main.css'; 
function NavBar() {
  return (
  <>
  <nav>
 <ul className="flex justify-between">
    <li className="ml-5  hover:bg-red-400 ">About</li>
    <li className=" hover:bg-red-400 ">Faq</li>
    <li className=" hover:bg-red-400 ">Home</li>
    <li className=" hover:bg-red-400 ">Profile</li>
    <li className=" hover:bg-red-400 ">Shop</li>
    <li className="mr-6  hover:bg-red-400 ">Card</li>
 </ul>


  </nav>
  
  
  
  </>
  )
}

export default NavBar