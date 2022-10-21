const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");

backButton.addEventListener("click", () => {
	history.go(-1);
});

document.querySelectorAll(".widgetcontainer").forEach((item) => {
	item.classList.remove("oti-content-typography");
});
