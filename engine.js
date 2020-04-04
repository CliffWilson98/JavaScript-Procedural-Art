let c = this.document.getElementById("imageCanvas")
let ctx = c.getContext("2d");

// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, c.width / 2, c.height / 2);

let activeModules = [];

let pointMaker = new PointGenerator(10, c.width, c.height);

let gridPoints = new GridPointGenerator(2, c.width, c.height);

let circles = new CircleGenerator(4);
//TODO it is wasteful to call process every time
circles.render(gridPoints.process(), ctx);
circles.render(pointMaker.process(), ctx);

let strands = new StrandGenerator(50, 20, 0);
strands.render(gridPoints.process(), ctx);
