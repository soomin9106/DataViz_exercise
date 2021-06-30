function loadJson(){
    return fetch('data.json')
    .then(response => response.json())
    .then(json => json);
}

loadJson()
.then((arrays) => {
    console.log(arrays[0]['word']);
    const wordArr=[];
    const freqArr=[];
    for(let i=0;i<arrays.length;i++){
        wordArr.push(arrays[i]['word']);
        freqArr.push(arrays[i]['frequency']);
    }
    const trace={
        x: wordArr,
        y: freqArr,
        name: 'words',
        type: 'bar',
        marker: {color: 'rgb(142,124,195)'}
    };

    const data = [trace];

    const layout = {
        title: 'Word Frequency Graph (able to edit ver)',
        font:{
          family: 'Ubuntu'
        },
        showlegend: false,
        xaxis: {
          tickangle: -45
        },
        yaxis: {
          zeroline: false,
          gridwidth: 2
        },
        bargap :2
      };
      
      const config = {
        toImageButtonOptions: {
          format: 'svg', // one of png, svg, jpeg, webp
          filename: 'custom_image',
          height: 500,
          width: 700,
          scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
        }
      };

      Plotly.newPlot('myDiv', data, layout,config);
    
})
.catch(console.log);