var textWrapper = document.querySelector('.welcome-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.welcome-1 .letter',
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 4800 + 50 * i
    });

var textWrapper = document.querySelector('.welcome-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.welcome-2 .letter',
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 4800 + 50 * i
    });

TweenMax.to(".wrapper", 2, {
    top: "-100%",
    ease: Expo.easeInOut,
    delay: 3.6
});

var tl = new TimelineMax();

tl.from(".loader", 1.6, {
    scaleY: "0%",
    y: 80,
    ease: Expo.easeInOut,
    delay: 1,
    transformOrigin: "50% 100%"
});

tl.to(".loader", 1.6, {
    height: "20vh",
    scaleY: "0%",
    ease: Expo.easeInOut,
    transformOrigin: "0% -100%"
});

TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
    delay: 3.8,
});


var tl = new TweenMax.staggerFrom(".menu > div", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2
}, 0.1);

var tl = new TweenMax.staggerFrom(".menu-footer > div", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2
}, 0.1);

var tl = new TweenMax.staggerFrom(".contents-container > div", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2
}, 0.1);