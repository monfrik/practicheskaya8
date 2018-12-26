let links = document.querySelectorAll('.headerLink');
let search = document.querySelector('#search');

function fnoncroll(){
    let scrolltop = document.documentElement.scrollTop + 40;
    if (scrolltop > document.documentElement.clientHeight){
        links.forEach(function(item) {
            item.style.color = "black";
        });
        search.style.backgroundColor = "#111";
    } else {
        links.forEach(function(item) {
            item.style.color = "white";
        });
        search.style.backgroundColor = "white";
    }
}

fnoncroll();
window.onscroll = function() {
    fnoncroll();
}