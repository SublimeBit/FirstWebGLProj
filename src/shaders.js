//SHADERS


function fS_SRC()
{
	return `
        
#version 100

void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}

            `
}

function vS_SRC()
{
    return `

#version 100
attribute vec3 aVertexPosition;

void main(void) {
  	gl_Position = vec4(aVertexPosition, 1.0);
}

            `
}