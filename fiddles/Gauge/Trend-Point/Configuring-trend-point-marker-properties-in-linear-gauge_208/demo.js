$(window).load(function(){FusionCharts.ready(function () {
    var cpuGauge = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        id: 'cpu-linear-gauge',
        width: '400',
        height: '170',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Server CPU Utilization",
                "lowerLimit": "0",
                "upperLimit": "100",
                "numberSuffix": "%",
                "chartBottomMargin": "40",  
                "valueFontSize": "11",  
                "valueFontBold": "0",
                "valueAbovePointer": "0",
                "gaugeFillMix":"{light-10},{light-70},{dark-10}",
                "gaugeFillRatio":"40,20,40"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "35",
                        "label": "Low",
                    }, 
                    {
                        "minValue": "35",
                        "maxValue": "70",
                        "label": "Moderate",
                    }, 
                    {
                        "minValue": "70",
                        "maxValue": "100",
                        "label": "High",
                    }
                ]
            },
            "pointers": {
                "pointer": [
                    {
                        "value": "75"
                    }
                ]
            },
            "trendPoints": {
                "point": [
                    //Adding Trendpoint
                    {
                        "startValue": "70", 
                        "dashed": "1",
                        "thickness": "2",
                        //Marker related cosmetics
                        "useMarker": "1",
                        "markerColor":"#0075c2",
                        "markerBorderColor":"#666666",
                        "markerRadius":"5"
                    },
                    {
                        "startValue": "85", 
                        "dashed": "1",
                        "thickness": "2",
                        "useMarker": "1",
                        "markerColor":"#0075c2",
                        "markerBorderColor":"#666666",
                        "markerRadius":"5"
                    }
                ]                
            }
        }
    })
    .render();
});});