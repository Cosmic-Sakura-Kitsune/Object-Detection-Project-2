img=""
status=""

function preload(){
    img= loadImage('kitsune.jpg')
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
    fill("red")
    text("Kitsune", 45, 75)
    noFill()
    stroke("red")
    rect(10, 10, 620, 400)

}

function home(){
    window.location= "index.html";
}
