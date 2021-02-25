class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.track =[]
    
  }

  display() {
    if(this.body.velocity.x>10 && this.body.position.x >200){
   var pos = [this.body.position.x, this.body.position.y]
  
   this.track.push(pos)
    }

   for(var i = 0;i<this.track.length;i++){
     image(this.smokeImage,this.track[i][0],this.track[i][1])
   }
    super.display();
  }
}
