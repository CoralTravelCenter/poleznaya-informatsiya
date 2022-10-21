const accordeon = document.querySelector(".accordeon");
const accordeonItems = accordeon.querySelectorAll(".accordeon__item");

accordeonItems.forEach((item) => {
	item.querySelector(".accordeon__item-header").addEventListener("click", () => {
		item.classList.toggle("accordeon__item_closed");
	});
});

const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");

backButton.addEventListener("click", () => {
	history.go(-1);
});
