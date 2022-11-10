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
    layer.push()
    layer.translate(300,300)
    for(a=0,la=run.map.length;a<la;a++){
        for(b=0,lb=run.map[a].length;b<lb;b++){
            run.map[a][b].display()
        }
    }
    layer.translate(-300,-300)
    layer.pop()
}
function generateChunks(layer,layer2,chunks){
    entities.players.push(new player(layer,0,0))
    for(let i=0,li=chunks.length;i<li;i++){
        entities.chunks.push(new chunk(layer2,generation.position.x,generation.position.y,0,int(chunks[i])*45,int(chunks[max(i-1,0)])*45))
        generation.position.x+=sin(int(chunks[i])*45)*90
        generation.position.y-=cos(int(chunks[i])*45)*90
    }
}