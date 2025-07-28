
var quotes = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> ― Albert Einstein","“A room without books is like a body without a soul.” <br> ― Marcus Tullius Cicero","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br> ― Bernard M. Baruch","“You've gotta dance like there's nobody watching, <br> Love like you'll never be hurt,<br> Sing like there's nobody listening, <br> And live like it's heaven on earth.” ― William W. Purkey","“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br> ― Dr. Seuss"]

var number;

function randomQuote() {
    let quotebox = document.getElementById("Quote-box");
    let button = document.querySelector("button");
    button.disabled = true;

    // Step 1: Remove 'show' => fades out
    quotebox.classList.remove("show");
   // Step 2: After fade out (500ms), change text and fade in
   
    setTimeout(() => {
        
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * quotes.length);
        } while (randomNumber === number);
        number = randomNumber;

        quotebox.innerHTML = quotes[randomNumber];

        // Step 3: Add 'show' back => fades in
        quotebox.classList.add("show");

        button.disabled = false;
    }, 500); // Same as transition duration

}


particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        line_linked: {
            enable: false
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.8,
            random: true, // عشان يلمع ويطفي
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 1.8,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
});
