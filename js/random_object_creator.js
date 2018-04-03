var elements = 10
var svg = document.getElementById("svg")

function randomAttr() {
    return {
        x: _.random(30, 970),
        y: _.random(100, 900)
    }
}

for (i = 0; i < elements; i++) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("class", "environ")
    rect.setAttribute("x", randomAttr().x);
    rect.setAttribute("y", randomAttr().y);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    rect.setAttribute("style", "fill:blue;stroke:pink;stroke-width:5;opacity:0.5");
    svg.appendChild(rect);
}

let environs = document.getElementsByClassName("environ")

let e_list = []

for (i = 0; i < environs.length; i++) {
    let x = parseFloat(environs[i].attributes.x.value)
    let y = parseFloat(environs[i].attributes.y.value)
    // let width = (environs[i].attributes.x.value + environs[i].attributes.width.value)
    // let height = parseFloat(environs[i].attributes.y.value + environs[i].attributes.height.value)

    e_list.push({
        x: x,
        y: y,
        w: 50,
        h: 50
    })
} 




