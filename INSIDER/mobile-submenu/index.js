const body = document.querySelector("body");
const styles = `
<style type="text/css">
.new-submenu__wrapper {
	background: #fff;
	padding: 30px;
	margin: 0 0 0 -12px !important;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	border-top: 1px solid #e5e5e5;
	position: relative;
	width: 100vw !important;
  }
  .new-submenu__wrapper:last-of-type {
	border-bottom: 1px solid #e5e5e5;
  }
  @media screen and (max-width: 768px) {
	.new-submenu__wrapper {
	  padding: 15px;
	}
  }
  
  .new-submenu__title {
	width: 100%;
	font-weight: 600;
	font-size: 20px !important;
	line-height: 24px !important;
	margin: 0;
	padding: 0 35px 0 0;
  }
  @media screen and (max-width: 768px) {
	.new-submenu__title {
	  font-size: 3.5vw !important;
	}
  }
  
  .new-submenu__list {
	max-height: 0;
	transition: 0.3s;
	overflow: hidden;
	margin: 0;
	width: 100%;
  }
  
  .new-submenu__list_opened {
	max-height: 3000px;
	transition: 0.3s;
	margin: 30px 0 0 0;
  }
  
  .new-submenu__list-item {
	line-height: unset !important;
	color: unset !important;
	margin: unset !important;
	font-size: unset !important;
	font-weight: unset !important;
	padding: 15px 0 !important;
	max-width: calc(100% - 25px);
  }
  .new-submenu__list-item span {
	color: #0093d0 !important;
	background-color: transparent !important;
	padding: 0 !important;
  }
  .new-submenu__list-item .new-submenu__list-item_active {
	padding: 15px 0 15px 15px !important;
	position: relative;
	color: #000 !important;
  }
  @media screen and (max-width: 768px) {
	.new-submenu__list-item .new-submenu__list-item_active {
	  padding: 7px 0 7px 15px !important;
	}
  }
  @media screen and (max-width: 768px) {
	.new-submenu__list-item {
	  padding: 7px 0 !important;
	}
  }
  
  .new-submenu__link {
	font-weight: 400 !important;
	font-size: 3.8vw !important;
	line-height: 1 !important;
	color: #888888 !important;
  }
  .new-submenu__link a {
	font-weight: 400 !important;
	font-size: 3.8vw !important;
	line-height: 1.2 !important;
	color: #888888 !important;
  }
  @media screen and (max-width: 768px) {
	.new-submenu__link a {
	  font-size: 3vw !important;
	}
  }
  @media screen and (max-width: 768px) {
	.new-submenu__link {
	  font-size: 3vw !important;
	}
  }
  
  .new-submenu__list-item_active {
	padding: 15px 0 15px 15px !important;
	position: relative;
  }
  .new-submenu__list-item_active .new-submenu__link {
	color: #000 !important;
  }
  .new-submenu__list-item_active::before {
	content: "";
	background: url(https://cdn.coral.ru/content/cms/russia/useful-information-pages/submenu-active-arrow-ico.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 6px;
	height: 100%;
	top: 0;
	left: 0;
	position: absolute;
	z-index: 1;
  }
  @media screen and (max-width: 768px) {
	.new-submenu__list-item_active {
	  padding: 7px 0 7px 15px !important;
	}
  }
  
  .new-submenu__arrow-ico {
	position: absolute;
	top: 0;
	right: 10px;
	width: 25px;
	height: 100%;
	background: url(https://cdn.coral.ru/content/cms/russia/useful-information-pages/submenu-arrow-ico.png);
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	transition: 0.3s;
	pointer-events: none;
  }
  @media screen and (max-width: 768px) {
	.new-submenu__arrow-ico {
	  width: 20px;
	}
  }
  
  .new-submenu__arrow-ico_opened {
	transform: rotate(180deg);
	transition: 0.3s;
  }
</style>`;
body.insertAdjacentHTML("afterbegin", styles);

const arrowIcoLayout = `<div class="new-submenu__arrow-ico">&nbsp;</div>`;
const widgetContainers = document.querySelectorAll(".widgetcontainer");
const url = location.href;

if (window.innerWidth < 1007) {
	widgetContainers.forEach((container) => {
		if (!container.classList.contains("oti-content-typography") && !container.classList.contains("verticalCustomMenuContainer")) {
			container.insertAdjacentHTML("beforeEnd", arrowIcoLayout);
			container.classList.add("new-submenu__wrapper");
			const arrowIco = container.querySelector(".new-submenu__arrow-ico");
			const submenuTitle = container.querySelector("label");
			const navList = container.querySelector("ul");
			const navItem = navList.querySelectorAll("li");

			submenuTitle.classList.add("new-submenu__title");
			navList.classList.add("new-submenu__list");
			navItem.forEach((item) => {
				item.classList.add("new-submenu__list-item");
				if (item.querySelector(".minus")) {
					item.querySelector(".minus").remove();
				}
				if (item.querySelector("a")) {
					item.querySelector("a").classList.add("new-submenu__link");
				}
				if (item.querySelector("span")) {
					item.querySelector("span").classList.add("new-submenu__link");
				}

				if (item.firstElementChild.href === url || item.firstElementChild.textContent === document.title || item.classList.contains("selected")) {
					if (location.pathname !== "/poleznaya-informatsiya/") {
						item.classList.add("new-submenu__list-item_active");
					}
				}
			});

			submenuTitle.addEventListener("click", () => {
				toggleSubmenu(navList, arrowIco);
			});
			setTimeout(function () {
				arrowIco.style.height = `${container.offsetHeight}px`;
			}, 500);
		}
	});
}

function toggleSubmenu(currentSubmenu, arrow) {
	currentSubmenu.classList.toggle("new-submenu__list_opened");
	arrow.classList.toggle("new-submenu__arrow-ico_opened");
}
