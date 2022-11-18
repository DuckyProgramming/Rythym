function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    gameplay.speed=maps[stage.map].speed*2
    gameplay.checkSpeed=maps[stage.map].speed*2
    gameplay.direction=1
    generateChunks(graphics.main,graphics.map,maps[stage.map].chunks)
    run={map:[entities.chunks],fore:[entities.players]}
    displayMap(graphics.map)
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}