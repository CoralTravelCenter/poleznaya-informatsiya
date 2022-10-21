const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");

backButton.addEventListener("click", () => {
	history.go(-1);
});

// remove Oti-Typography

const widgetContainers = document.querySelectorAll(".widgetcontainer");

widgetContainers.forEach((item) => {
	item.classList.remove("widgetcontainer");
	item.classList.remove("oti-content-typography");
});


