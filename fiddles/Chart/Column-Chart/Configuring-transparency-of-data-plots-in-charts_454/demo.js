$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Comparison of Quarterly Revenue",
                    "subCaption": "Harry's SuperMart",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "plotFillAlpha":"90",
                    "theme": "fint"
            },
                "categories": [{
                "category": [{
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3"
                }, {
                    "label": "Q4"
                }]
            }],
                "dataset": [{
                "seriesname": "Previous Year",
                    "alpha" : "30",
                    "data": [{
                    "value": "10000"
                }, {
                    "value": "11500"
                }, {
                    "value": "12500"
                }, {
                    "value": "15000"
                }]
            }, {
                "seriesname": "Current Year",
                    "data": [{
                    "value": "25400"
                }, {
                    "value": "29800"
                }, {
                    "value": "21800"
                }, {
                    "value": "26800"
                }]
            }]
        }
    });

    revenueChart.render();
});});