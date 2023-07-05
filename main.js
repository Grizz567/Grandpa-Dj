song1 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("1.mp3");
    song2 = loadSound("2.mp3");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWristX.x; 
        leftWristY = results[0].pose.leftWristY.y;

        console.log("leftWristX =  " + leftWristX + ", leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWristX.x;
        rightWristY = results[0].pose.rightWristY.y;

        console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY);
    }
}