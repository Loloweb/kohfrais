// Initialize and add the map
function initMap() {
    // The location of Lannion
    const lannion = { lat: 48.732084, lng: -3.459144 };
    // The location of Pontivy
    const pontivy = { lat: 48.066152, lng: -2.967056 };
    // Map, centered at Lannion
    const map1 = new google.maps.Map(document.getElementById("map1"), {
      zoom: 10,
      center: lannion,
    });
    const map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 10,
        center: pontivy,
    });
    // Marker, positioned at Lannion
    const marker1 = new google.maps.Marker({
      position: lannion,
      map: map1,
    });
    // Marker, positioned at Pontivy
    const marker2 = new google.maps.Marker({
        position: pontivy,
        map: map2,
    });
  }