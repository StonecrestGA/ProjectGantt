google.charts.load('current', {
  callback: drawChart,
  packages: ['gantt']
});

function drawChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1DB3qOi1uKajYFWGvZj_Fd6_fxvEMs8aTRI1vbeDgxoE/gviz/tq?gid=0&sheet=2018Projects&headers=1');
  query.send(function(response) {
    if (response.isError()) {
      console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    };

    var options = {
      height: 1000,
      gantt: {
        criticalPathEnabled: false,
        barHeight: 18,
        trackHeight: 32,
        shadowEnabled: false,
        arrow: {
          angle: 100,
          width: 2,
          color: 'black',
          radius: 0
        },
        labelStyle: {
          fontSize: 16,
          fontName: 'Source Sans Pro'
        },
        innerGridDarkTrack: {

        }
      }
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
    chart.draw(response.getDataTable(), options);
  });
}
