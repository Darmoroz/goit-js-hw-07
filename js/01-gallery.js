import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
	galerry: document.querySelector(".gallery"),
};

refs.galerry.insertAdjacentHTML(
	"afterbegin",
	createGalleryItemsMarkup(galleryItems),
);
refs.galerry.addEventListener("click", onShowModal);

function createGalleryItemsMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
		<img
			class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"
		/>
	</a>
</div>`;
		})
		.join("");
}

function onShowModal(e) {
	e.preventDefault();
	const condition = e.target.closest(".gallery__item");
	if (!condition) return;
	const instance = basicLightbox.create(
		`<img src="${e.target.dataset.source}">`,
	);
	instance.show();
	window.addEventListener("keydown", (e) => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
}

//* Another case
// const markupGalerryItems = galleryItems.map(createGalleryItem).join("");
// function createGalleryItem(obj) {
// 	return `<div class="gallery__item">
// 	<a class="gallery__link" href="${obj.original}">
// 		<img
// 		class="gallery__image"
// 		src="${obj.preview}"
// 		data-source="${obj.original}"
// 		alt="${obj.description}"
// 		/>
// 		</a>
// 		</div>`;
// }
// refs.galerry.insertAdjacentHTML("afterbegin", markupGalerryItems);
