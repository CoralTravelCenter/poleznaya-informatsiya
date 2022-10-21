const page = document.querySelector(".page");
const pageFooter = page.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");
const widgetContainer = page.parentNode;

backButton.addEventListener("click", () => {
	history.go(-1);
});

widgetContainer.classList.remove("widgetcontainer");
widgetContainer.classList.remove("oti-content-typography");
