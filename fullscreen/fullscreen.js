var fullscreen = {}
        
fullscreen.add = function(target) {
    /** Register an element with the fullscreen controller */
    target.addEventListener("mouseover", function() {
        if (fullscreen.active_target != target) {
            fullscreen.active_target = target;
        }

        fullscreen.toggle_popup();
    });
    
    target.addEventListener("mouseout", function() {
        if (fullscreen.active_target == target) {
            fullscreen.active_target = null;
        }

        fullscreen.toggle_popup();
    });
}

// Current target that the mouse is hovered over
fullscreen.active_target = null;

fullscreen.handler = function(e) {
    /** Handler for keyboard events */
    if (e.key == 'F11' && e.ctrlKey) {
        fullscreen.toggle(fullscreen.active_target);
    } 
}

fullscreen.toggle_popup = function() {
    /** Show a tooltip giving the user a hint */
    const popup = document.getElementById("fullscreen-popup");
    const target = fullscreen.active_target;

    var message = "";
    if (target && !target.classList.contains("fullscreen")) {
        message = "Press Ctrl + F11 to go fullscreen";
    } else {
        message = "Press Ctrl + F11 to minimize";
    }

    if (popup.classList.contains("invisible")) {
        popup.classList.remove("invisible");
    } else {
        popup.classList.add("invisible");
    }

    popup.innerHTML = message;
}

fullscreen.toggle = function(target) {
    /** Switch between fullscreen and normal modes */
    if (target.classList.contains("fullscreen")) {
        target.classList.remove("fullscreen");
    } else {
        target.classList.add("fullscreen");
    }
}

document.getElementsByTagName("body")[0].onkeyup = fullscreen.handler;