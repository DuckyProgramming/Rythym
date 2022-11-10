class player{
    constructor(layer,x,y){
        this.layer=layer
        this.position={x:x,y:y}
        this.ring={x:this.position.x,y:this.position.y}
        this.chunk=0
        this.direction=0
        this.fade=1
        this.time=0
        this.moveDirection=0
        this.remove=false
    }
    display(){
        this.layer.noFill()
        this.layer.stroke(255,this.fade/2)
        this.layer.strokeWeight(3)
        this.layer.ellipse(this.ring.x,this.ring.y,180,180)
        this.layer.translate(this.position.x,this.position.y)
        this.layer.rotate(this.direction)
        this.layer.noStroke()
        this.layer.fill(150,255,150,this.fade)
        this.layer.ellipse(0,0,24,24)
        this.layer.ellipse(0,-90,24,24)
        this.layer.rotate(-this.direction)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    update(){
        this.direction+=gameplay.speed
        if(this.direction>360){
            this.direction-=360
        }
        if(dist(this.ring.x,this.ring.y,this.position.x,this.position.y)<25){
            this.ring.x=this.position.x
            this.ring.y=this.position.y
        }else{
            this.moveDirection=atan2(this.position.x-this.ring.x,this.position.y-this.ring.y)
            this.ring.x+=sin(this.moveDirection)*25
            this.ring.y+=cos(this.moveDirection)*25
        }
        if(dist(stage.focus.x,stage.focus.y,this.ring.x,this.ring.y)<25){
            stage.focus.x=this.ring.x
            stage.focus.y=this.ring.y
        }else{
            this.moveDirection=atan2(this.ring.x-stage.focus.x,this.ring.y-stage.focus.y)
            stage.focus.x+=sin(this.moveDirection)*25
            stage.focus.y+=cos(this.moveDirection)*25
        }
    }
    move(){
        if(this.chunk<entities.chunks.length-1&&abs(this.direction-entities.chunks[this.chunk].direction)<gameplay.range||abs(this.direction-entities.chunks[this.chunk].direction-360)<gameplay.range||abs(this.direction-entities.chunks[this.chunk].direction+360)<gameplay.range){
            this.direction=entities.chunks[this.chunk].direction+180
            this.chunk++
            this.position.x=entities.chunks[this.chunk].position.x
            this.position.y=entities.chunks[this.chunk].position.y
        }
    }
}