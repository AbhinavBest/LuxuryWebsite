
const lenis = new Lenis({
    autoRaf: true,
});


lenis.on('scroll', (e) => {
    console.log(e);
});

const tl = gsap.timeline();
gsap.set("#textSVG", { fill: "none" })


tl.to("#circle1", {
    duration: 1,
    strokeDashoffset: 314,
    ease: "power1.inOut"
})
    .to("#verticalLine1", {
        duration: 1,
        strokeDashoffset: 180,
        ease: "power1.inOut"
    }, "-=1")
    .to("#verticalLine2", {
        duration: 1,
        strokeDashoffset: 180,
        ease: "power1.inOut"
    }, "-=1")
    .to("#logo", {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
    }, "-=1")


    .to(".left-overlay", {
        duration: 1,
        left: '-50vw',
        ease: "power1.inOut"
    })
    .to(".right-overlay", {
        duration: 1,
        left: '200%',
        ease: "power1.inOut"
    }, '-=1')

    .to("#textSVG", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out"
    }, '-=0.75')

    .to("#textSVG", {
        fill: "#FBF0DA",
        fillOpacity: 1,
        duration: 1,
        ease: "power1.in"
    }, "-=1")

    .to(".cover", {
        opacity: 0.3,
        duration: 1,
        ease: "power1.out"
    }, '-=0.5')

    .to(".logo", {
        opacity: 1,
        duration: 1,
        ease: "power1.out"
    }, '-=1')

    .to(".menu-icon", {
        opacity: 1,
        duration: 1,
        ease: "power1.out"
    }, '-=1')

    .to(".animated-line", {
        width: "100%",
        duration: 1,
        ease: "power1.out"
    }, '-=1')

    .to(".side-text", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    }, '-=0.7')

    .to(".cta", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    }, '-=1')

// .to(".right-overlay", {
//     duration: 1,
//     left: '100%',
//     ease: "power1.inOut"
// }, '-=1')

let tlabt = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'bottom center',
        markers: false,
    }
})

tlabt.to(".abt-disc", {
    opacity: 1,
    duration: 2,
    ease: "power2.out"
})

tlabt.to(".abt-title", {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 2,
    ease: "power2.out"
}, '-=2')

tlabt.to(".image-overlay", {
    width: "0%",
    duration: 2,
    ease: "power1.out"
}, '-=2');

// tlabt.to(".abt-img-1",{
//     clipPath: "inset(0 0% 0 0)",
//     duration: 2,
//     ease: "power2.out"
// },'-=1')
// tlabt.to(".abt-img-2",{
//     clipPath: "inset(0 0% 0 0)",
//     duration: 2,
//     ease: "power2.out"
// },'-=2')

let tlmenu = gsap.timeline({ paused: true });

tlmenu.set(".menu", { zIndex: 7 })
    .set(".menu-cover", { zIndex: 8 })
    .to(".left-overlay", {
        duration: 1,
        left: '0',
        ease: "power1.inOut"
    })
    .to(".right-menu-overlay", {
        right: "0",
        duration: 1,
        ease: "power1.inOut"
    }, '-=1')
    .to(".menu-nav", {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3
    })
    .to(".menu-cover-item-anim", {
        clipPath: "inset(0 0% 0 0)",
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.1,
    }, '-=1')
    .to(".cross-wrap", {
        display: "block",
        duration: 1,
        ease: "power1.inOut",
    }, "-=1")

// Function to Open the Menu
function menuOpen() {
    tlmenu.play();
    gsap.to([".menu-nav", ".menu-cover-item-anim",".cross-wrap",".left-overlay",".right-menu-overlay"], {
        opacity: 1, // Ensures they are fully visible when opening
        duration: 0.3,
        ease: "power1.out"
    });
}

// Function to Close the Menu with Quick Fade on Some Elements
function menuClose() {
    let closeTl = gsap.timeline();

    closeTl.to([".menu-nav", ".menu-cover-item-anim",".cross-wrap"], {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut"
    })
    .to(".left-overlay", {
        duration: 1,
        left: '-50vw',
        ease: "power1.inOut"
    },"-=0.1")
    .to(".right-menu-overlay", {
        right: "-50vw",
        duration: 1,
        ease: "power1.inOut"
    }, '-=1')
    .to([".left-overlay,.right-menu-overlay"], {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut"
    })

    .add(() => tlmenu.reverse(), "-=0.5");
}

var dropdownLabel = document.getElementById("dropdown-label");

var dropdownFood = document.getElementById("dropdown-food");

function toggleDropdown() {
  dropdownFood.classList.toggle("is-open");
}

document.formFood.onclick = function () {
  var selectedFood = document.querySelector(
    "input[name = selected-food]:checked"
  );
  if (selectedFood != null) {
    var span = selectedFood.parentNode.querySelector("span").innerHTML;
    dropdownLabel.innerHTML = span;
    dropdownFood.classList.remove("is-open");
  }
};

