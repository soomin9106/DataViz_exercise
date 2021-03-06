Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allCountryNames = unpack(rows, 'country'),
        allYear = unpack(rows, 'year'),
        allGdp = unpack(rows, 'gdpPercap'),
        listofCountries = [],
        currentCountry,
        currentGdp = [],
        currentYear = [];

    for (var i = 0; i < allCountryNames.length; i++ ){
        if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
            listofCountries.push(allCountryNames[i]);
        }
    }

    function getCountryData(chosenCountry) {
        currentGdp = [];
        currentYear = [];
        for (var i = 0 ; i < allCountryNames.length ; i++){
            if ( allCountryNames[i] === chosenCountry ) {
                currentGdp.push(allGdp[i]);
                currentYear.push(allYear[i]);
            }
        }
    };

    // Default Country Data
    setBubblePlot('Afghanistan');

    function setBubblePlot(chosenCountry) {
        getCountryData(chosenCountry);

        var trace1 = {
            x: currentYear,
            y: currentGdp,
            mode: 'lines+markers',
            marker: {
                size: 12,
                opacity: 0.5
            }
        };

        var data = [trace1];

        var layout = {
            title:'Line and Scatter Plot',
            height: 400,
            width: 480
        };

        Plotly.newPlot('myDiv', data, layout);
    };

    
});