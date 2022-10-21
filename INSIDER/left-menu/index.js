const layout = {
	titleToLink: `<div class="left-menu__title-wrap"><a href="" class="left-menu__title-link"></a></div>`,
};

const mainurls = ["/poleznaya-informatsiya/company/about/", "/poleznaya-informatsiya/onlinetour/", "/poleznaya-informatsiya/offers/", "/poleznaya-informatsiya/info/", "/poleznaya-informatsiya/additional-service/"];
const currentPageUrl = window.location.href;
const menuColumn = document.querySelector(".leftcol");
const menuGroups = menuColumn.querySelectorAll(".widgetcontainer");
const burgerMenu = document.querySelector(".menuList");
const burgerMenuCheckReserv = burgerMenu.querySelector(".menuBtnReservationCheck");

for (let i = 0; i < menuGroups.length; i++) {
	menuGroups[i].insertAdjacentHTML("afterbegin", layout.titleToLink);
	menuGroups[i].classList.add("left-menu__group");
	const title = menuGroups[i].querySelector(".leftCustomMenuTitle");
	const menuItems = menuGroups[i].querySelectorAll("li");
	const newLink = menuGroups[i].querySelector(".left-menu__title-link");

	newLink.textContent = title.textContent;
	newLink.href = mainurls[i];
	title.remove();

	menuItems.forEach((item) => {
		item.classList.add("left-menu__item");
		if (item.textContent === "Просмотр заявок для туристов ") {
			item.querySelector("a").href = "";
			item.addEventListener("click", checkOrder);
		}
	});

	checkActiveMenuItem(menuGroups[i]);
}

function checkActiveMenuItem(group) {
	const allLinks = group.querySelectorAll("a");
	allLinks.forEach((link) => {
		if (link.href === currentPageUrl && link.textContent !== "Просмотр заявок для туристов ") {
			link.parentNode.classList.add("left-menu_active");
		}
	});
}

function checkOrder(evt) {
	evt.preventDefault();
	burgerMenuCheckReserv.click();
}
