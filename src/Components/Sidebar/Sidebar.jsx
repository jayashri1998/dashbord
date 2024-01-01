import "./Sidebar.css";
import mainlogo from "../../assets/mainlogo.png";
import { HiOutlineKey } from "react-icons/hi";
import { TbCube, TbUserSquareRounded, TbDiscount2 } from "react-icons/tb";
import { BiWalletAlt } from "react-icons/bi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { useContext,useEffect, useState } from "react";
 import SidebarContext from "../../context/sidebarContext"
const Sidebar = () => {

  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if(isSidebarOpen){

      
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={` min-h-screen bg-[#040440] transition-all duration-500 ease-in-out sidebar ${sidebarClass}`}>
      <div className="flex justify-center text-center pt-5 mb-7">
        <img src={mainlogo} alt="logo" className="w-6 h-6 mt-[2px] mr-1" />
        <h1 className=" hidden lg:block text-white font-roboto text-lg font-semibold tracking-wide  mt-[1px]">
          Dashboard
        </h1>
      </div>
      <div className="flex items-center bg-[#2D2D69] mx-3 rounded py-1">
        <HiOutlineKey
          color="white"
          size={15}
          className="border border-white rounded ml-2"
        />
        <h2 className="hidden lg:block text-white ml-3">Dashboard</h2>
      </div>

      <div className="flex items-center ml-3 mt-6 unselected">
        <TbCube
          size={15}
          className="border-[1.8px] border-[#6D7095] rounded ml-[5px] lg:ml-2"
        />
        <h2 className="hidden lg:block ml-3">Product</h2>
        <FaAngleRight size={15} className="hidden lg:block ml-20" />
      </div>

      <div className="flex items-center ml-3 mt-6 unselected ">
        <div className="flex items-center ">
          <TbUserSquareRounded size={20} className="ml-1 lg:ml-2" />
          <h2 className="hidden lg:block ml-0 lg:ml-3">Customers</h2>
        </div>
        <FaAngleRight size={15} className="hidden lg:block  ml-14" />
      </div>

      <div className="flex items-center ml-3 mt-6 unselected">
        <BiWalletAlt size={18} className="ml-[5px] lg:ml-2" />
        <h2 className="hidden lg:block ml-3">Income</h2>
        <FaAngleRight size={15} className="hidden lg:block ml-20" />
      </div>

      <div className="flex items-center ml-3 mt-6 unselected">
        <TbDiscount2 size={20} className="ml-1 lg:ml-2" />
        <h2 className="hidden lg:block ml-3">Promote</h2>
        <FaAngleRight size={15} className="hidden lg:block ml-[70px] " />
      </div>

      <div className="flex items-center align-middle ml-3 mt-6 unselected">
        <MdOutlineLiveHelp size={20} className="ml-1 lg:ml-2" />
        <h2 className="hidden lg:block ml-3">Help</h2>
        <FaAngleRight size={15} className="hidden lg:block ml-[100px]" />
      </div>
<div className="bg-[#4D4C7D]  px-2 py-1 lg:py-2 mx-2 rounded mt-28 lg:mt-56">
  <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium text-white rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
    <span className="hidden lg:block sr-only">Open user menu</span>
    <img className="w-5 lg:w-8 h-5 lg:h-8 mr-2 rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1697553033~exp=1697553633~hmac=bab2308f5d09749b8897b4d85924cf17d509492c0a2822a5decebb6099e09da7" alt="user photo" />
    <h3 className="hidden lg:block">
    Evano Marino
    <span className="hidden lg:block text-xs text-gray-400">Project Manager</span>
    </h3>
    
    <svg className="hidden lg:block w-2.5 h-2.5 ml-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>

 
</div>

    </div>
  );
};

export default Sidebar;
