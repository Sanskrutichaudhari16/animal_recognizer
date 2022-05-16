function startClassifying()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/z00mZuhVr/model.json', readyModel);
}
 

function readyModel()
{
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if (result) {
        console.log(error);
    }  else {
        console.log(result);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal_sounds").innerHTML = 'I can hear -' + result[0].label;
        document.getElementById("total_confidence").innerHTML = 'Accuracy - ' + (result[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("animal_sounds").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("total_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        img = document.getElementById('listener');
        img1 = document.getElementById('dogbarker');
        img2 = document.getElementById('lionroar');
        img3 = document.getElementById('cow');
        img4 = document.getElemenetById('cat');


        if (result[0].label == "Barking") {
            img.src = 'bark.gif';
            img1.src = 'cat.png';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
            img4.src = 'ear.png';
        } else if (result[0].label == "Meowing") {
            img.src = 'Dog.png';
            img1.src = 'meow.gif';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
            img4.src = 'ear.png';
        } else if (result[0].label == "mooing") {
            img.src = 'Dog.png';
            img1.src = 'cat.png';
            img2.src = 'Lion.gif';
            img3.src = 'cow.png';
            img4.src = 'ear.png'
        }else if (result[0].label == "roaring") {
            img.src = 'Dog.png';
            img1.src = 'cat.png';
            img2.src = 'lion.png';
            img3.src = 'Cow.gif';
            img4.src = 'ear.png';
            
        }else{
            img.src = 'Dog.png';
            img1.src = 'cat.png';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
            img4.src = 'listen.gif';
        }
    }
}
