//Webcam.set
Webcam.set({
    width : 300,
    height : 300,
    image_format : 'png',
    png_quality : 900
});
//Camera
camera = document.getElementById("camera");
//Webcam.attach
Webcam.attach('#camera');
//function take_snapshot
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture" src="'+data_uri+'">';
    })
}
//ml5
console.log("ml5 version",ml5.version);
//classifier
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ym8pFwxaB/model.json',modelLoaded);
//function modelLoaded
function modelLoaded()
{
    console.log("MODEL LOADED !");
}
//function check
function check()
{
    img = document.getElementById("capture");
    classifier.classify(img,gotResult);
}
//function gotResult
function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}