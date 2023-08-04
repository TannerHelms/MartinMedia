
const app = Vue.createApp({
    data() {
        return {
            
        }
    },

    methods: {
       showNav() {
        var element = document.querySelector(".nav-mobile");
        if (element.style.display == "flex") {
            element.classList.remove("nav-show");
            element.style.display = "none";
            this.scroll();
        } else {
            element.style.display = "flex";
            document.querySelector(".navbar").classList.add("nav-colored");
            element.classList.add("nav-show");
            window.onscroll = null;
        }
       },
       scroll () {
        const navbar = document.querySelector(".navbar");
        window.onscroll = function() {
            if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20 ) {
                navbar.classList.add("nav-colored");
            } else {
                navbar.classList.remove("nav-colored");
            }
        }
       },
      },
    mounted : function () {
        this.scroll();
    },
    
}).mount('#app');