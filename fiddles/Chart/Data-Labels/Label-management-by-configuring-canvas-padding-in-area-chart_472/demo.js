$(window).load(function(){FusionCharts.ready(function () {
    var flag = 1,
        revenueChart = new FusionCharts({
        type: 'area2d',
        id: "myChart",
        renderAt: 'chart-container',
        width: '500',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Revenue",
                "subCaption": "Last year",
                "xAxisName": "Quarter",
                "yAxisName": "Amount (In USD)",
                "numberPrefix": "$",
                //Canvas padding
                "canvasPadding":"30",
                //Theme
                "theme" : "fint"
            },
            "data": [
                {
                    "label": "First Quarter",
                    "value": "420000"
                }, 
                {
                    "label": "Second Quarter",
                    "value": "810000"
                }, 
                {
                    "label": "Third Quarter",
                    "value": "720000"
                }, 
                {
                    "label": "Fourth Quarter",
                    "value": "550000"
                }
            ]
        },
        "events" : {
            "initialized" : function(evtObj, argObj){
                var radElem,
                    radio = document.getElementsByTagName('input');
                for (i = 0; i < radio.length; i++) {
                    radElem = radio[i];
                    if (radElem.type === 'radio')     
                    {                        
                        radElem.onclick = function()
                        {
                            val = this.getAttribute('value');
                            if(val === "withCP" && flag !== 1)
                            {
                                evtObj.sender.setChartAttribute( "canvasPadding" , "30" );
                                flag = 1;
                            } 
                            else if(val === "withoutCP" && flag !== 0)
                            {                            
                                evtObj.sender.setChartAttribute( "canvasPadding" , "0" );
                                flag = 0;
                            }
                        };
                    }
                }   
            }
            
        }
    });
    
    revenueChart.render();
});});