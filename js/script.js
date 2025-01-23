
/*
const rectangle1 = document.querySelector('.rectangle');
const rectangle2 = document.querySelector('.rectangle2');
const rectangle3 = document.querySelector('.rectangle3');
const rectangle4 = document.querySelector('.rectangle4');


rectangle1.addEventListener('click', function () {
    maravillaSpan.style.color = 'black';
    maravillaSpan.style.backgroundColor = 'white';
});

rectangle2.addEventListener('click', function () {
    maravillaSpan.style.color = 'white';
    maravillaSpan.style.backgroundColor = 'black';
});

rectangle3.addEventListener('click', function () {
    maravillaSpan.style.color = '#942c00';
    maravillaSpan.style.backgroundColor = '#c4d8c4';
});

rectangle4.addEventListener('click', function () {
    maravillaSpan.style.color = '#c4d8c4';
    maravillaSpan.style.backgroundColor = '#942c00';
});*/



/*var pages = document.getElementsByClassName('page');
for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
        page.style.zIndex = (pages.length - i);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < pages.length; i++) {
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick = function () {
            if (this.pageNum % 2 === 0) {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
            }
            else {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
            }
        }
    }
})*/

//ZOOM
let zoomer = function () {
    document.querySelectorAll('.img-zoomer-box').forEach(box => {
        box.addEventListener('mousemove', function (e) {
            let original = document.querySelector(`#${this.dataset.original}`),
                magnified = document.querySelector(`#${this.dataset.zoom}`),
                style = magnified.style,

                // Obtener las coordenadas de la imagen principal
                rect = original.getBoundingClientRect(),
                x = e.clientX - rect.left,  // Coordenada X relativa a la imagen
                y = e.clientY - rect.top,   // Coordenada Y relativa a la imagen
                imgWidth = original.offsetWidth,
                imgHeight = original.offsetHeight,
                xperc = ((x / imgWidth) * 100),
                yperc = ((y / imgHeight) * 100);

            // Ajustar la posición de la imagen ampliada en el fondo
            style.backgroundPositionX = xperc + '%';
            style.backgroundPositionY = yperc + '%';

            // Centramos la lupa respecto al cursor
            style.left = x + 'px';
            style.top = y + 'px';
        });
    });
}();




