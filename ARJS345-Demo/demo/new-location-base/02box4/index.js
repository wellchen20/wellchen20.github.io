window.onload = () => {
    const el = document.querySelector("[gps-new-camera]");
    el.addEventListener("gps-camera-update-position", e => {
        document.getElementById("gpsLab").innerHTML = "gps is: " + e.detail.position.latitude + "," + e.detail.position.longitude;
        document.getElementById("box1").setAttribute('gps-new-entity-place', {
            latitude: e.detail.position.latitude + 0.001,
            longitude: e.detail.position.longitude
        });
        document.getElementById("box2").setAttribute('gps-new-entity-place', {
            latitude: e.detail.position.latitude - 0.001,
            longitude: e.detail.position.longitude
        });
        document.getElementById("box3").setAttribute('gps-new-entity-place', {
            latitude: e.detail.position.latitude,
            longitude: e.detail.position.longitude + 0.001
        });
        document.getElementById("box4").setAttribute('gps-new-entity-place', {
            latitude: e.detail.position.latitude,
            longitude: e.detail.position.longitude - 0.001
        });
    });
};
