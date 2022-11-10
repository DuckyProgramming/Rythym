function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    generateChunks(graphics.main,maps[0].chunks)
    run={fore:[entities.chunks,entities.players]}
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}