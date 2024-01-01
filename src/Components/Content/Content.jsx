import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import "./Content.css";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import { SidebarContext } from "../../context/sidebarContext";
import Product from "../Product/Product";
import Piechart from "../Chart/Piechart";
import ContentMain from "../ContentMain/ContentMain";

const Content = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="bg-[#F5F6F8] w-full overflow-x-hidden font-roboto font-medium flex-1 ">
      <div className="flex center-items mr-3 mt-6  justify-between mx-5 ">
        <div className="flex  align-middle">
        <div>
        <button type="button" className="" onClick={() => toggleSidebar()}>
            <BiMenu size={25} />
          </button>
        </div>
          
          <h3 className="mt-[2px] ml-2">
          Hello User
          </h3>
          
        </div>
        <div className="lg:mr-9">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-1 pl-10 text-sm text-gray-400   rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <Cards />
      <ContentMain/>
      <Product />
    </div>
  );
};

export default Content;
