
let menuList = document.getElementsByClassName("togglemenu");

let menu = document.getElementsByClassName("menuButton");

console.log(menuList);
console.log(menu);

menu[0].addEventListener('click', function () {
    console.log("hej")
    for (list of menuList) {
        list.classList.toggle("hidden")
    }
});
