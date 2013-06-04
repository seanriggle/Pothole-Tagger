function TagCtrl($scope) {
    $scope.status = "Tag a pothole!";
    
    $scope.imgSource = "img/pothole_large.png"; // source for img tag to display picture
    $scope.pictureSource;   // picture source
    $scope.destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource= Camera.PictureSourceType.CAMERA;
        destinationType= Camera.DestinationType.FILE_URI;
        alert("onDeviceReady");
    }
    
    $scope.takePicture = function(){
        alert("take pic");
        var options = {
            sourceType: $scope.pictureSource,
            destinationType: $scope.destinationType
        };
        navigator.camera.getPicture($scope.onCameraSuccess, $scope.onError, options);
    }
    
    $scope.onCameraSuccess = function(imageURI){
        $scope.imgSource = imageURI;
    }
    
    $scope.onError = function(message) {
        alert(message);
    }        
}

function HistoryCtrl($scope) {
    $scope.status = "View history of tagged potholes.";
}

function AccountCtrl($scope) {
    $scope.status = "Setup and account and add business who are looking for pothole tags.";
}
