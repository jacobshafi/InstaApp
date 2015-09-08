var mapLocation = new google.maps.LatLng(37.8717, -122.2728); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 11, //change zoom here
        center: mapLocation,
        scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]

    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);


    //change address details here
    var contentString = '<div class="map-info-box">'
    + '<div class="map-head">'
    + '<h3>InstaApp</h3></div>'
    + '<p class="map-address"><i class="fa fa-map-marker"></i>Berkeley, California<br><i class="fa fa-phone"></i> 415-505-5727<br><span class="map-email"><i class="fa fa-envelope"></i> instaapp@gmail.com</span></p>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        title: 'InstaApp', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
