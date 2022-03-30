img=""
status=""

function preload(){
    img= loadImage('Budgies.jpeg')
}

function setup(){
    canvas= createCanvas(640, 420)
    canvas.center()

    objectDetector= ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML= "Status: Detecting Objects"
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
    fill("#3F3FD4")
    stroke("#3F3FD4")
    text("Blue Budgie", 95, 25)
    noFill()
    stroke("#3F3FD4")
    rect(90, 10, 350, 150)

    fill("#fff44f ")
    stroke("#fff44f")
    text("Yellow Pied Budgie", 370, 130)
    noFill()
    stroke("#fff44f")
    rect(360, 90, 210, 270)

    fill("#e75480")
    stroke("#e75480")
    text("Yellow/Green Budgie", 44, 126)
    noFill()
    stroke("#e75480")
    rect(34, 90, 273, 290)
}

function home(){
    window.location= "index.html";
}
