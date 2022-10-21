const ordersCheck = document.querySelector(".menuList").querySelector(".menuBtnReservationCheck");
const login = document.querySelector(".loginRegister");
const page = document.querySelector(".page");
const ordersCheckBtn = page.querySelector(".check-popup-btn");
const loginBtns = page.querySelectorAll(".login-popup-btn");

ordersCheckBtn.addEventListener("click", () => {
	ordersCheck.click();
});

loginBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		login.click();
	});
});
