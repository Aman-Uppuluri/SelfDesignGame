var bg, player, NPC1, NPC1Image, NPC2, NPC2Imager, ball, hoop;
var bgImage, playerImage;
var goalpost, score, timer;

function preload() {
bgImage = loadImage("images/bballbg2.png");

playerImage = loadImage("images/bballshot2.gif");

NPC1Image = loadImage("images/NPC1.png");


}

function setup() {
  createCanvas(1200,800);
  bg = createSprite(600, 400, 800, 400);
  bg.scale = 1.5;
  bg.addImage(bgImage);  

  player = createSprite(300, 450, 50, 50);
  player.addImage(playerImage);
  player.scale = 4;

  NPC1 = createSprite(400, 475, 50, 50);
  NPC1.addImage(NPC1Image);
  NPC1.scale = 1.75;

  goalpost = createSprite(750, 250, 100, 25);
  goalpost.visible = false;

  score = 0;

  timer = 500;

}

function draw() {


  if(timer >= 0) {
    if (keyDown("left_ARROW")) {
      player.x -= 5;
    }
    if (keyDown("right_ARROW")) {
      player.x += 5;
    }
    if (keyDown("up_ARROW")) {
      player.y -= 5;
    }
    if (keyDown("left_ARROW")) {
    player.x = -5;
    }
    if (player.isTouching(goalpost)) {
      score = score + 1;
      //add swish sound
    }
  timer = timer - 1;
  }

  drawSprites();

  fontSize = 32;
  text("score: " + score, 300, 100);

  text("Time Remaining: " + timer, 275, 200);

  console.log();
}

  


/*
Nov 12:
Task 1: Get all the images need for the game (background, PC, NPC, ball, hoop, etc.)

Nov 17:
Task 2: Work on the player character (PC)

Nov 19:
Task 3: Setup background and make it effective (NPCs: scrolling, background change)

Nov 23:
Task 4: Feedback (Scores, sounds, scoreUpdate, gameStates, etc.)

Nov 25:
Task 5: Debugging issue to make it a full-flegded game (Taking feedback from others, improvising, etc.)
*/