import Chart from "../Chart/Chart";
import Piechart from "../Chart/Piechart";

const ContentMain = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Chart />
      <Piechart />
    </div>
  );
};

export default ContentMain;
