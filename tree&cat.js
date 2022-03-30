img=""
status=""

function preload(){
    img= loadImage('Tree and cat.webp')
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
    fill("black")
    text("Cat", 180, 250)
    noFill()
    stroke("black")
    rect(150, 210, 250, 120)

    fill("black")
    text("Tree", 380, 50)
    noFill()
    stroke("black")
    rect(360, 10, 270, 360)
}

function home(){
    window.location = "index.html";
}