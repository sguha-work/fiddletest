FusionCharts.ready(function () {
    var conversionChart = new FusionCharts({
        type: 'bubble',
        renderAt: 'chart-container',
        width: '600',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales Analysis of Shoe Brands",
                "subcaption": "Last Quarter",
                "xAxisMinValue": "0",
                "xAxisMaxValue": "100",
                "yAxisMinValue": "0",
                "yAxisMaxValue": "30000",
                "plotFillAlpha": "70",
                "plotFillHoverColor": "#6baa01",
                "xAxisName": "Average Price",
                "yAxisName": "Units Sold",
                "numDivlines": "2",
                "showValues":"1",
                "showTrendlineLabels": "0",
                //Dynamic tooltip built using macros
                "plotTooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$name :</div>{br}Units Sold : <b>$yDataValue</b>{br}Average Price: <b>$$xDataValue</b>{br}Profit Share : <b>$zvalue%</b>",
                "theme": "fint"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "0",
                            "x": "0"
                        }, 
                        {
                            "label": "$20",
                            "x": "20",
                            "showverticalline": "1"
                        }, 
                        {
                            "label": "$40",
                            "x": "40",
                            "showverticalline": "1"
                        },
                        {
                            "label": "$60",
                            "x": "60",
                            "showverticalline": "1"
                        }, 
                        {
                            "label": "$80",
                            "x": "80",
                            "showverticalline": "1"
                        }, 
                        {
                            "label": "$100",
                            "x": "100",
                            "showverticalline": "1"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "color":"#00aee4",
                    "data": [
                        {
                            "x": "80",
                            "y": "15000",
                            "z": "24",
                            "name": "Nike"
                        }, 
                        {
                            "x": "60",
                            "y": "18500",
                            "z": "26",
                            "name": "Adidas"
                        }, 
                        {
                            "x": "50",
                            "y": "19450",
                            "z": "18",
                            "name": "Puma"
                        }, 
                        {
                            "x": "65",
                            "y": "10500",
                            "z": "8",
                            "name": "Fila"
                        }, 
                        {
                            "x": "43",
                            "y": "8750",
                            "z": "5",
                            "name": "Lotto"
                        }, 
                        {
                            "x": "32",
                            "y": "22000",
                            "z": "10",
                            "name": "Reebok"
                        }, 
                        {
                            "x": "44",
                            "y": "13000",
                            "z": "9",
                            "name": "Woodland"
                        }
                    ]
                }
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startValue": "20000",
                            "endValue": "30000",
                            "isTrendZone": "1",
                            "color": "#aaaaaa",
                            "alpha": "14"
                        }, 
                        {
                            "startValue": "10000",
                            "endValue": "20000",
                            "isTrendZone": "1",
                            "color": "#aaaaaa",
                            "alpha": "7"
                        }
                    ]
                }
            ]
        }
    });
    conversionChart.render();
});