import React from 'react';
import DonutChart from './ChartDonut'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const DonutChartCard = ({title, labels, series, totalLabel, onClick}) => {

    return (
        <div className="card">
          <div className="card-top">
            <h2>{title}</h2>
            <FontAwesomeIcon icon={faEllipsisV} onClick={onClick} />
          </div>
         <DonutChart labels={labels} series={series} totalLabel={totalLabel} />
        </div>
    );
};

export default DonutChartCard;