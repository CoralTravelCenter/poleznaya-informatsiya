const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");

backButton.addEventListener("click", () => {
	history.go(-1);
});
