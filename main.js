var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){

        speak();
        console.log("taking selfie in 5 seconds...");
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking selfie in 5 seconds";

    var utter_this = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_this);

    Webcam.attach(camera);

    setTimeout(function(){

        takeselfie();
        save();
    }, 5000);
}

function takeselfie(){
    Webcam.snap(function (data_uri){
           
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save(){
    link= document.getElementById("link");
    image= document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}