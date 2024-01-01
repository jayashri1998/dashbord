import React from "react";
import Donut from "./Donut";


function Piechart() {
  const bgColor = "#ededed";
  const values = [
    { value: 55, color: "#6E45EB",  lineWidth: 4.5 },
    { value: 35, color:"#F1EFFC", lineWidth: 2.5 },
    { value: 10, color: "#F6278F", lineWidth: 5.5 }
    
  ];

  return (
    <div className="flex flex-col flex-wrap md:w-fit  mx-3 md:ml-[130px] lg:ml-5 my-5 bg-white rounded-md py-3  px-3 gap-x-2  overflow-auto">
    <div>
      <h3 className="font-semibold">Customers</h3>
      <h6 className="text-xs text-gray-500">Customers that buy products</h6>
    </div>
    <Donut
        values={values}
        bgColor={bgColor}
        defaultLineWidth={1.5}
        height={200}
        width={500}
      />
    </div>
  );
}

export default Piechart;
