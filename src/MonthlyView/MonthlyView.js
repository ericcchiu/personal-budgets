import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import { Months } from '../data/Labels/Labels.json';
import { EmergencyFund } from '../data/MonthlyBalance.json';

// const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const chartConfig = {
  type: 'line',
  data: {
    labels: Months,
    datasets: [
      {
        label: 'Amount Saved($)',
        data: EmergencyFund,
        // backgroundColor: 'black',
        borderColor: 'blue',
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

const MonthlyViewChart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, setChartInstance]);

  // const updateDataset = (datasetIndex, newData) => {
  //   chartInstance.data.datasets[datasetIndex].data = newData;
  //   chartInstance.update();
  // };

  // const onButtonClick = () => {
  //   const data = [
  //     randomInt(),
  //     randomInt(),
  //     randomInt(),
  //     randomInt(),
  //     randomInt(),
  //     randomInt(),
  //   ];
  //   updateDataset(0, data);
  // };

  return (
    <div>
      {/* <button onClick={onButtonClick}>Randomize!</button> */}
      <canvas ref={chartContainer} />
    </div>
  );
};

export default MonthlyViewChart;
