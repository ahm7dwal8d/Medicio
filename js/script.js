
// Header Section 

let topBar = document.querySelector(".top-bar")

let header = document.querySelector(".header")

$(".header ul li a").click(function (event) {

    event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    $("html , body").animate({

        scrollTop: $("." + $(this).data("scroll")).offset().top 

    })

})

let headerOverly = document.querySelector(".header .container .overly")

let burgerIcon = document.querySelector(".header .container .burger-icon")

burgerIcon.addEventListener("click" , function () {

    headerOverly.classList.toggle("active")

})

let headerCloseButon = document.querySelector(".header .overly .close-button")

headerCloseButon.addEventListener("click" , function () {

    headerOverly.classList.remove("active")

})

let headerLinks = document.querySelectorAll(".header ul li a")

for (let i = 0; i < headerLinks.length; i++) {

    headerLinks[i].addEventListener("click" , function () {

        headerOverly.classList.remove("active")

    })

}

$(window).ready(function () {

    $(".header .right").animate({

        opacity: 1,

        right: 0 

    })

    $(".header .left").animate({

        opacity: 1,

        left: 0 

    })

    $(".header .bottom").animate({

        opacity: 1,

        bottom: 0 

    })

})

// Landing Section 

setInterval(function () {

    lanSlider.append(lanSlide[0])

} , 5000)

let lanSlider = document.querySelector(".landing .slider")

let lanSlide = lanSlider.getElementsByClassName("slide")

function lanNext() {

    lanSlider.append(lanSlide[0])

}

function lanPrev() {

    lanSlider.prepend(lanSlide[lanSlide.length - 1])

}

$(window).ready(function () {

    $(".landing .hidden").animate({

        opacity: 1

    })

})

// Setting-Box Section 


let settingBox = document.querySelector(".setting-box")

let settingIcon = document.querySelector(".setting-box .icon")

settingIcon.addEventListener("click" , function () {

    settingBox.classList.toggle("active")

})

document.body.classList.add(localStorage.getItem("bodyColor"))

let el = document.querySelectorAll(".setting-box .color ul .color")

let bodyColor = []

for (let h = 0; h < el.length; h++) {

    bodyColor.push(el[h].getAttribute("data-color"))

    el[h].addEventListener("click" , function () {

        document.body.classList.remove(...bodyColor)

        document.body.classList.add(el[h].getAttribute("data-color"))

        localStorage.setItem("bodyColor" , el[h].getAttribute("data-color"))

    })

}

// Feature Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".feature").offset().top - 400) {

        $(".feature .top").animate({

            opacity: 1,

            top: 0

        })

        $(".feature .left").animate({

            opacity: 1,

            left: 0

        })

        $(".feature .right").animate({

            opacity: 1,

            right: 0

        })

        $(".feature .bottom").animate({

            opacity: 1,

            bottom: 0

        })

    }

})

// About Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".about").offset().top - 400) {

        $(".about .hidden").animate({

            opacity: 1

        })

        $(".about .top").animate({

            top: 0,

            opacity: 1

        })

        $(".about .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Counte Section 

let counteSection = document.querySelector(".counte")

counteOffsetTop = counteSection.offsetTop;

let counteSpan = document.querySelectorAll(".counte .box .head span")

let Started = false;

function StartCounter(el) {

    let Goal = el.dataset.goal;

    let counte = setInterval(function () {

        el.textContent++;

        if (el.textContent === Goal) {

            clearInterval(counte)

        }

    })

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".counte").offset().top - 400) {

        $(".counte .top").animate({

            top: 0,

            opacity: 1

        })

        $(".counte .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Features Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".features").offset().top - 400) {

        $(".features .top").animate({

            top: 0,

            opacity: 1

        })

        $(".features .left").animate({

            left: 0,

            opacity: 1

        })

        $(".features .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".features .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Services Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".services").offset().top - 400) {

        $(".services .top").animate({

            top: 0,

            opacity: 1

        })

        $(".services .left").animate({

            left: 0,

            opacity: 1

        })

        $(".services .right").animate({

            right: 0,

            opacity: 1

        })

        $(".services .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Appointment Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".appointment").offset().top - 400) {

        $(".appointment .hidden").animate({

            opacity: 1

        })

        $(".appointment .left").animate({

            opacity: 1,

            left: 0

        })

        $(".appointment .bottom").animate({

            opacity: 1,

            bottom: 0

        })

    }

})


// Department Section 

let DepartmentLi = document.querySelectorAll(".department ul li")

