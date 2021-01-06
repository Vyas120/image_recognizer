

Webcam.set({ width: 350, height: 300, image_format: 'png', png_quality: 90 });
camera = document.getElementById("cam");
Webcam.attach('#cam');

function takeSnapshot() {
    Webcam.snap(function (data_uri) { document.getElementById("result").innerHTML = "<img id='result_img' src=" + data_uri + ">"; });
} console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_ITJTEx3F/model.json', modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}

function check() {
    image = document.getElementById("result_img");
    classifier.classify(image, got_result)

}

function got_result(error, results) {
    if (error) {
        console.error(error);
    }

    if (results) {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}