function enable_modal(x) {
    var image = x;
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modal_image").src = document.getElementById("image"+image).src;    
}
function disable_modal() {
    document.getElementById("myModal").style.display = "none";
}