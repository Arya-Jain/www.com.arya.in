 function startclassifictaion(){
    navigator.mediaDevices.getUserMedia(
        {audio:true}
    ) ;

    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u5NP63xcz/model.json', modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
   console.log("loaded!");
}

function gotResults(error, results){
    console.log("got_results");
}
