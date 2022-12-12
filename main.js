video ="";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
} 

function setup () {
    canvas = createCanvas(380,380);
    canvas.center;
    video =  createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw() {
    image(video,0,0,480,380);

}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("status").innerHTML = "status : detecting Object";

}

function modelLoded() {
    console.log("modelLoaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}