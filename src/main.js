//ALL MAIN LOGICS

var canvas = document.getElementById("canvas3D");
try {
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
}
catch(e) {}

if (!gl) {
    alert("Error: your device does'nt support WebGL1");
}
if(gl){
    //set up window size
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;

    // set up shaders
    initShaders();

    // set up data buffer verticles
    initBuffers();

    //filling this in white-pink color
	gl.clearColor(1.0, 0.0, 0.0, 0.5);

    //Here we go!
	DRAW();
}

