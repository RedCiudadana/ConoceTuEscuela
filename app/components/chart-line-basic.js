import Component from '@ember/component';

export default Component.extend({

  init() {

    this._super(...arguments);

    this.chartOptions = {
      chart: {
        height: 200,
        type: 'line'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Satisfactoria', 'Insatisfactorio', 'Necesita mejorar']
      },
      yAxis: {
        categories: ['0%', '25%', '50%', '75%', '100%'], 
        title: ''
      },
      tooltip: {
        valueSuffix: '%'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    },

    this.chartData = [
      {
        name: 'Promedio A',
        data: [1, 2, 3],
        color: '#17b8f7'
      },
      {
        name: 'Promedio B',
        data: [2, 2, 3],
        color: '#6b40ca'
      }
    ]
  }

});
