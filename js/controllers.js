function TagCtrl($scope) {
    $scope.status = "Tag a pothole!";
    $scope.isCameraReady = false;
    $scope.imgSource = "img/pothole_large.png"; // source for img tag to display picture
    //$scope.pictureSource = Camera.PictureSourceType.CAMERA;   // picture source
    //$scope.destinationType = Camera.DestinationType.FILE_URI; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        alert("onDeviceReady");
        //$scope.isCameraReady = true;
    }
    
    $scope.tagPicture = function(){
        navigator.geolocation.getCurrentPosition($scope.onGeoSuccess, $scope.onGeoError);   
    }
        
    $scope.onGeoSuccess = function(position){
        $scope.lat = position.coords.latitude;
        $scope.lon = position.coords.longitude;
        alert("Postion = " + $scope.lat + "," + $scope.lon);
    }
        
    $scope.onGeoError = function(){
        if(error == 1){
            alert("Turn on location services to tag photo using GPS");
        }
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
