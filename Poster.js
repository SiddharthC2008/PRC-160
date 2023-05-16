
<a-scene background="color: #90caf9">
<!-- Ground -->
<a-plane
id="ground"
color="#78909c"
width="200"
height="100"
rotation-"-90 0 0"
></a-plane>
<!-- Poster Container -->
<a-entity id="posters-container" comics-posters> </a-entity>
<a-camera id="camera" wasd-controls="enabled: false;" position="0 10 20"></a-camera>

<a-entity
>
id="app-title"
position="0 0.73 -1"
text-"font: exo2bold; align: center; width: 2; color: #000; value: Virtual Comics Store !"
<a-entity
id="app-subtitle"
position-"0 -0.10"
text="font: dejavu; align: center; width: 1; color: #0F184E; value: Get Your Favourite Comics" ></a-entity>


createPoster: function (item) {
const entityEl = document.createElement("a-entity"); entityEl.setAttribute("visible", true); entityEl.setAttribute("geometry", {
primitive: "plane",
width: 20, height: 28
});
entityEl.setAttribute("position", {x: 0, y: 5, z: 0.1 }); entityEl.setAttribute("material", { src: item.url });