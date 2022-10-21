const triggerBtn = document.querySelector(".container-menu").querySelector(".menuBtnReservationCheck");
const targetBtn = document.querySelector(".tabVacationIdeas");

targetBtn.querySelector("a").href = "";
targetBtn.querySelector("span").textContent = "Проверка заявки";
triggerBtn.style.display = "none";
targetBtn.addEventListener("click", (evt) => {
	evt.preventDefault();
	triggerBtn.click();
});
