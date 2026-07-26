// ======================================
// THE HEAVEN BYTES
// PREMIUM WEBSITE JAVASCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Smooth Scroll
    // ==========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ==========================
    // Sticky Navbar Shadow
    // ==========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(0,0,0,0.95)";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

        } else {

            navbar.style.background = "rgba(0,0,0,.90)";
            navbar.style.boxShadow = "none";

        }

    });


    // ==========================
    // Scroll Animation
    // ==========================

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        observer.observe(section);

    });

});
// ======================================
// BACK TO TOP BUTTON
// ======================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ======================================
// ACTIVE NAVIGATION LINK
// ======================================

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ======================================
// GALLERY IMAGE CLICK EFFECT
// ======================================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        image.style.transform = "scale(1.08)";

        setTimeout(() => {

            image.style.transform = "scale(1)";

        }, 250);

    });

});


// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});


// ======================================
// LOADING ANIMATION
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
// ======================================
// HERO TYPING EFFECT
// ======================================

const heroTitle = document.querySelector(".hero-content h2");

if(heroTitle){

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let i = 0;

    function typing(){

        if(i < text.length){

            heroTitle.textContent += text.charAt(i);

            i++;

            setTimeout(typing,80);

        }

    }

    typing();

}


// ======================================
// IMAGE FADE-IN
// ======================================

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

images.forEach(img=>{

    img.style.opacity="0";
    img.style.transform="translateY(40px)";
    img.style.transition=".8s";

    imageObserver.observe(img);

});


// ======================================
// BUTTON HOVER GLOW
// ======================================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 25px rgba(255,183,3,.6)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

});


// ======================================
// CURRENT YEAR IN FOOTER
// ======================================

const footer = document.querySelector("footer p:last-child");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} The Heaven Bytes. All Rights Reserved.`;

}


// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("☕ The Heaven Bytes Website Loaded Successfully");

// ==========================
// MENU ACCORDION (supports .category and .menu-category)
// ==========================

(function(){
    const cats = document.querySelectorAll('.category, .menu-category');
    if(!cats || cats.length===0) return;

    cats.forEach(cat => {
        const header = cat.querySelector('h2') || cat.querySelector('h3');
        if(!header) return;
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            cat.classList.toggle('active');
        });
    });

    // Open first category by default if none are active
    const anyActive = Array.from(cats).some(c=>c.classList.contains('active'));
    if(!anyActive) cats[0].classList.add('active');

    // Also map .menu-item to .item class for scripts that may rely on .item
    document.querySelectorAll('.menu-item').forEach(mi=>mi.classList.add('item'));
})();