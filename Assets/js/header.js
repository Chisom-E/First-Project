const navbar = document.querySelector(".navbar");
// queryselector is used to find an element using CSS selectors.
// Find me the element that has the class 'navbar' and store it inside the variable "navbar"
const navtogglebtn = document.querySelector(".navtogglebtn");
// Find me the element that has the class 'navtogglebtn' and store it inside the variable "navtogglebtn"
console.log(navbar.classList);
// show me all the css classes that this navbar currently has.
console.log(navbar);
// nav.navbar - the actual HTML element that was found.
const icon = document.querySelector(".navtogglebtn i");
navtogglebtn.addEventListener("click", function() {
    if (navbar.classList.contains("active")){
        navbar.classList.remove("active");
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars')
    }else {
        navbar.classList.add('active');
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
    }
    console.log(navbar.classList);
});

let love = document.querySelectorAll('.love');
love.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('present');
    }
})