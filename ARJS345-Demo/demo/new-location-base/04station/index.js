window.onload = () => {
    const el = document.querySelector("[gps-new-camera]");
    el.addEventListener("gps-camera-update-position", e => {
        document.getElementById("gpsLab").innerHTML = "gps: " + e.detail.position.latitude + "," + e.detail.position.longitude;
   
        document.getElementById("box1").setAttribute('gps-new-entity-place', {
            latitude: e.detail.position.latitude + 0.001,
            longitude: e.detail.position.longitude
        });
   
    });
};
