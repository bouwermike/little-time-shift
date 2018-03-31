    //event listener to handle user input
    window.addEventListener("keydown", function (e) {
        e.preventDefault();
        key = e.keyCode
        //console.log(key);
        switch (key) {
            case 87: //W
                y_increment -= 0.5
                break
            case 83: //S
                y_increment += 0.5
                break
            case 65: //A
                x_increment -= 0.5
                break
            case 68: //D
                x_increment += 0.5
                break
            case 32: //Space
                var ty = setInterval(() => {
                    if (y_increment > 0) {
                        y_increment -= 0.5
                    } else if (y_increment < 0) {
                        y_increment += 0.5
                    } else if (y_increment === 0) {
                        clearTimeout(ty)
                    }
                }, 100)

                var tx = setInterval(() => {
                    if (x_increment > 0) {
                        x_increment -= 0.5
                    } else if (x_increment < 0) {
                        x_increment += 0.5
                    } else if (x_increment === 0) {
                        clearTimeout(tx)
                    }
                }, 100)
                break
            case 69: //E
            if(shift_lock === 0) {
                shift();
            }
                break
            case 81: //Q
                layPrism();
                break
            case 76: //L
                log("adhoc");
                break
            default:
                console.log("no action");
                break;
        }
    })