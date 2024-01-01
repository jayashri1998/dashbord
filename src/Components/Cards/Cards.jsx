import {
  AiOutlineDollar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
function Cards() {
  return (
    <div className="flex flex-col md:flex-row lg:flex flex-wrap md:gap-x-8  lg:gap-x-8">
      <div className="w-[245px] mx-auto md:mx-0 my-5 bg-white rounded-md flex py-3 px-3 gap-x-2 md:ml-32 lg:ml-5">
        <div className="bg-[#DEFEEE] rounded-full py-5 px-5">
          <AiOutlineDollar size={40} color="#1BB460" />
        </div>
        <div>
          <p className="text-sm text-[#C4C4C4] font-light">Earning</p>
          <p className="text-2xl font-bold">$198k</p>
          <p className="flex text-sm align-middle">
            <AiOutlineArrowUp color="#1BB460" size={15} className="" />
            <span className="text-[#1BB460]">37.8%</span>this month
          </p>
        </div>
      </div>

      <div className="w-[245px] mx-auto md:mx-0 my-5 bg-white rounded-md flex py-3 px-3 gap-x-2">
        <div className="bg-[#e7dbff] rounded-full py-5 px-5">
          <TiDocumentText size={40} color="#AF2CFE" />
        </div>
        <div>
          <p className="text-sm text-[#C4C4C4] font-light">Orders</p>
          <p className="text-2xl font-bold">$2.4k</p>
          <p className="flex text-sm align-middle">
            <AiOutlineArrowDown color="#D63264" size={15} className="" />
            <span className="text-[#D63264]">2%</span>this month
          </p>
        </div>
      </div>
      <div className="w-[245px] mx-auto md:mx-0 my-5 bg-white rounded-md flex py-3 px-3 gap-x-2 md:ml-32 lg:ml-0">
        <div className="bg-[#CDF3FF] rounded-full py-5 px-5">
          <IoWalletOutline size={40} color="#1161C3" />
        </div>
        <div>
          <p className="text-sm text-[#C4C4C4] font-light">Balance</p>
          <p className="text-2xl font-bold">$2.4k</p>
          <p className="flex text-sm align-middle">
            <AiOutlineArrowDown color="#D63264" size={15} className="" />
            <span className="text-[#D63264]">2%</span>this month
          </p>
        </div>
      </div>
      <div className="w-[245px] mx-auto md:mx-0 my-5 bg-white rounded-md flex py-3 px-3 gap-x-2">
        <div className="bg-[#FFC9EA] rounded-full py-5 px-5">
          <HiOutlineBriefcase size={40} color="#D90516" />
        </div>
        <div>
          <p className="text-sm text-[#C4C4C4] font-light">Total Sales</p>
          <p className="text-2xl font-bold">$89k</p>
          <p className="flex text-sm align-middle">
            <AiOutlineArrowUp color="#1BB460" size={15} className="" />
            <span className="text-[#1BB460]">11%</span>this month
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
