const Product = () => {
  return (
    <div className="relative overflow-x-auto mx-3 lg:mr-10 bg-white shadow-md sm:rounded-lg">
      <div className="flex justify-between px-3 md:px-6 pt-3">
        <h3 className="font-semibold">Product Sell</h3>
        <div className="flex items-center justify-between pb-4 gap-x-2">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-1 pl-10 text-sm text-gray-500  rounded-lg w-30 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
          <div>
          <select
            id="countries"
            className="bg-gray-50 px-3 border  text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Last 30 days</option>
            <option value="ONE">Last Quarter</option>
            <option value="TWO">Last Semester</option>
            <option value="THREE">Last Year</option>
          </select>
        </div>
        </div>
      </div>

      <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
             Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total Sales
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900  whitespace-nowrap dark:text-white"
            >
              <img
                className="w-13 h-10 rounded"
                src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Jese image"
              />

              <div className="pl-3">
                <div className="text-base font-semibold">Abstract 3D</div>
                <div className="font-normal text-gray-500 whitespace-normal">
                  lorem ipsum dolar sit amet
                </div>
              </div>
            </th>
            <td className="px-6 py-4 text-black">32 in stock</td>
            <td className="px-6 py-4 text-black text-lg font-semibold">$ 45.99</td>
            <td className="px-6 py-4 text-black">20</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
          scope="row"
          className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-13 h-10 rounded"
            src="https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg"
            alt="Jese image"
          />

          <div className="pl-3">
            <div className="text-base font-semibold">Sarphens Illustration</div>
            <div className="font-normal text-gray-500 whitespace-normal">
            lorem ipsum dolar sit amet
            </div>
          </div>
        </th>
        <td className="px-6 py-4 text-black">32 in stock</td>
        <td className="px-6 py-4 text-black text-lg font-semibold">$ 45.99</td>
        <td className="px-6 py-4 text-black">20</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
          scope="row"
          className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-13 h-10 rounded"
            src="https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Jese image"
          />

          <div className="pl-3">
            <div className="text-base font-semibold">Illustration</div>
            <div className="font-normal text-gray-500 whitespace-normal">
            lorem ipsum dolar sit amet
            </div>
          </div>
        </th>
        <td className="px-6 py-4 text-black">32 in stock</td>
        <td className="px-6 py-4 text-black text-lg font-semibold">$ 45.99</td>
        <td className="px-6 py-4 text-black">20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Product;
