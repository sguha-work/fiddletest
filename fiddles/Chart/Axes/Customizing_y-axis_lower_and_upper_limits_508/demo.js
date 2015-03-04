$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Revenue",
                "subcaption":"Last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount (In USD)",
                "numberPrefix": "$",
                "theme": "fint",
                //Manually setting y-axis upper and lower limit
                "yAxisMaxValue": "2500000",
                "yAxisMinValue": "1000000"                
            },            
            "data": [
                {
                    "label": "Q1",
                    "value": "1950000"
                },
                {
                    "label": "Q2",
                    "value": "1450000"
                },
                {
                    "label": "Q3",
                    "value": "1730000"
                },
                {
                    "label": "Q4",
                    "value": "2120000"
                }
            ]
        }
    }).render();    
});});