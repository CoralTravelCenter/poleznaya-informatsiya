const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");
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
