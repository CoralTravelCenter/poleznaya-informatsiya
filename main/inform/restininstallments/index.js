const calculator = document.querySelector(".calculator");
const tabs = calculator.querySelectorAll(".calculator__tab");
const forms = calculator.querySelectorAll(".form");
const pageFooter = document.querySelector(".page-footer");
const backButton = pageFooter.querySelector("#back");

backButton.addEventListener("click", () => {
	history.go(-1);
});

tabs.forEach((tab) => {
	tab.addEventListener("click", switchTab);
});

forms.forEach((form) => {
	let percent;
	if (form.id === "halva") {
		percent = 0;
	}
	if (form.id === "sber") {
		percent = 25;
	}

	const inputs = form.querySelectorAll("input");

	inputs.forEach((input) => {
		input.addEventListener("click", () => {
			input.value = "";
		});
	});

	form.addEventListener("input", () => {
		credit(form, 1 + percent / 100);
	});
});

function switchTab() {
	tabs.forEach((tab) => (tab.classList.contains("calculator__tab_disabled") ? tab.classList.remove("calculator__tab_disabled") : tab.classList.add("calculator__tab_disabled")));
	forms.forEach((form) => (form.classList.contains("form_disabled") ? form.classList.remove("form_disabled") : form.classList.add("form_disabled")));
}

function credit(form, percent) {
	const price = form.querySelector("#tour-price");
	const duration = form.querySelector("#credit-duration");
	const result = form.querySelector(".form__result");
	let firstPay;
	if (form.id === "sber") {
		firstPay = Number(form.querySelector("#first-pay").value);
	}
	const pureString = deleteSpaces(price.value);
	const priceToNum = Number(pureString);

	if (priceToNum !== NaN || priceToNum !== undefined || priceToNum !== null || priceToNum !== String) {
		if (form.id === "halva") {
			result.textContent = `от ${Math.round((priceToNum / parseFloat(duration.value)) * percent).toLocaleString("ru")} ₽`;
		}
		if (form.id === "sber") {
			result.textContent = `от ${Math.round(((priceToNum - (priceToNum * firstPay) / 100) / parseFloat(duration.value)) * percent).toLocaleString("ru")} ₽`;
		}
		price.value = priceToNum.toLocaleString("ru");
	} else {
		result.textContent = `0 ₽`;
		price.value = "";
	}
}

function deleteSpaces(string) {
	const arr = string.split("");
	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (Number(arr[i]) === 0) {
			if (parseFloat(arr[i]) === 0) {
				newArr.push(arr[i]);
			}
			continue;
		}
		newArr.push(arr[i]);
	}
	return newArr.join("");
}
