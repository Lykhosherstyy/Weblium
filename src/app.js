import './assets/scss/app.scss';



function Accordion(){
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        acc = document.getElementsByClassName("accordion--item"),
        i;

    if (windowWidth <= 640){

        for (i = 0; i < acc.length; i++) {
            if(i == 0){
                acc[i].classList.add('active');
            }
            acc[i].addEventListener("click", function() {

                this.classList.toggle("active");
            });
        }

    }
}

Accordion();