function ventanaopen1() {
    document.getElementById("popup1").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen2() {
    document.getElementById("popup2").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen3() {
    document.getElementById("popup3").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen1() {
    document.getElementById("popup1").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen2() {
    document.getElementById("popup2").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen3() {
    document.getElementById("popup3").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}
function ventanaopen1() {
    document.getElementById("popup1").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen2() {
    document.getElementById("popup2").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen3() {
    document.getElementById("popup3").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}
function ventanaopen4() {
    document.getElementById("popup4").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen5() {
    document.getElementById("popup5").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaopen6() {
    document.getElementById("popup6").style.display = "block";
    document.body.classList.add("body-no-scroll");
    darkenExceptPopups();
}

function ventanaclose1() {
    document.getElementById("popup1").style.display = "none";
    document.body.classList.remove("body-no-scroll");
    removeDarkened();
}

function ventanaclose2() {
    document.getElementById("popup2").style.display = "none";
    document.body.classList.remove("body-no-scroll");
    removeDarkened();
}

function ventanaclose3() {
    document.getElementById("popup3").style.display = "none";
    document.body.classList.remove("body-no-scroll");
    removeDarkened();
}

function ventanaclose4() {
    document.getElementById("popup4").style.display = "none";
    document.body.classList.remove("body-no-scroll");
    removeDarkened();
}

function ventanaclose5() {
    document.getElementById("popup5").style.display = "none";
    document.body.classList.remove("body-no-scroll");
    removeDarkened();
}

function ventanaclose6() {
    document.getElementById("popup6").style.display = "none";
    document.body.classList.remove("body-no-scroll");
    removeDarkened();
}


function darkenExceptPopups() {
    // Seleccionar todos los elementos del cuerpo
    const allElements = document.querySelectorAll("body *");

    // Crear un conjunto de elementos que no deben oscurecerse (popups, sus hijos y padres)
    const popupsAndRelatives = new Set();
    const popupElements = document.querySelectorAll(".popup");

    // Función para agregar el elemento y todos sus ancestros al conjunto
    function addElementAndAncestors(element) {
        let currentElement = element;
        while (currentElement) {
            popupsAndRelatives.add(currentElement);
            currentElement = currentElement.parentElement;
        }
    }

    // Agregar los elementos con clase "popup", sus hijos y sus padres al conjunto
    popupElements.forEach(popup => {
        addElementAndAncestors(popup);
        popup.querySelectorAll("*").forEach(child => {
            popupsAndRelatives.add(child);
        });
    });

    // Oscurecer todos los elementos que no estén en el conjunto
    allElements.forEach(el => {
        if (!popupsAndRelatives.has(el)) {
            el.classList.add("darkened"); // Añadir clase "darkened" para oscurecer
        }
    });
}

// Función para restaurar la opacidad original eliminando la clase "darkened"
function removeDarkened() {
    const darkenedElements = document.querySelectorAll(".darkened");
    darkenedElements.forEach(el => {
        el.classList.remove("darkened");
    });
}


// Función para restaurar la opacidad original eliminando la clase "darkened"
function removeDarkened() {
    const darkenedElements = document.querySelectorAll(".darkened");
    darkenedElements.forEach(el => {
        el.classList.remove("darkened");
    });
}


/*
//NAV BG
window.onscroll = function bgnav() {
    var menuElement = document.getElementById("menu");
    var footer1Element = document.getElementById("footer1");
    var footer2Element = document.getElementById("footer2");
    var footer3Element = document.getElementById("footer3");

    if (window.scrollY) {
        menuElement.classList.add("menu-bg");
        footer1Element.classList.add("menu-bg");
        footer2Element.classList.add("menu-bg");
        footer3Element.classList.add("menu-bg");
    } else {
        menuElement.classList.remove("menu-bg");
        footer1Element.classList.add("menu-bg");
        footer2Element.classList.remove("menu-bg");
        footer3Element.classList.remove("menu-bg");
    }
};
*/


// SCROLL

window.addEventListener('scroll', function () {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + "%";
});
/*
// JavaScript para actualizar el progreso del scroll
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    const scrollWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    const scrollPercent = (scrollLeft / scrollWidth) * 100;
    scrollProgress.style.width = scrollPercent + "%";
});
*/
// Ajuste adicional para el caso del scroll horizontal
const horizontalScroll = document.querySelector('.scroll-horizontal');
horizontalScroll.addEventListener('scroll', function () {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = horizontalScroll.scrollTop;
    const scrollHeight = horizontalScroll.scrollHeight - horizontalScroll.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + "%";
});

// GSAP

gsap.registerPlugin(ScrollTrigger);

// Función para inicializar ScrollTrigger para pantallas grandes
function initLargeScreenAnimation() {
    let container = document.querySelector('.scroll-horizontal');  // Contenedor que tiene el scroll horizontal

    // Crear ScrollTrigger para scroll horizontal
    ScrollTrigger.scrollerProxy(container, {
        scrollTop(value) {
            return arguments.length ? container.scrollTop = value : container.scrollTop;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: container.style.transform ? "fixed" : "transform"
    });

    gsap.to("#triggered-element", {
        scrollTrigger: {
            scroller: container,  // el contenedor que tiene el scroll
            trigger: "#triggered-element",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: true,
            pinSpacing: false,
        },
        opacity: 0,
        filter: "blur(5px)",
    });

    // Refrescar los triggers de GSAP
    ScrollTrigger.addEventListener("refresh", () => container.scrollLeft = 0);
    ScrollTrigger.refresh();
}

// Función para inicializar ScrollTrigger para pantallas pequeñas
function initSmallScreenAnimation() {
    gsap.to("#triggered-element", {
        scrollTrigger: {
            trigger: "#triggered-element",
            start: "center center",
            scrub: true,
            pin: true,
        },
        opacity: 0,
        filter: "blur(5px)",
    });
}

// Función para destruir todos los ScrollTriggers previos
function killScrollTriggers() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

// Función para definir cuál animación inicializar en función del tamaño de la pantalla
function handleResize() {
    // Destruir los ScrollTriggers previos para evitar conflictos
    killScrollTriggers();

    // Comprobar el ancho de la pantalla y aplicar la animación correspondiente
    if (window.innerWidth > 1360) {
        initLargeScreenAnimation();  // Para pantallas grandes
    } else {
        initSmallScreenAnimation();  // Para pantallas pequeñas
    }
}

// Ejecutar la función de inicialización en la carga
handleResize();

// Escuchar cambios en el tamaño de la ventana y ejecutar la función correspondiente
window.addEventListener('resize', handleResize);



//SCROLL CLICK FLECHA
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado');  // Verifica si se ejecuta correctamente

    const toCV = document.querySelector('#toCV');
    const scrollcv1 = document.querySelector('.scrollcv1');
    const scrollcv2 = document.querySelector('.scrollcv2');
    const scrollContainer = document.querySelector('.scroll-horizontal');

    if (!scrollcv1 || !scrollcv2 || !scrollContainer) {
        console.log('No se encontraron los elementos scrollcv1, scrollcv2 o scrollContainer');
        return;
    }

    scrollcv1.addEventListener('click', () => {
        console.log('Clic en el primer div detectado');

        // Detectar la orientación de la pantalla
        const isVertical = window.innerWidth <= window.innerHeight;

        if (isVertical) {
            // Desplazamiento vertical en dispositivos móviles o en orientación vertical
            scrollcv2.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Desplazamiento horizontal en ordenador (cuando la pantalla está en orientación horizontal)
            const scrollTop = scrollcv2.offsetTop;  // Obtener la posición en el eje X del segundo div

            // Desplazar el contenedor scroll-horizontal de forma correcta
            scrollContainer.scrollTo({
                top: scrollTop,  // Desplazar horizontalmente al div 'segundo'
                behavior: 'smooth'
            });
        }
    });

    toCV.addEventListener('click', () => {
        console.log('Clic en el primer div detectado');

        // Detectar la orientación de la pantalla
        const isVertical = window.innerWidth <= window.innerHeight;

        if (isVertical) {
            // Desplazamiento vertical en dispositivos móviles o en orientación vertical
            scrollcv2.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Desplazamiento horizontal en ordenador (cuando la pantalla está en orientación horizontal)
            const scrollTop = scrollcv2.offsetTop;  // Obtener la posición en el eje X del segundo div

            // Desplazar el contenedor scroll-horizontal de forma correcta
            scrollContainer.scrollTo({
                top: scrollTop,  // Desplazar horizontalmente al div 'segundo'
                behavior: 'smooth'
            });
        }
    });
});

/*
// Función para gestionar la clase en el div cv-hover
function observeVisibility(targetId) {
    const targetElement = document.querySelector(targetId);
    const hoverElement = document.querySelector('#cv-hover');

    if (!targetElement || !hoverElement) {
        console.error('No se encontraron los elementos especificados.');
        return;
    }

    // Configuración del IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    hoverElement.classList.add('menu-hover-line-stay');
                } else {
                    hoverElement.classList.remove('menu-hover-line-stay');
                }
            });
        },
        {
            root: null,
            threshold: 0.5,
        }
    );

    // Inicia la observación
    observer.observe(targetElement);
}

observeVisibility('.body-color');
*/






