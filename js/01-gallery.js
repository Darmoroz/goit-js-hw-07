import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
	galerry: document.querySelector(".gallery"),
};

const markupGalerryItems = galleryItems.map(createGalleryItem).join("");

function createGalleryItem(obj) {
	return `<div class="gallery__item">
	<a class="gallery__link" href="${obj.original}">
		<img
			class="gallery__image"
			src="${obj.preview}"
			data-source="${obj.original}"
			alt="${obj.description}"
		/>
	</a>
</div>`;
}

function onShowModal(e) {
	e.preventDefault();
	if (!e.target.closest(".gallery__item")) return;
	const instance = basicLightbox.create(
		`
		<img src="${e.target.dataset.source}">
`,
		// { closable: false },
	);
	if (e.target.closest(".gallery__item")) {
		instance.show();
	}
	window.addEventListener("keydown", (e) => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
}

refs.galerry.insertAdjacentHTML("afterbegin", markupGalerryItems);
refs.galerry.addEventListener("click", onShowModal);
