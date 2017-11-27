var img;
var button1;
var button2;
// var Face = {
//   x:100,
//   y:325,
//     makeFace: function() {
//       noFill();
//       ellipse(this.x+100, this.y-95, 45, 45);
//       line(this.x+100, this.y, this.x+100, this.y-75);
//       line(this.x+100, this.y, this.x+150, this.y+75);
//       line(this.x+100, this.y, this.x+75, this.y+75);
//       line(this.x+100, this.y-25, this.x+50, this.y-75);
//       line(this.x+100, this.y-25, this.x+140, this.y-75);
//     },
//
//
//     moveFace: function(){ //moves the stick figure to follow the mouse position
//       this.x =mouseX;
//     }
//   };

function setup() {
  createCanvas(600, 600);
  background(100, 200, 250);
  home ();


}
  function home () { //runs the home page: image of hands on keyboard, explorable explanation button, facts button
    fill(0,0,0);
    textSize(36);
    textAlign(RIGHT);
    text("Computer Addiction", 425, 50);
      img = createImg('https://r.hswstatic.com/w_907/gif/computer-addiction-sysk.jpg');
        img.position (515, -4);
          button1 = createButton('Explorable Explanation'); //game button
          button1.position(100, 90);
          //button1.mousePressed(clear);
          //button1.mousePressed(removeElements);
          button1.mousePressed(game);


          button2 = createButton('What is Computer Addiction?'); //facts button
          button2.position(300, 90);
          button2.mousePressed(facts);
        }

  function game (){ //draws stick figure and moves it

    var Face = {
      x:100,
      y:325,
        makeFace: function() {
          noFill();
          ellipse(this.x+100, this.y-95, 45, 45);
          line(this.x+100, this.y, this.x+100, this.y-75);
          line(this.x+100, this.y, this.x+150, this.y+75);
          line(this.x+100, this.y, this.x+75, this.y+75);
          line(this.x+100, this.y-25, this.x+50, this.y-75);
          line(this.x+100, this.y-25, this.x+140, this.y-75);
        },


        moveFace: function(){ //moves the stick figure to follow the mouse position
          this.x =mouseX;
        }
      };



    background(255);
    Face.makeFace();
    Face.moveFace();


}

function draw() {


}


function facts(){//lists facts about computer addiction
    textSize(14);

    textAlign(RIGHT);
      text("Facts about computer addiction:", 210, 150);
      textAlign(RIGHT);
      text("-Nomophobia is the irrational fear of being unable to use your phone", 450, 200);
      textAlign(RIGHT);
      text("-Addiction is classified by how much it distracts from your daily life ", 440, 250);
      textAlign(RIGHT);
      text("-Computer addiction can be caused by a need to escape from daily life", 465, 300);
      textAlign(RIGHT);
      text("-Computer addiction is more likely to affect men", 325, 350);
      textAlign(RIGHT);
      text("-Computer addiction affects ages 20-30 but is becoming prevalent in children", 500, 400);
}
