
update: function () {
const fadeBackgroundE1 = document.querySelector("#fadeBackground");
C = fadeBackgroundEl.children;
if (c.length > 0) {
var i;
for (i=0; i <= c.length; i++) 
{ 
    fadeBackgroundEl.removeChild(c[i]);
}
} else {
this.handleMouseClickEvents();
}
},

createThumbNail: function(item) {
const entityEla
document.createElement("a-entity");
const id= `place-${item.id}";
entityEl.setAttribute("visible", true);
entityEl.setAttribute("id", id);
entityEl.setAttribute("geometry", {
primitive: "circle",
});
radius: 3
entityEl.setAttribute("position", item. position);
entityEl.setAttribute("rotation", item. rotation);
entityEl.setAttribute("material", { src: item.src, opacity: 0.6 }); entityEl.setAttribute("cursor-listener", {});
return entityEl;
},