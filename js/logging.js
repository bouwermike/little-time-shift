    //general logger
    function log(event) {
        console.log({
            event: event,
            increments: {
                x: x_increment,
                y: y_increment
            },
            c: {
                cx: parseFloat(c.getAttribute("cx")),
                cy: parseFloat(c.getAttribute("cy")),
                cr: parseFloat(c.getAttribute("r"))
            },
            p: {
                px: parseFloat(p.getAttribute("cx")),
                py: parseFloat(p.getAttribute("cy")),
                pr: parseFloat(p.getAttribute("r"))
            } 
        });
    }