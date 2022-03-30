img=""
status=""

function preload(){
    img= loadImage('SmartWatch.jpeg')
}

function setup(){
    canvas= createCanvas(640, 420)
    canvas.center()

    objectDetector= ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML= "Status: Detcting Objects"
}

function modelLoaded(){
    console.log("Model is initialized!")
    status= true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }

    console.log(results)
}


function draw(){
image(img, 0, 0, 640, 420)
    fill("white")
    text("Smart Watch", 270, 250, 120)
    noFill()
    stroke("white")
    rect(260, 240, 190, 120)
}

function home(){
    window.location = "index.html";
}