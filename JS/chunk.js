class chunk{
    constructor(layer,x,y,type,direction,previousDirection){
        this.layer=layer
        this.position={x:x,y:y}
        this.type=type
        this.direction=direction
        this.previousDirection=previousDirection
        this.fade=1
        this.remove=false
    }
    display(){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.rotate(this.direction)
        this.layer.strokeWeight(3)
        this.layer.stroke(100,180,200,this.fade)
        this.layer.fill(80,140,160,this.fade)
        if(this.previousDirection==this.direction+300||this.previousDirection==this.direction-60){
            this.layer.beginShape()
            this.layer.vertex(-15,-45)
            this.layer.vertex(15,-45)
            this.layer.vertex(-sin(60)*-18,cos(60)*-18)
            this.layer.vertex(-cos(120)*15-sin(120)*-45,cos(120)*-45-sin(120)*15)
            this.layer.vertex(-cos(120)*-15-sin(120)*-45,cos(120)*-45-sin(120)*-15)
            this.layer.vertex(-sin(60)*18,cos(60)*18)
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+60||this.previousDirection==this.direction-300){
            this.layer.beginShape()
            this.layer.vertex(15,-45)
            this.layer.vertex(-15,-45)
            this.layer.vertex(sin(60)*-18,cos(60)*-18)
            this.layer.vertex(cos(120)*15+sin(120)*-45,cos(120)*-45-sin(120)*15)
            this.layer.vertex(cos(120)*-15+sin(120)*-45,cos(120)*-45-sin(120)*-15)
            this.layer.vertex(sin(60)*18,cos(60)*18)
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+330||this.previousDirection==this.direction-30){
            this.layer.beginShape()
            this.layer.vertex(-15,-45)
            this.layer.vertex(15,-45)
            this.layer.vertex(-sin(75)*-16,cos(75)*-16)
            this.layer.vertex(-cos(150)*15-sin(150)*-45,cos(150)*-45-sin(150)*15)
            this.layer.vertex(-cos(150)*-15-sin(150)*-45,cos(150)*-45-sin(150)*-15)
            this.layer.vertex(-sin(75)*16,cos(75)*16)
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+240||this.previousDirection==this.direction-120){
            this.layer.beginShape()
            this.layer.vertex(-15,-45)
            this.layer.vertex(15,-45)
            this.layer.vertex(-sin(30)*-30,cos(30)*-30)
            this.layer.vertex(-cos(60)*15-sin(60)*-45,cos(60)*-45-sin(60)*15)
            this.layer.vertex(-cos(60)*-15-sin(60)*-45,cos(60)*-45-sin(60)*-15)
            this.layer.vertex(-sin(30)*30,cos(30)*30)
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+30||this.previousDirection==this.direction-330){
            this.layer.beginShape()
            this.layer.vertex(15,-45)
            this.layer.vertex(-15,-45)
            this.layer.vertex(sin(75)*-16,cos(75)*-16)
            this.layer.vertex(cos(150)*15+sin(150)*-45,cos(150)*-45-sin(150)*15)
            this.layer.vertex(cos(150)*-15+sin(150)*-45,cos(150)*-45-sin(150)*-15)
            this.layer.vertex(sin(75)*16,cos(75)*16)
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+120||this.previousDirection==this.direction-240){
            this.layer.beginShape()
            this.layer.vertex(15,-45)
            this.layer.vertex(-15,-45)
            this.layer.vertex(sin(30)*-30,cos(30)*-30)
            this.layer.vertex(cos(60)*15+sin(60)*-45,cos(60)*-45-sin(60)*15)
            this.layer.vertex(cos(60)*-15+sin(60)*-45,cos(60)*-45-sin(60)*-15)
            this.layer.vertex(sin(30)*30,cos(30)*30)
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+135||this.previousDirection==this.direction-225){
            this.layer.beginShape()
            this.layer.vertex(15,-45)
            this.layer.vertex(-15,-45)
            this.layer.vertex(-15,-15-30/sqrt(2))
            this.layer.vertex(-30/sqrt(2),-60/sqrt(2))
            this.layer.vertex(-60/sqrt(2),-30/sqrt(2))
            this.layer.vertex(15-30/sqrt(2),15)
            this.layer.vertex(15,-15+30/sqrt(2))
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+225||this.previousDirection==this.direction-135){
            this.layer.beginShape()
            this.layer.vertex(-15,-45)
            this.layer.vertex(15,-45)
            this.layer.vertex(15,-15-30/sqrt(2))
            this.layer.vertex(30/sqrt(2),-60/sqrt(2))
            this.layer.vertex(60/sqrt(2),-30/sqrt(2))
            this.layer.vertex(-15+30/sqrt(2),15)
            this.layer.vertex(-15,-15+30/sqrt(2))
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+45||this.previousDirection==this.direction-315){
            this.layer.beginShape()
            this.layer.vertex(15,-45)
            this.layer.vertex(-15,-45)
            this.layer.vertex(-15,15-30/sqrt(2))
            this.layer.vertex(-60/sqrt(2),30/sqrt(2))
            this.layer.vertex(-30/sqrt(2),60/sqrt(2))
            this.layer.vertex(15,-15+30/sqrt(2))
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+315||this.previousDirection==this.direction-45){
            this.layer.beginShape()
            this.layer.vertex(-15,-45)
            this.layer.vertex(15,-45)
            this.layer.vertex(15,15-30/sqrt(2))
            this.layer.vertex(60/sqrt(2),30/sqrt(2))
            this.layer.vertex(30/sqrt(2),60/sqrt(2))
            this.layer.vertex(-15,-15+30/sqrt(2))
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+90||this.previousDirection==this.direction-270){
            this.layer.beginShape()
            this.layer.vertex(-45,-15)
            this.layer.vertex(-45,15)
            this.layer.vertex(15,15)
            this.layer.vertex(15,-45)
            this.layer.vertex(-15,-45)
            this.layer.vertex(-15,-15)
            this.layer.endShape(CLOSE)
        }else if(this.previousDirection==this.direction+270||this.previousDirection==this.direction-90){
            this.layer.beginShape()
            this.layer.vertex(45,-15)
            this.layer.vertex(45,15)
            this.layer.vertex(-15,15)
            this.layer.vertex(-15,-45)
            this.layer.vertex(15,-45)
            this.layer.vertex(15,-15)
            this.layer.endShape(CLOSE)
        }else{
            this.layer.rect(0,0,30,90)
        }
        this.layer.noStroke()
        this.layer.fill(100,160,180,this.fade)
        this.layer.ellipse(0,0,16,16)
        if(this.type==1){
            this.layer.fill(0,0,255,this.fade)
            this.layer.quad(-10,-10,3,-3,10,10,-3,3)
            this.layer.quad(-3,-3,10,-10,3,3,-10,10)
        }else if(this.type==2){
            this.layer.fill(255,0,0,this.fade)
            this.layer.rotate(45)
            this.layer.quad(-10,-10,3,-3,10,10,-3,3)
            this.layer.quad(-3,-3,10,-10,3,3,-10,10)
            this.layer.rotate(-45)
        }else if(this.type==3){
            this.layer.fill(255,this.fade)
            this.layer.ellipse(0,0,20,20)
        }else if(this.type==4){
            this.layer.stroke(100,255,100,this.fade)
            this.layer.strokeWeight(6)
            this.layer.ellipse(0,0,20,20)
        }
        this.layer.rotate(-this.direction)
        this.layer.translate(-this.position.x,-this.position.y)
    }
}