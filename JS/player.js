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
        this.nextTimer=-1
        this.failSpin=0
        this.swap=0
        this.fail=[]
    }
    display(){
        this.layer.noFill()
        this.layer.stroke(255,this.fade/2)
        this.layer.strokeWeight(3)
        this.layer.ellipse(this.ring.x,this.ring.y,180,180)
        this.layer.translate(this.position.x,this.position.y)
        this.layer.fill(200,0,0)
        this.layer.noStroke()
        for(g=0,lg=this.fail.length;g<lg;g++){
            this.layer.ellipse(sin(this.fail[g])*90,-cos(this.fail[g])*90,10,10)
        }
        this.layer.rotate(this.direction)
        this.layer.fill(255-this.swap*105,150+this.swap*105,150,this.fade)
        this.layer.ellipse(0,0,24,24)
        this.layer.fill(150+this.swap*105,255-this.swap*105,150,this.fade)
        this.layer.ellipse(0,-90,24,24)
        this.layer.rotate(-this.direction)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    update(){
        this.direction+=gameplay.speed*gameplay.direction
        this.failSpin+=gameplay.speed
        if(this.direction>360){
            this.direction-=360
        }
        if(this.direction<0){
            this.direction+=360
        }
        if(dist(this.ring.x,this.ring.y,this.position.x,this.position.y)<25){
            this.ring.x=this.position.x
            this.ring.y=this.position.y
        }else{
            this.moveDirection=atan2(this.position.x-this.ring.x,this.position.y-this.ring.y)
            this.ring.x+=sin(this.moveDirection)*10
            this.ring.y+=cos(this.moveDirection)*10
        }
        if(dist(stage.focus.x,stage.focus.y,this.ring.x,this.ring.y)<2){
            stage.focus.x=this.ring.x
            stage.focus.y=this.ring.y
        }else{
            stage.focus.x=stage.focus.x*0.96+this.ring.x*0.04
            stage.focus.y=stage.focus.y*0.96+this.ring.y*0.04
        }
        if(this.position.x>500+stage.cube.x*1000){
            stage.cube.x+=0.2
            displayMap(graphics.map)
        }
        if(this.position.x<-500+stage.cube.x*1000){
            stage.cube.x-=0.2
            displayMap(graphics.map)
        }
        if(this.position.y>500+stage.cube.y*1000){
            stage.cube.y+=0.2
            displayMap(graphics.map)
        }
        if(this.position.y<-500+stage.cube.y*1000){
            stage.cube.y-=0.2
            displayMap(graphics.map)
        }
        if(this.nextTimer>0){
            this.nextTimer--
            this.failSpin=0
        }else if(this.nextTimer==0||this.failSpin>360){
            if(this.nextTimer==0){
                stage.map++
                gameplay.check=0
                gameplay.speed=maps[stage.map].speed*1.75
                gameplay.checkSpeed=maps[stage.map].speed*1.75
                gameplay.direction=1
            }
            this.nextTimer=-1
            this.fail=[]
            resetWorld()
        }
        //this.move()
    }
    move(){
        if((this.chunk<entities.chunks.length-1&&abs(this.direction-entities.chunks[this.chunk].direction)<gameplay.range||abs(this.direction-entities.chunks[this.chunk].direction-360)<gameplay.range||abs(this.direction-entities.chunks[this.chunk].direction+360)<gameplay.range)&&this.fail.length<2){
            this.direction=entities.chunks[this.chunk].direction+180
            this.chunk++
            this.swap=1-this.swap
            this.position.x=entities.chunks[this.chunk].position.x
            this.position.y=entities.chunks[this.chunk].position.y
            this.failSpin=0
            this.fail=[]
            switch(entities.chunks[this.chunk].type){
                case 1:
                    gameplay.speed/=2
                break
                case 2:
                    gameplay.speed*=2
                break
                case 3:
                    gameplay.check=this.chunk
                    gameplay.checkSpeed=gameplay.speed
                    gameplay.checkDirection=gameplay.direction
                break
                case 4:
                    gameplay.direction*=-1
                break
            }
            if(this.chunk==entities.chunks.length-1){
                this.nextTimer=120
            }
        }else{
            this.fail.push(this.direction)
        }
    }
}