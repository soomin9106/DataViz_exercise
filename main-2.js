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
        type: 'bar',
        marker: {color: 'rgb(142,124,195)'}
    };

    const data = [trace];

    const layout = {
        title: 'Word Frequency Graph',
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
        bargap :0.05
      };
      
      Plotly.newPlot('myDiv', data, layout);
    
})
.catch(console.log);