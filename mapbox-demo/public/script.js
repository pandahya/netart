async function getMapData(){
    const response = await fetch("/getmapkey");
    const data = await response.json();

    mapboxgl.accessToken = data.token;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
    });
};

getMapData();