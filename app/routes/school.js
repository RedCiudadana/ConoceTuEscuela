import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      chartOptions: [{
        chart: {
          type: 'heatmap'
        },
        title: {
          text: 'Subject Evaluation'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        }
      }],
      chartData: [{
          name: 'Jane',
          data: [0, 1, 2]
        }, {
          name: 'John',
          data: [2, 1, 0]
      }],
    }
  } 
});
