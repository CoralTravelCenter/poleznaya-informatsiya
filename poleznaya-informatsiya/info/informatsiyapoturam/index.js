const page = document.querySelector(".page");
const accordeon = page.querySelector(".accordeon");
const accordHandler = page.querySelector("#accord-handler");
const accordeonItems = accordeon.querySelectorAll(".accordeon__item");
const pageFooter = page.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");
const widgetContainer = page.parentNode;

accordeonItems.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("accordeon__item_closed");
	});
});

accordHandler.addEventListener("click", () => {
	accordeon.classList.toggle("accordeon_hidden");
});

backButton.addEventListener("click", () => {
	history.go(-1);
});

widgetContainer.classList.remove("widgetcontainer");
widgetContainer.classList.remove("oti-content-typography");
