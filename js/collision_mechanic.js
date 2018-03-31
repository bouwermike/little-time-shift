//declare functions
function getCircumferencePoint(r, x, y, angle) {
    var X = x + r * Math.sin(angle * Math.PI / 180);
    var Y = y + r * -Math.cos(angle * Math.PI / 180);
    return {
        x: X,
        y: Y
    };
}

function getAllNumbersInRange(min, max, arr) {
    for (i = min; i < max; i++) {
        arr.push(i)
    }
}


var targetNode = c

var config = { attributes: true };

var callback = function (mutationsList) {
    for (var mutation of mutationsList) {
        if (mutation.type == 'attributes') {
            let cx = Math.round(parseFloat(c.getAttribute("cx")))
            let cy = Math.round(parseFloat(c.getAttribute("cy")))
            let cr = Math.round(parseFloat(c.getAttribute("r")))

            let ox_min = Math.round(parseFloat(o.getAttribute("x")))
            let ox_max = Math.round(ox_min + parseFloat(o.getAttribute("width")))
            let oy_min = Math.round(parseFloat(o.getAttribute("y")))
            let oy_max = Math.round(oy_min + parseFloat(o.getAttribute("height")))

            const all_x_points = []
            const all_y_points = []

            const ox_range = []
            const oy_range = []

            for (i = 0; i < 361; i++) {
                all_x_points.push(getCircumferencePoint(cr, cx, cy, i).x)
                all_y_points.push(getCircumferencePoint(cr, cx, cy, i).y)
            }

            getAllNumbersInRange(ox_min, ox_max, ox_range);
            getAllNumbersInRange(oy_min, oy_max, oy_range);

            if(_.intersection(all_x_points, ox_range).length > 0 &&  _.intersection(all_y_points, oy_range).length > 0) {
                console.log("you dead mother fucker");
                
            }
           

        }
    };
}

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);