function preload(){

}
function setup(){
   canvas = createCanvas(400, 300);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(400, 300);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log('nose x value is -' + results[0].pose.nose.x);
        console.log('nose y value is -' + results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log("model loaded");
}
function draw(){
    image(video, 0, 0, 400, 300);
}
function take_snapshot(){
    save('MustacheFilter.png');
}