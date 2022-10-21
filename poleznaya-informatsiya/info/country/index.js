const page = document.querySelector(".page");
const originUrl = window.location.origin;
const requestUrl = `${originUrl}/v1/destination/countriesandhotels`;
const dataPlace = page.querySelector("#countries-data");
const pageFooter = page.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");
const widgetContainer = page.parentNode;

const initialData = (url) => {
	fetch(url, {
		method: "GET",
	})
		.then(checkResponse)
		.then((res) => {
			dataPlace.insertAdjacentHTML("afterbegin", res);
            debugger
			getHotels();
		})

		.catch((err) => {
			console.error(err);
		});
};

const checkResponse = (res) => {
	if (res.status === 200) {
		return res.text();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
};

initialData(requestUrl);

backButton.addEventListener("click", () => {
	history.go(-1);
});

widgetContainer.classList.remove("widgetcontainer");
widgetContainer.classList.remove("oti-content-typography");

function getHotels() {
	const layoutCountries = page.querySelectorAll(".card_with-button");
	const popupCountries = dataPlace.querySelector(".list").querySelectorAll("li");

	popupCountries.forEach((pCountry) => {
		const pCountryUrl = pCountry.querySelector("a").href;
		const pCountryHotels = pCountry.querySelector("em").textContent;
		layoutCountries.forEach((lCountry) => {
			const lCountryUrl = lCountry.querySelector("a").href;
			const lCountryHotels = lCountry.querySelector(".card__description").textContent;

			if (lCountryUrl === pCountryUrl) {
				lCountryHotels = pCountryHotels;
			}
		});
	});
}
