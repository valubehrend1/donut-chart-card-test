const dataDefaultOptions = {
    dataLabels: {
        enabled: false
    },
    responsive: [{
                breakpoint: 451,
                options: {
                  chart: {
                    width: 250
                  },
                  legend: {
                    show: false
                  }
                }
              }],
              legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
              },
    colors: ['#C4366F', '#85ADFF', '#502579'],
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    value: {
                        show: true,
                        color: undefined,
                        offsetY: -20
                    },
                    name: {
                        show: true,
                        color: undefined,
                        offsetY: 20,
                    },
                    total: {
                        label: 'TOTAL USERS',
                        showAlways: true,
                        show: true
                    }
                }
            }
        }
    }
}

export default dataDefaultOptions;