let departmentBox = document.querySelectorAll(".department .row .row .col")

DepartmentLi.forEach((li)=> {

    li.addEventListener("click" , function () {

        DepartmentLi.forEach((span)=> {

            span.classList.remove("active")

            this.classList.add("active")

        })

    })

    li.addEventListener("click" , function () {

        departmentBox.forEach((box)=> {

            box.style.display = "none"

        })

        document.querySelectorAll(this.dataset.filtter).forEach((el)=> {

            el.style.display = "block"

        })

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".department").offset().top - 400) {

        $(".department .hidden").animate({

            opacity: 1

        })

        $(".department .top").animate({

            top: 0,

            opacity: 1

        })

        $(".department .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})


// Testimonlis Section 

let testSlider = document.querySelector(".testimonlis .slider")

let testSlide = testSlider.getElementsByClassName("slide")

setInterval(function () {

    testSlider.append(testSlide[0])

} , 5000)

function testPrev() {

    testSlider.prepend(testSlide[testSlide.length - 1])

}

function testNext() {

    testSlider.append(testSlide[0])

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".testimonlis").offset().top - 400) {

        $(".testimonlis .hidden").animate({

            opacity: 1

        })

        $(".testimonlis .left").animate({

            left: 0,

            opacity: 1

        })

    }

})

// Doctors Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".doctors").offset().top - 400) {

        $(".doctors .hidden").animate({

            opacity: 1

        })

        $(".doctors .top").animate({

            top: 0,

            opacity: 1

        })

        $(".doctors .left").animate({

            left: 0,

            opacity: 1

        })

        $(".doctors .right").animate({

            right: 0,

            opacity: 1

        })

        $(".doctors .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Galley Section 

let galleySlider = document.querySelector(".galley .slider")

let galleySlide = galleySlider.getElementsByClassName("slide")

setInterval(function () {

    galleySlider.append(galleySlide[0])

}, 5000)

function galleyNext() {

    galleySlider.append(galleySlide[0])

}

function galleyPrev() {

    galleySlider.prepend(galleySlide[galleySlide.length - 1])

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".galley").offset().top - 400) {

        $(".galley .hidden").animate({

            opacity: 1

        })

        $(".galley .left").animate({

            left: 0,

            opacity: 1

        })

    }

})

// Pricing Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".pricing").offset().top - 400) {

        $(".pricing .hidden").animate({

            opacity: 1

        })

        $(".pricing .top").animate({

            top: 0,

            opacity: 1

        })

        $(".pricing .left").animate({

            left: 0,

            opacity: 1

        })

        $(".pricing .right").animate({

            right: 0,

            opacity: 1

        })

        $(".pricing .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Question Section 

let questionLi = document.querySelectorAll(".question ul li")

for (let j = 0; j < questionLi.length; j++) {

    questionLi[j].addEventListener("click" , function () {

        questionLi[j].classList.toggle("active")

    })

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".question").offset().top - 400) {

        $(".question .hidden").animate({

            opacity: 1

        })

        $(".question .top").animate({

            top: 0,

            opacity: 1

        })

        $(".question .left").animate({

            left: 0,

            opacity: 1

        })

        $(".question .right").animate({

            right: 0,

            opacity: 1

        })

        $(".question .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Contact Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".contact").offset().top - 400) {

        $(".contact .hidden").animate({

            opacity: 1

        })

        $(".contact .top").animate({

            opacity: 1,

            top: 0

        })

        $(".contact .left").animate({

            opacity: 1,

            left: 0

        })

        $(".contact .bottom").animate({

            opacity: 1,

            bottom: 0

        })

    }

})
// Button To Top 

let buttonToTop = document.querySelector("span.up")

buttonToTop.addEventListener("click" , function () {

    window.scrollTo({

        left:0,

        top:0,

        behavior: "smooth"
        
    })
        
})



// Scrolling 

window.onscroll = function () {

    // Header Section 

    if (window.scrollY >= 800) {

        topBar.classList.add("active")

        header.classList.add("active")

    } else {

        topBar.classList.remove("active")

        header.classList.remove("active")

    }

    // State Section 

    if (window.scrollY >= counteOffsetTop - 400) {

        if (!Started) {

            counteSpan.forEach((countSpan)=> {

                StartCounter(countSpan)

            })

        }

        Started = true

    }

    // Button To Up 

    if (window.scrollY >= 800) {

        buttonToTop.classList.add("active")

    } else {

        buttonToTop.classList.remove("active")

    }

}