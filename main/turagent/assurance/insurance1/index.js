const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");
const popups = document.querySelectorAll(".info-popup");
const popupCards = document.querySelectorAll(".card_simple");

for (let i = 0; i < popups.length; i++) {
	const currentPopup = popups.item(i);
	const currentCloseButton = currentPopup.querySelector(".info-popup__close-button");

	popupCards[i].addEventListener("click", (evt) => {
		evt.preventDefault();
		openModal(currentPopup);
	});

	currentCloseButton.addEventListener("click", () => {
		closeModal(currentPopup);
	});

	currentPopup.addEventListener("click", (evt) => {
		if (evt.type === "click") {
			if (evt.target === evt.currentTarget) {
				closeModal(currentPopup);
			}
		}
	});
}

window.addEventListener("keyup", (evt) => {
	if (evt.key === "Escape") {
		closeModal(document.querySelector(".info-popup_opened"));
	}
});

function closeModal(popup) {
	popup.classList.remove("info-popup_opened");
}

function openModal(popup) {
	popup.classList.add("info-popup_opened");
}

backButton.addEventListener("click", () => {
	history.go(-1);
});
