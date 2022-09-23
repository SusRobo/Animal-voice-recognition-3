//https://teachablemachine.withgoogle.com/models/XOGcSPeqp/

var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XOGcSPeqp/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error) {
        console.error(error);
    }
    else{   
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("animal_voices").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("animal_voices").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img=document.getElementById('animal_images');

        //img1 = document.getElementById("Dog.jpg");
        //img = document.getElementById("hear.jpg");
        //img2 = document.getElementById("Cat.webp");
        //img3 = document.getElementById("cow.webp");
        //img4 = document.getElementById('lion.png')
        /*if (results[0].label == "Background noise") 
        {
            img.src = 'hear.jpg';
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background noise" + background_noise;
        }
        else if(results[0].label == "Barking")
        {
            img1.src = 'Dog.jpg';
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog" + dog;
        }
        else if(results[0].label == "Meowing")
        {
            img2.src = 'Cat.webp';
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat" + cat;
        }
        else if(results[0].label == "Mooing")   
        {
            img3.src = 'cow.webp';
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow" + cow;
        }
        else(results[0].label == "Roar")
        {
            img4.src = 'lion.png';
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        */

        if (results[0].label == "Barking") {
            img.src = 'Dog.jpg';
            dog = dog+1;
          } else if (results[0].label == "Meowing") {
            img.src = 'Cat.webp';
            cat = cat + 1;
          } else{
            img.src = 'hear.jpg';
          }
    }
}



