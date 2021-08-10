function setup(){
    canvas = createCanvas(400, 650)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 500)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPose)
}
function gotPose(results){
    if (results.length > 0){
    console.log(results)
    noseX = results[0].pose.nose.x +38
    noseY = results[0].pose.nose.y + -38
    }
}
function modelLoaded(){
    console.log("poseNet Ready!")
}

function take_snapshot(){
    save("Are You a clown?")
}
function preload(){
    Moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function draw(){
    image(video, 0, 0, 400, 400)
    image(Moustache, noseX, noseY, 30, 30)
}
noseX = 0;
noseY = 0;
//cordinates of nose - x - 163.29890596471563, y - 297.6651658788759
