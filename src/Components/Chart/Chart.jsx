import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Jan",
    pv: 3500,
  },
  {
    name: "Feb",
    pv: 2700,
  },
  {
    name: "Mar",
    pv: 4000,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3600,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 3800,
    amt: 2181,
  },
  {
    name: "Jun",
    pv: 2500,
  },
  {
    name: "Jul",
    pv: 3500,
  },
  {
    name: "Aug",
    pv: 4000,
    fill: "#5A32EA",
  },
  {
    name: "Sep",
    pv: 3800,
  },
  {
    name: "Oct",
    pv: 3300,
  },
  {
    name: "Nov",
    pv: 3000,
  },
  {
    name: "Dec",
    pv: 2300,
  },
];

function App() {
  return (
    <div className="flex flex-wrap mx-3 md:ml-[110px] lg:ml-0 overflow-auto">
    <div className="flex-col  md:w-fit mx-auto md:mx-0 my-5 bg-white rounded-md flex py-3  px-3 gap-x-2 md:ml-5">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">Overview</h3>
          <h6 className="text-xs text-gray-500">Monthly Earning</h6>
        </div>
        <div>
          <div>
            <select
              id="countries"
              className="bg-gray-50 px-3border  text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Quantity</option>
              <option value="ONE">Item 1</option>
              <option value="TWO">Item 2</option>
              <option value="THREE">Item 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "black" }} // Adjust tick font size
            tickLine={false} // Hide tick lines
            axisLine={false} // Hide axis line
          />
          <YAxis hide={true} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#dddddd" radius={[5, 5, 5, 5]} />
        </BarChart>
      </div>
    </div>
    </div>
  );
}

export default App;
