function setupGraphics(){
    angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
    strokeJoin(ROUND)
    graphics.main=createGraphics(900,600)
    setupLayer(graphics.main)
}