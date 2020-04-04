let c = this.document.getElementById("imageCanvas")
let ctx = c.getContext("2d");

// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, c.width / 2, c.height / 2);

let activeModules = [];

let pointMaker = new PointGenerator(10, c.width, c.height);
let points = pointMaker.process();

console.log(points);

let circles = new CircleGenerator(4);
circles.render(points, ctx);
// function processModules(){

// }
