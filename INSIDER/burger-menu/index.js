const body = document.querySelector("body");
const styles = `
<style>
@media screen and (max-width: 600px) {
  .mobileoffsetmenucontainer {
    padding: 0 1rem !important;
  }
  .mobileoffsetmenucontainer .dm-favorite--cabinet {
    display: block;
  }
  .offsetmenuheader,
.departuresearchwrapper,
.giftcardwrapper,
.profilemenuwrapper,
.currencymenuwrapper,
.phonemenuwrapper {
    padding: 0.85rem 0 !important;
  }
  .profilemenuwrapper,
.currencymenuwrapper,
.mainmenuwrapper {
    border-bottom: 1px solid #e5e5e5 !important;
  }
  .mainmenuwrapper {
    padding: 0 !important;
  }
  .dm-favorite {
    color: #000;
    font-weight: 400;
    position: relative;
  }
  .dm-favorite--cabinet {
    border-bottom: 1px solid #e5e5e5;
    padding: 0.85rem 0;
    margin: 0;
  }
  .dm-favorite--cabinet .dm-favorite__btn {
    margin: 0;
  }
  .dm-favorite--cabinet .dm-favorite__svg {
    margin-right: 4px;
  }
  .dm-favorite--cabinet .dm-favorite__title {
    color: #fff;
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
  }
  .dm-favorite--cabinet .dm-favorite__amount--2 {
    display: none;
  }
  .dm-favorite__btn {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    width: 13.125em;
    margin-right: 1.625em;
    margin-right: 10px;
    width: auto;
    align-items: center;
  }
  .dm-favorite__svg {
    display: block;
    height: auto;
    width: 1.25em;
    height: 1.25em;
    fill: #fff;
    margin-right: 0.625em;
    margin-right: 4px;
    width: 20px;
    height: 17px;
  }
  .dm-favorite__title {
    color: #0093d0;
    font-size: 0.875em;
    line-height: 1.4285714286em;
    font-weight: 700;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
  }
  .dm-favorite__amount--3:before {
    content: attr(data-text-empty);
    margin-right: 0.4em;
  }
}
.header__menu {
  flex: unset !important;
  border-bottom: none !important;
  border: 1px solid #e5e5e5;
}

.header__menu-wrapper {
  margin-top: 0 !important;
  top: 59px !important;
  right: -1px !important;
  border-radius: 10px !important;
  border-top-right-radius: 0 !important;
  border-top: none !important;
  box-sizing: border-box;
  width: auto;
  box-shadow: 5px 50px 50px rgba(0, 0, 0, 0.15);
}

.header__navlist {
  border: none !important;
  border-radius: 3px;
  border-top-right-radius: 0;
  padding: 0 20px !important;
}
@media screen and (max-width: 600px) {
  .header__navlist {
    padding: 0 !important;
    box-shadow: unset;
    border-radius: unset;
  }
}

.header__navlist-item {
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
}
.header__navlist-item:hover .header__navlist-item-arrow {
  visibility: visible;
  opacity: 1;
  transition: 0.3s;
}
@media screen and (max-width: 600px) {
  .header__navlist-item {
    border-bottom: 1px solid #e5e5e5;
  }
  .header__navlist-item:last-of-type {
    border-bottom: none;
  }
}

.header__navlist-item-arrow {
  background: url(https://cdn.coral.ru/content/cms/russia/burger-menu/arrow.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 8px;
  height: 13px;
  position: absolute;
  top: calc(50% - 6.5px);
  right: 0;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
}

.header__navlist-link {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  padding: 21px 0;
}
@media screen and (max-width: 600px) {
  .header__navlist-link {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    padding: 0.85rem 0;
  }
  .header__navlist-link::before {
    content: unset !important;
  }
}

.header__navlist-link_special {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration: underline;
  color: #989898;
  display: grid !important;
  align-items: center;
  grid-template-columns: 40px auto;
  -moz-column-gap: 10px;
       column-gap: 10px;
  width: 100%;
}
.header__navlist-link_special:hover .header__navlist-item-img {
  transition: 0.3s;
  background: url(https://cdn.coral.ru/content/cms/russia/burger-menu/info_hover.png);
}
.header__navlist-link_special:hover {
  color: #989898 !important;
  text-decoration: none;
}

.header__navlist-top-border {
  position: absolute;
  top: 0;
  left: 7px;
  height: 1px;
  width: calc(100% - 83px);
  background: #e5e5e5;
}

.header__navlist-item-img {
  margin: 0 10px 0 0;
  background: url(https://cdn.coral.ru/content/cms/russia/burger-menu/info.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;
  height: 40px;
  transition: 0.3s;
}
</style>`;
body.insertAdjacentHTML("beforeend", styles);

const topFakeSemiBorderLayout = `<span class="header__navlist-top-border"></span>`;
const infoImgLayout = `<div class="header__navlist-item-img"></div>`;
const arrowLayout = `<div class="header__navlist-item-arrow"></div>`;
const header = document.querySelector(".site-header");
const tabsContainer = header.querySelector(".container-tabs-main");
const burgerMenu = tabsContainer.querySelector(".container-menu");
const menuWrapper = burgerMenu.querySelector(".menuList");
const menuList = menuWrapper.querySelector("ul");
const menuListItems = menuList.querySelectorAll("li");
const mobileMenuWrapper = document.querySelector(".mainmenuwrapper");
const mobileMenuList = mobileMenuWrapper.querySelector("ul");
const mobileMenuItems = mobileMenuList.querySelectorAll("li");
let cloned;

function setNewStyles() {
	burgerMenu.classList.add("header__menu");
	burgerMenu.classList.remove("flex-fill");

	menuWrapper.classList.add("header__menu-wrapper");
	menuList.classList.add("header__navlist");
	mobileMenuList.classList.add("header__navlist");

	if (window.innerWidth > 600) {
		menuListItems.forEach((item) => {
			item.classList.add("header__navlist-item");

			if (item.firstElementChild.textContent === "Информация по турам, забронированным до 31 марта 2020 года") {
				item.classList.add("header__navlist-item_special");
				item.firstElementChild.classList.add("header__navlist-link_special");
				item.firstElementChild.insertAdjacentHTML("afterbegin", infoImgLayout);
				cloned = item.cloneNode(true);
				item.remove();
			}

			if (!item.classList.contains("header__navlist-item_special")) {
				item.insertAdjacentHTML("beforeend", arrowLayout);
			}
		});
	} else {
		mobileMenuItems.forEach((item) => {
			item.classList.add("header__navlist-item");
			item.firstElementChild.classList.add("header__navlist-link");
		});
	}

	menuList.append(cloned);

	const menuListLinks = menuList.querySelectorAll("a");

	menuListLinks.forEach((link) => {
		link.classList.add("header__navlist-link");
	});

	menuList.insertAdjacentHTML("afterbegin", topFakeSemiBorderLayout);
}

setNewStyles();
