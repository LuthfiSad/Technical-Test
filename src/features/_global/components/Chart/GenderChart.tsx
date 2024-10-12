// PieChart.tsx
import { useCustomer } from "@features/_global/hooks/useCustomer";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart: React.FC = () => {
  const { data: custumerMale, isLoading: isLoadingMale } = useCustomer({
    gender: "male",
  });
  const { data: custumerFemale, isLoading: isLoadingFemale } = useCustomer({
    gender: "female",
  });

  const maleCount = isLoadingMale ? 0 : custumerMale?.meta?.totalData ?? 0;
  const femaleCount = isLoadingFemale
    ? 0
    : custumerFemale?.meta?.totalData ?? 0;
  const total = maleCount + femaleCount;

  // Data and options for the chart
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Male", "Female"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = [maleCount, femaleCount]; // Data series (e.g., [90, 200])

  return (
    <div className="w-full flex items-center py-10 justify-between flex-wrap">
      <div>
        <h1 className="font-bold text-5xl text-center">TOTAL POPULATION: </h1>
        <h3 className="font-extrabold text-6xl">{total}</h3>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="500"
      />
    </div>
  );
};

export default PieChart;
