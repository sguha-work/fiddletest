FusionCharts.ready(function () {
    var chart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'chart-container',
        id  : 'myThm',
        width: '240',
        height: '330',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Temperature Monitor",
                "subcaption": " Central cold store",
                "lowerLimit": "-10",
                "upperLimit": "0",
                "numberSuffix": "°C",
                "decimals" : "1",
                "showhovereffect": "1",
                "gaugeFillColor": "#008ee4",
                //Thermometer height and bulb radious configuration   
                "thmBulbRadius" : "35",
                "thmHeight" : "200",
                
                "thmOriginX": "100",
                "theme" : "fint",
                "chartBottomMargin" : "20"
            },
            "value": "-6"
        },
        "events" :{
            "initialized": function (evt, arg) {
                var dataUpdate = setInterval(function () {
                    var value,
                        prevTemp = FusionCharts.items["myThm"].getData(),
                        mainTemp = (Math.random()*10)* (-1),
                        diff = Math.abs(prevTemp - mainTemp);
                    
                    diff = diff > 1 ? (Math.random()*1) : diff;
                    if(mainTemp > prevTemp){
                        value = prevTemp + diff;
                    }else{
                        value = prevTemp - diff;
                    }                            
                    FusionCharts.items["myThm"].feedData("&value="+value);
                }, 3000);
            }  
        }
    })
    .render();
});