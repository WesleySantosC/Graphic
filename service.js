$(document).ready(function () {
    let names = ['Orange', 'Melon', 'Strawberry', 'Peach'];

    let expenses = [
        [12, 15, 20],
        [10, 13, 15],
        [18, 20, 25],
        [5, 16, 18]
    ];

    let date = [1, 2, 3];

    let seriesData = names.map((name, i) => {
        return {
            name: name,
            data: expenses[i]
        }
    });

    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Valor'
        },
        tooltip: {
            shared: true,
            valuePrefix: 'R$ ' 
        },
        xAxis: {
            categories: date
        },
        yAxis: {
            title: { text: 'Valor' }
        },
        series: seriesData
    });
});
