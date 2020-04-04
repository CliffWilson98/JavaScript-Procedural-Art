//WIDGET IDEAS
//PointGrid - generates evenly spaced points
//PixelRandomizer - takes every pixel in the image and puts it at a different location

//TODO maybe add render function to point generators to visaulize the point locations
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

let GridPointGenerator = class{
    constructor(pointCount, maxX, maxY){
        this.pointCount = pointCount;
        this.maxX = maxX;
        this.maxY= maxY;
    }

    process(){
        let pointGrid = [];
        let pointSpacingX = this.maxX / this.pointCount;
        let pointSpacingY = this.maxY / this.pointCount;

        for (let x = 0; x <= this.pointCount; x ++){
            for (let y = 0; y <= this.pointCount; y ++){
                pointGrid.push({x: x * pointSpacingX, y : y * pointSpacingY});
            }
        }
        return pointGrid;
    }
}

let CircleGenerator = class{
    //TODO make this radius value do something
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

let StrandGenerator = class{
    //TODO of course make these values do shit
    constructor(avgX, avgY, deviation){
        this.avgX = avgX;
        this.avgY = avgY;
        this.deviation = deviation;
    }

    render(points, ctx){
        ctx.fillStyle = "#FF0000";

        //TODO make this not always form right angles
        for (let i = 0; i < points.length; i++){
            let point = points[i];
            for (let i = 0; i < this.avgX; i++){
                ctx.fillRect(point.x + i, point.y, 1, 1);
            }

            for (let i = 0; i < this.avgY; i++){
                ctx.fillRect(point.x, point.y + i, 1, 1);
            }
            // let gradient = ctx.createRadialGradient(point.x, point.y, 20, point.x + 20, point.y + 20, 2 * Math.PI);
            // gradient.addColorStop(0, 'green');
            // gradient.addColorStop(1, 'yellow');
            // ctx.fillStyle = gradient;

            // ctx.beginPath();
            // ctx.arc(point.x, point.y, 20, 0, 2 * Math.PI);
            // ctx.fill();
        }
    }
}