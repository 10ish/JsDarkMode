const toggleSwitch = document.getElementById("toggle-switch");
const homeImage = document.getElementById("home-img");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const navbar = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");

function imageMode(color) {
    image1.setAttribute('src', `svg-images/${color}-mode/1.svg`);
    image2.setAttribute('src', `svg-images/${color}-mode/2.svg`);
    image3.setAttribute('src', `svg-images/${color}-mode/3.svg`);
}
// Dark Mode Function 
function darkMode() {
    homeImage.setAttribute('src', 'svg-images/dark-mode/home.svg');

    navbar.style.backgroundColor = 'rgb(105 105 105 / 85%)';
    console.log(toggleIcon.children);

    imageMode('dark');
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');


    console.log(toggleIcon);
}
// Light Mode Function
function lightMode() {
    homeImage.setAttribute('src', 'svg-images/light-mode/home.svg');
    imageMode('light');
    navbar.style.backgroundColor = 'rgb(71 70 70 / 80%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');


}

function switchTheme(event) {
    const toggleSwitchState = event.target.checked;
    if (toggleSwitchState) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        darkMode();

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();

    }

}
//Event Listener
toggleSwitch.addEventListener('change', switchTheme);
//Accessing Local Storage theme item and changing theme on that base
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
if(currentTheme === 'dark' ){
toggleSwitch.checked = true;
    darkMode();
}
}
