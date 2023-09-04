window.onload = () => {
    //const el = document.querySelector("[gps-new-camera]");
    const el = document.querySelector("[gps-camera]");
    el.addEventListener("gps-camera-update-position", e => {
        document.getElementById("gpsLab").innerHTML = "gps: " + e.detail.position.latitude + "," + e.detail.position.longitude;
    });
};
