var gl,sP, vB; 
/*
sP - shaderProgram
vB - vertexBuffer
*/


/*Step 1: GET SHADERS*/
function getShader(type,string) {
    //var source = document.getElementById(id).innerHTML;

    var shader = gl.createShader(type);

    gl.shaderSource(shader, string);

    gl.compileShader(shader);
   
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Error: compilation shader; " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);   
        return null;
    }
    return shader;  
}

/*Step 2: INIT SHADERS*/
function initShaders() 
{
	//initional
	var fS = getShader(gl.FRAGMENT_SHADER,
		fS_SRC());
	var vS = getShader(gl.VERTEX_SHADER,
		vS_SRC());
	sP = gl.createProgram();
	gl.attachShader(sP, vS);
	gl.attachShader(sP, fS);

	gl.linkProgram(sP);

	if (!gl.getProgramParameter(sP,
		gl.LINK_STATUS)) {
		alert("Error: Failed to download shaders");
	}

	gl.useProgram(sP);
	sP.vertexPositionAttribute = gl.getAttribLocation(
		sP, "aVertexPosition");

	gl.enableVertexAttribArray(sP.vertexPositionAttribute);
}

/*Step 3: Set ups buffer(or verticles data for drawing :> )*/
function initBuffers() {

  vB = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, vB);

  //DATA START
  var triangleVertices = [
         0.0,  0.5,  0.0,
        -0.5, -0.5,  0.0,
         0.5, -0.5,  0.0
  ];
  //DATA END

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

  vB.itemSize = 3;
  vB.numberOfItems = 3;
}

//Step 4: DRAWING
function DRAW()
{
	gl.viewport(
		0,0, //start position in window, just x1 and y1
		gl.viewportWidth, gl.viewportHeight // x2 and y2
		);

	gl.clear(gl.COLOR_BUFFER_BIT); //clearing screen

	gl.vertexAttribPointer( //pointers from in C/C++
		sP.vertexPositionAttribute,
		vB.itemSize, 
		gl.FLOAT, //typizing in gl
		false, 
		0, 0
		);

	gl.drawArrays( // data in gl.bufferData() function
		gl.TRIANGLES,
		0,
		vB.numberOfItems
		)
}



