function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        // now hear we write gsap code 
        let tl = gsap.timeline()
            .to("#nav-bottom", {
                height: "21vh"
            })
        tl.to(".nav-part2 h5", {
            display: "block"
        })
        tl.from(".nav-part2 h5 span", {
            y: 25,
            // duration:0.3,
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        // now hear we write gsap code 
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            // duration:0.3,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none"
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

navAnimation()