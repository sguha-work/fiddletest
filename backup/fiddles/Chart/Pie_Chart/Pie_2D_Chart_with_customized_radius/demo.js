FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of revenue by product categories",
                "subCaption": "Last year",
                "numberPrefix": "$",
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
                "decimals": "1",
                //Radius
                "pieRadius": "75",
                //Theme
                "theme": "fint"
            },
            "data": [
                {
                    "label": "Food",
                    "value": "285040"
                }, 
                {
                    "label": "Apparels",
                    "value": "146330"
                }, 
                {
                    "label": "Electronics",
                    "value": "105070"
                }, 
                {
                    "label": "Household",
                    "value": "49100"
                }
            ]
        }
    }).render();
    
});