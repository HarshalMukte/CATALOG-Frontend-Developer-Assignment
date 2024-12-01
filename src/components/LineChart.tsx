"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { generateFakeData } from "@/utils/generateFakeData";
import { useState } from "react";
import { FiBarChart2, FiMaximize2 } from "react-icons/fi";
import { TooltipItem } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);

export default function LineChart() {
  const [activeRange, setActiveRange] = useState("1W");

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const prices = generateFakeData(7, 63000, 200); // Generate data with 7 days, starting at 63k, and moderate volatility.

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: prices,
        borderColor: "#615ff5",
        backgroundColor: "rgba(97, 95, 245, 0.2)",
        fill: true,
        pointBorderColor: "#615ff5",
        pointBackgroundColor: "#ffffff",
        pointHoverBorderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
            title: (tooltipItems: TooltipItem<"line">[]) => `Day: ${tooltipItems[0].label}`,
            label: (tooltipItem: TooltipItem<"line">) =>
                `$${(tooltipItem.raw as number)?.toFixed(2)} USD`, // Cast `raw` to number
            },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280" },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "rgba(107, 114, 128, 0.2)", // Light gridlines
        },
        ticks: { color: "#6b7280" },
      },
    },
  };

  const handleFullscreen = () => {
    const chartCanvas = document.querySelector("canvas");
    const image = chartCanvas?.toDataURL("image/png");
    if (image) {
      const newTab = window.open();
      newTab?.document.write(`<img src="${image}" style="width:65%;" />`);
    }
  };

  const handleCompare = () => {
    alert("Compare functionality is under development."); // Placeholder for now
  };

  return (
    <div className="space-y-4">
          <div className="flex justify-between gap-2 flex-col lg:flex-row gap-y-6">
        {/* Header Buttons */}
        <div className="flex justify-between ">
          <div className="flex space-x-6">
            <button
              onClick={handleFullscreen}
              className="flex text-gray-600 hover:text-primary space-x-2 text-sm"
            >
              <span>Fullscreen</span>
              <FiMaximize2 size={18} />
            </button>
            <button
              onClick={handleCompare}
              className="flex text-gray-600 hover:text-primary space-x-2 text-sm"
            >
              <span>Compare</span>
              <FiBarChart2 size={18} />
            </button>
          </div>
        </div>

        {/* Time Range Buttons */}
        <div className="flex space-x-4 justify-end flex-wrap gap-y-4">
          {["1D", "3D", "1W", "1M", "6M", "1Y", "Max"].map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-4 py-1 text-sm rounded-lg ${
                activeRange === range
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-72 w-full bg-white shadow rounded-lg p-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
