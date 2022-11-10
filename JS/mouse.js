function mousePressed(){
    switch(stage.scene){
        case 'level':
            for(a=0,la=entities.players.length;a<la;a++){
                entities.players[a].move()
            }
        break
    }
}