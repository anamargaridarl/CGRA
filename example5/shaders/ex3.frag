#ifdef GL_ES
precision highp float;
#endif

varying vec4 screenPosition;

void main() {
 
	if(screenPosition.y > 0.5)
	{
        vec4 color = vec4(1.0, 1.0, 0, 1.0);
		vec4 colorCinza = color;
		colorCinza.r = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
		colorCinza.g = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
		colorCinza.b = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
		gl_FragColor = colorCinza;
	}
  else
	{
 		vec4 color = vec4(0, 0, 1.0, 1.0);
		vec4 colorCinza = color;
		colorCinza.r = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
		colorCinza.g = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
		colorCinza.b = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
		gl_FragColor = colorCinza;
	}

	
}