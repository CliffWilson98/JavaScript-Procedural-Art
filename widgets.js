let PointGenerator = class{
    constructor(pointCount, maxX, maxY){
        this.pointCount = pointCount;
        this.maxX = maxX;
        this.maxY= maxY;
    }

    process(){
        let pointArray = [];
        for (let i = 0; i < this.pointCount; i++){
            let x = Math.round(Math.random() * this.maxX);
            let y = Math.round(Math.random() * this.maxY);
            pointArray.push({x: x, y: y});
        }
        return pointArray;
    }
}

let CircleGenerator = class{
    constructor(radius){
        this.radius = radius;
    }

    render(points, ctx){
        for (let i = 0; i < points.length; i++){
            let point = points[i];
            let gradient = ctx.createRadialGradient(point.x, point.y, 20, point.x + 20, point.y + 20, 2 * Math.PI);
            gradient.addColorStop(0, 'green');
            gradient.addColorStop(1, 'yellow');
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.arc(point.x, point.y, 20, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}