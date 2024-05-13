import Plotly from'plotly.js-dist';

export function drawChart(chartData, p, g, divName) {
    let trace = {
        x: chartData.time,
        close: chartData.mid_c,
        high: chartData.mid_h,
        low: chartData.mid_l,
        open: chartData.mid_o,
        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y',
        increasing: { line: {width: 1, color: '#24a06b' }, fillcolor: '#24a06b'},
        decreasing: { line: {width: 1, color: '#cc2e3c' }, fillcolor: '#cc2e3c'},
    }

    let data = [trace];

    let layout = {
        title: `Data for ${p} ${g}`,
        height: '100%',
        autosize: true,
        showLegend: false,
        margin: {
            l: 50, r: 50, b: 50, t: 50
        },
        xaxis: {
            rangeslider: {
                visible: false
            }
        }
    };

    Plotly.newPlot(divName, data, layout, { responsive: true });
    Plotly.Plots.resize(document.getElementById(divName));
}