function gradient(yValue) {
    var r, g, b = 0;
    if(yValue < 50) {
        r = 240;
        g = Math.round(5 * yValue);
        b = 255;
    }
    else {
        g = 240;
        r = Math.round(510 - 5.1 * yValue);
        b = Math.round(510 - 5.1 * yValue);
        
    }
    return "rgb(" + r + "," + g + "," + b + ")";
}

let drawChart = function(data) {
    let chart = document.getElementById("chart_div");
    let background = document.getElementById("chart_bg");

    for (let x = 0; x < 10; x++) {
        let horizontalLine = document.createElement('div');
        horizontalLine.style.boxSizing = 'border-box';
        horizontalLine.style.borderRight = '1px solid #fcccff';
        horizontalLine.style.height = '100%';
        horizontalLine.style.width = '10%';
        horizontalLine.style.display = 'inline-block';
        background.append(horizontalLine);

        let xLabel = document.createElement("p");
        xLabel.innerHTML = (10 * x) + '%';
        xLabel.style.position = 'absolute';
        xLabel.style.top = '100%';
        xLabel.style.left = (10 * x) + '%';
        background.appendChild(xLabel);


        let yLabel = document.createElement("p");
        yLabel.innerHTML = (10 * x) + '%';
        yLabel.style.position = 'absolute';
        yLabel.style.right = '100%';
        yLabel.style.bottom = (10 * x) + '%';
        background.appendChild(yLabel);
    }

    for (let dataPoint of data) {
        let yValue = dataPoint["Girls enrolled in high school, %"];
        let xValue = dataPoint["girls under 18 married, %"];
        let country = dataPoint["Country"];

        console.log("point " + xValue + ", " + yValue);
        if (xValue === undefined || yValue === undefined) {
            continue;
        }

        let element = document.createElement("div");
        element.className = 'chart-point';
        element.style.position = 'absolute';
        element.style.bottom = yValue + '%';
        element.style.left = xValue + '%';
        element.style.borderRadius = '50%';
        element.style.width = '15px';
        element.style.height = '15px';
        
        element.style.backgroundColor = gradient(yValue);

        let popOver = document.createElement('div');
        popOver.style.position = 'absolute';
        popOver.style.top = '-32px';
        popOver.style.left = '32px';
        popOver.style.width = '150px'; 
        popOver.style.zIndex = '999';
        popOver.style.backgroundColor = "black";
        popOver.innerHTML = "<strong>" + country + "</strong><br>Girls in school: "+ yValue + "%"+ "<br>Married before 18: " + xValue + "%";
        element.append(popOver);

        chart.appendChild(element);
    }
};

Papa.parse('https://OlenaMo.github.io/dataset2.csv', {
    download: true,
    header: true,
    complete: function(result) {
        console.log(result.data);
        drawChart(result.data);
    }
  

})