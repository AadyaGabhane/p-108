function startClassification()
{
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LFcqeNNBc/', modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
        else{
            console.log(results);
            document.getElementById("result_label").innerHTML = 'I can hear - '+
            results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
            (results[0].confidence*100).toFixed(2)+" %";

            img = document.getElementById('doggy');
            img1 = document.getElementById('cat');

            if (results[0].label == "doggy") {
                img.src='doggy.webp';
                img1.src='cat.jpeg';
            }
            
            else if (results[0].label == "Background Noise") {
               img.src='doggy.webp';
               img1.src='cat.jpeg';
            }

            else if (results[0].label == "cat") {
               img.src='doggy.webp';
                img1.src='cat.jpeg';
            }

            else{
               img.src='doggy.webp';
               img1.src='cat.jpeg';
            }
        }

}


