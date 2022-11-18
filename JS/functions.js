function setupLayer(layer){
    layer.angleMode(DEGREES)
	layer.textAlign(CENTER,CENTER)
	layer.rectMode(CENTER)
	layer.colorMode(RGB,255,255,255,1)
    layer.strokeJoin(ROUND)
}
function displayTransition(layer,transition){
	layer.noStroke()
	layer.fill(0)
	layer.rect(transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width-transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width/2,transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	layer.rect(layer.width/2,layer.height-transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	if(transition.trigger){
		transition.anim=round(transition.anim*10+1)/10
		if(transition.anim>1.1){
			transition.trigger = false
			stage.scene=transition.scene
		}
	}
	else if(transition.anim>0){
		transition.anim=round(transition.anim*10-1)/10
	}
}
function updateMouse(layer){
	inputs.mouse.x=mouseX
	inputs.mouse.y=mouseY
	inputs.rel.x=(inputs.mouse.x-width/2)/stage.scale+layer.width/2
	inputs.rel.y=(inputs.mouse.y-height/2)/stage.scale+layer.height/2
}
function displayMap(layer){
    layer.clear()
    layer.push()
    layer.translate(1000-stage.cube.x*1000,1000-stage.cube.y*1000)
    for(i=0,li=run.map.length;i<li;i++){
        for(j=0,lj=run.map[i].length;j<lj;j++){
            run.map[i][j].display()
        }
    }
    layer.translate(-1000+stage.cube.x*1000,-1000+stage.cube.y*1000)
    layer.pop()
}
function generateChunks(layer,layer2,chunks){
    entities.players.push(new player(layer,0,0))
	generation.lastDirection=int(chunks[0])*45
    for(let i=0,li=chunks.length;i<li;i++){
		if(chunks[i]=='a'){
			generation.type=1
		}else if(chunks[i]=='b'){
			generation.type=2
		}else if(chunks[i]=='c'){
			generation.type=3
		}else{
        	entities.chunks.push(new chunk(layer2,generation.position.x,generation.position.y,generation.type,int(chunks[i])*45,generation.lastDirection))
        	generation.position.x+=sin(int(chunks[i])*45)*90
        	generation.position.y-=cos(int(chunks[i])*45)*90
			generation.lastDirection=int(chunks[i])*45
			generation.type=0
		}
    }
}
function resetWorld(){
	entities.chunks=[]
	entities.players=[]
	generation={position:{x:0,y:0},type:0}
	stage.focus.x=0
	stage.focus.y=0
	generateChunks(graphics.main,graphics.map,maps[stage.map].chunks)
	entities.players[0].position.x=entities.chunks[gameplay.check].position.x
	entities.players[0].position.y=entities.chunks[gameplay.check].position.y
	entities.players[0].ring.x=entities.chunks[gameplay.check].position.x
	entities.players[0].ring.y=entities.chunks[gameplay.check].position.y
	stage.focus.x=entities.chunks[gameplay.check].position.x
	stage.focus.y=entities.chunks[gameplay.check].position.y
	entities.players[0].direction=entities.chunks[gameplay.check].direction+180
	entities.players[0].chunk=gameplay.check
	gameplay.speed=gameplay.checkSpeed
    run={map:[entities.chunks],fore:[entities.players]}
    displayMap(graphics.map)
}