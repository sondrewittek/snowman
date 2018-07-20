(function() {
    var koder = document.getElementsByTagName("kode");
    var labler = document.getElementsByTagName("Beskrivelse");
    var data = document.getElementsByTagName("antall");

    var v = [];
    var l = [];

    if (data.length > 0 && koder.length > 0) {
        for (var i = 0; i < data.length; i++) {
            v.push(data[i].innerHTML);
            l.push(labler[i].innerHTML + ": " + koder[i].innerHTML + ": " + data[i].innerHTML);
        }
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar', 
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 20
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 16
                    }
                }]
            }
        },
        data: {
            datasets: [{
                label: "EO 2016",
                data: v,
                backgroundColor: '#105695'
            }],
            labels: l
        }
    });

})()