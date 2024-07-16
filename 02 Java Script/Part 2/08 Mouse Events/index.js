document.querySelector('.mouse_down').addEventListener('mousedown', mouseDownHandler);
document.querySelector('.mouse_up').addEventListener('mouseup', mouseUpHandler);
document.querySelector('.mouse_tap').addEventListener('click', mouseTapHandler);

function mouseDownHandler(e) {
    console.log(e.type);
}

function mouseUpHandler(e) {
    console.log(e.type);
}

function mouseTapHandler(e) {
    console.log(e.type);
}




// ********************mouseenter event(when we get to the surfsce of the card th event will occur)********************************
document.querySelector('.card').addEventListener('mouseenter',mouseenter);

function mouseenter(e){
    console.log(e.type);
}


// **********************mouseevent*************************
document.querySelector('.card').addEventListener("mousemove", mouse_move_event);
function mouse_move_event(e){
    console.log(document.getElementsByClassName('#heading_text'))
}