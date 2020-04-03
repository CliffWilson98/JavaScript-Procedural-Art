this.drawCirclesOnCanvas(this.document.getElementById("imageCanvas"));
this.drawCirclesOnCanvas(this.document.getElementById("imageCanvas2"));
this.blendTheTwoCanvases();

function drawCirclesOnCanvas(canvas){
    var c = canvas;
    var ctx = c.getContext("2d");

    let points = []
    for (i = 0; i < 40; i ++){
        points.push({x:Math.round(Math.random() * 400), y:Math.round(Math.random() * 400)})
    }

    for (i = 0; i < points.length; i ++){
        let point = points[i];
        ctx.fillRect(point.x, point.y, 3, 3);

        let gradient = ctx.createRadialGradient(point.x, point.y, 20, point.x + 20, point.y + 20, 2 * this.Math.PI);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, 'yellow');
        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 20, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function blendTheTwoCanvases(){
    let ctx1 = this.document.getElementById("imageCanvas").getContext("2d");
    let ctx2 = this.document.getElementById("imageCanvas2").getContext("2d");

    var blendCanvas = document.getElementById("blendCanvas");
    var ctx = blendCanvas.getContext("2d");

    let blendAmount = document.getElementById("blendSlider").value

    let data1 = ctx1.getImageData(0, 0, 400, 400);
    let data2 = ctx2.getImageData(0, 0, 400, 400);

    if (data1.data.length == data2.data.length){
        for (i = 0; i < data1.data.length; i ++){
            let firstVal = data1.data[i];
            let secondVal = data2.data[i];
            let result = ((firstVal * blendAmount) + (secondVal * (1 - blendAmount)));
            data1.data[i] = result;
        }
    }

    ctx.putImageData(data1, 0, 0);
}
