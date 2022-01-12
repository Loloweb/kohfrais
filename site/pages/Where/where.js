// Initialize and add the map
function initMap() {
    // The location of Lannion
    const lannion = { lat: 48.732084, lng: -3.459144 };
    // The location of Pontivy
    const pontivy = { lat: 48.066152, lng: -2.967056 };
    // Map1, centered at Lannion
    const map1 = new google.maps.Map(document.getElementById("map1"), {
      zoom: 10,
      center: lannion,
    });
    // Map2, centered at Pontivy
    const map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 10,
        center: pontivy,
    });
    // Marker for map1, positioned at Lannion
    const marker1 = new google.maps.Marker({
      position: lannion,
      map: map1,
    });
    // Marker for map2, positioned at Pontivy
    const marker2 = new google.maps.Marker({
        position: pontivy,
        map: map2,
    });
  }

$(function() { // premier entrainement javascript
    
    var $rota = $('.spin')
    
    $rota.click(function(){
        var $this = $(this);
        
        if($this.data('rotating')){
            clearInterval($this.data('rotating'));
            $this.data('rotating', false)
        } else {
            $this.data('rotating', setInterval(function(){
                var degree = $this.data('degree') || 0;
                $this.css({ transform: 'rotate(' + degree + 'deg)'});
                $this.data('degree', ++degree)
            }, 5));
        }
    });
});