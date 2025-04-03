var typingEffect = new Typed(".typedtext",{
    strings: ["Data Analyst","Business Analyst"," FrontEnd Web developer"],

    loop: true,
    typespeed: 100,
    backspeed: 100,
    backDelay:2000,
});
const sr = ScrollReveal({
    origin:"top",
    distance : "100px",
    duration : 2000,
    reset : true,
});
sr.reveal(".featured-name",{delay:100});
sr.reveal(".social-icons",{delay:150});
sr.reveal(".about-col-1",{delay:100});
sr.reveal(".sub-title",{delay:100});

const srRight = ScrollReveal({
    origin : "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})
