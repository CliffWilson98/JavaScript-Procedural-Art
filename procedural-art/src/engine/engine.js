let c = this.document.getElementById("imageCanvas")
let ctx = c.getContext("2d");

let activeModules = [];

function addModule(module){
    activeModules.push(module);
}

function logModules(){
    console.log(activeModules);
}

function emptyModules(){
    activeModules = []
}

function testInEgine(){
    console.log("this is inside of engine.js");
}

//TODO need to test this with chaining a bunch of input together
function processModules(){
    if (activeModules.length != 0){
        let result = activeModules[0].process();
        console.log(result);

        for (let i = 1; i < activeModules.length; i++){
            if (typeof activeModules[i].process === 'function'){
                result = activeModules[i].process(result);
            }
            else{
                activeModules[i].render(result, ctx);
            }
        }
    }
    else{
        console.log("no active modules")
        ctx.clearRect(0, 0, c.width, c.height);
    }
}