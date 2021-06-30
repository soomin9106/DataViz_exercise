const rawDataURL ="https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv";

Plotly.d3.csv(rawDataURL, function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

const data=[{
    type: 'scatter',
    x: unpack(rows,'continent'),
    y: unpack(rows, 'gdpPercap'),
    mode: 'markers',
    transform:[{
        type: 'groupby',
        groups: 'continent',
        styles: [
            {target: 'Asia', value: {marker: {color: 'blue'}}},
            {target: 'Europe', value: {marker: {color: 'red'}}},
            {target: 'Africa', value: {marker: {color: 'black'}}},
            {target: 'Americas', value: {marker: {color: 'yellow'}}},
            {target: 'Oceania', value: {marker: {color: 'green'}}}
          ]
    }]
}]

Plotly.newPlot('myDiv', data);
});