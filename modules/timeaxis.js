document.addEventListener('DOMContentLoaded', function () {

    var myChart = echarts.init(document.getElementById('time-axis'));
    myChart.hideLoading();
    myChart.setOption(
        (option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
            type: 'tree',
            data: [data],
            left: '2%',
            right: '2%',
            top: '20%',
            bottom: '8%',
            symbol: 'emptyCircle',
            orient: 'BT',
            expandAndCollapse: true,
            label: {
                position: 'bottom',
                rotate: 90,
                verticalAlign: 'middle',
                align: 'right'
            },
            leaves: {
                label: {
                position: 'top',
                rotate: 90,
                verticalAlign: 'middle',
                align: 'left'
                }
            },
            emphasis: {
                focus: 'descendant'
            },
            animationDurationUpdate: 750
            }
        ]
        })
    );
});