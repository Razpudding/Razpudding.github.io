//  53.41235, 5.3241
// nieuw: 53.3984788,5.2774134
//Adres: Badweg Formerum 4, 8894 Formerum, Netherlands
//Improve geolocation -> https://stackoverflow.com/questions/9142833/show-my-location-on-google-maps-api-v3
//Add address on click
//Add open in gmaps
//Set icon middle

var customStyle = [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}];

function initMap(){
  console.log("loading map");
  if (document.getElementById('map-canvas')){
      // Coordinates to center the map
      var myLatlng = new google.maps.LatLng(53.4076104,5.3069776,2471);
      // Other options for the map, pretty much selfexplanatory
      var mapOptions = {
          zoom: 13,
          styles: customStyle,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: true,
          fullscreenControl: false
      };

      // Attach a map to the DOM Element, with the defined settings
      var location = myLatlng//{lat:53.41235, lng: 5.3241};
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      var infoWindow = new google.maps.InfoWindow;
      var raveIcon = { 
        url: 'https://razpudding.github.io/img/marker_small.png',
        anchor: new google.maps.Point(32, 32)
      };
      var marker = new google.maps.Marker({
            position: location,
            icon: raveIcon,
            map: map
      });
    
    // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Almost There...');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            //handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          //handleLocationError(false, infoWindow, map.getCenter());
        }
  }
}
