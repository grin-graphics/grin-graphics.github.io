var modal = document.getElementById('a-modal');
var imgs = document.querySelectorAll('.activity-image__img');
var modalImg = document.getElementById("temp");

for (var i = 0; i < imgs.length ; i++){
    imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

//var span = document.getElementsByClassName("close")[0];
//
//span.onclick = function() {
// modal.style.display = "none";
//}