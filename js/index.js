const loading = document.querySelector('#loading');
const loaded = document.querySelector('#loaded');
loaded.classList.add('noShow');

window.addEventListener("load", () => {
    loading.classList.add('noShow');
    loaded.classList.remove('noShow');
});

function toggleMenu() {
    const menu = document.querySelector('nav .menu');
    menu.classList.toggle('active');
}

let items = document.querySelectorAll('#servicesCarousel.carousel .carousel-item');
		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});
