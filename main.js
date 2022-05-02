function preload(){
}
 function setup(){
     canvas=createCanvas(200,200);
     canvas.center();
     video= createCapture(VIDEO);
     video.size(200,200);
     video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotposes);
 }
 function draw(){
 image(video,0,0,200,200)
 }
 function takesnap(){
     save("filter.png");
 }
 function modelloaded(){
     console.log("posenet is loaded");
 }
 function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose X:"+results[0].pose.nose.x);
        console.log("Nose Y:"+results[0].pose.nose.y);
    }
 }