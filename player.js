class Player {
  constructor(){
    this.index = null;
    this.score = 0;
    this.name = null;
    // this.orangeWorm
    this.orangeWormImg=loadImage("images/orange worm.png")
    this.blueWormImg=loadImage("images/blue worm.png")
  }

  createWormSprites(){
    orangeWorm=createSprite(width/2,height/2)
    orangeWorm.addImage(this.orangeWormImg)
    orangeWorm.debug=true
    orangeWorm.setCollider("rectangle",0,0,550,100)

  blueWorm=createSprite(width/2-100,height/2-100)
  blueWorm.addImage(this.blueWormImg)
  blueWorm.debug=true
  blueWorm.setCollider("rectangle",0,0,550,100)

  

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
