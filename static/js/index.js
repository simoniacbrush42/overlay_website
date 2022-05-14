

window.addEventListener('DOMContentLoaded', (e) => {
    const menuButton = document.getElementById("spans");
    const menuArea = document.getElementById('menu');

    menuButton.addEventListener('click', function (){
        console.log("click")
        this.classList.toggle('is-active')
        menuArea.classList.toggle('responsive')
    })
})





