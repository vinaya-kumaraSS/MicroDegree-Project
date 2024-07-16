
// method 1 - creating the anamous function
document.querySelector('.click-me-1').addEventListener('click', function(){
    console.log("Hello World 1");
})

// method 2 - creating the function
document.querySelector('.click-me-2').addEventListener('click',onClick);

function onClick(e){
    console.log("Hello world 2")
    console.log(e)//PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}isTrusted: truealtKey: falsealtitudeAngle: 1.5707963267948966azimuthAngle: 0bubbles: truebutton: 0buttons: 0cancelBubble: falsecancelable: trueclientX: 50clientY: 160composed: truectrlKey: falsecurrentTarget: nulldefaultPrevented: falsedetail: 1eventPhase: 0fromElement: nullheight: 1isPrimary: falselayerX: 50layerY: 260metaKey: falsemovementX: 0movementY: 0offsetX: 40offsetY: 4pageX: 50pageY: 260pointerId: 3pointerType: "touch"pressure: 0relatedTarget: nullreturnValue: truescreenX: 843screenY: 312shiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: true}srcElement: button.click-me-2tangentialPressure: 0target: button.click-me-2tiltX: 0tiltY: 0timeStamp: 4827.5toElement: nulltwist: 0type: "click"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}which: 1width: 1x: 50y: 160[[Prototype]]: PointerEvent
    //display the which event we have done
    console.log(e.target)//<button class="click-me-2">click here - 2</button>
    // get the class name
    console.log(e.target.className)//click-me-2
    //change the inner text
    e.target.innerText = "clicked - 2"//button value changes to clicked
    //get the type pf the event
    console.log(e.type);//click
    // how many second we are in this event(in mileseconds)
    console.log(e.timeStamp);//2342.7000000029802
    // the co-ordinate of the button ( from top to button position)
    console.log(e.clientY);//168
    console.log(e.clientX);//31

    // the position from the button border to the clicked position
    console.log(e.offsetX);//48
    console.log(e.offsetY);//11
}