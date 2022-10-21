const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");
const popups = document.querySelectorAll(".info-popup");
const popupCards = document.querySelectorAll(".card_simple");
const tabsContainer = document.querySelector(".cards_three-columns_faq");
const tabs = tabsContainer.querySelectorAll(".card");

if (window.innerWidth < 1007) {
	tabs.forEach((tab) => {
		tab.addEventListener("click", function () {
			toggleTab(tab);
		});
	});

	function toggleTab(tab) {
		tabs.forEach((t) => {
			if (t.querySelector(".hover-content_faq").classList.contains("hover-content_faq_active") && t !== tab) {
				t.querySelector(".hover-content_faq").classList.toggle("hover-content_faq_active");
			}
		});
		tab.querySelector(".hover-content_faq").classList.toggle("hover-content_faq_active");
	}
}

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
