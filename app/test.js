export default options => `
var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '折柱混合';

    option = ${JSON.stringify(options)};
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        setTimeout(function(){myChart.resize();}, 0);
    }
    document.addEventListener('message', function(e) {
        var option = JSON.parse(e.data);
        myChart.setOption(option, true);
        myChart.resize()
    });
`