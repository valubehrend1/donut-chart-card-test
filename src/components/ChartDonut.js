import React from 'react';
import Chart from 'react-apexcharts';
import dataDefaultOptions from './DataDefaultOptions';

const ChartDonut = ({series, labels}) => {

dataDefaultOptions.labels = labels;
const dataOptions = JSON.parse(JSON.stringify(dataDefaultOptions));

  return(
    <div className="donut">
      <Chart options={dataOptions} series={series} type="donut" width="380" />
    </div> 
  )
}

export default ChartDonut;

