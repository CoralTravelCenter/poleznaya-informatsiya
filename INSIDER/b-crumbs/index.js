const styles = `
<style>
.notcritical {
    padding-top: 0 !important;
  }
  
  .b-crumb_new-style a {
    color: #4a4a4a !important;
  }
  .b-crumb_new-style + .b-crumb_new-style::before {
    color: #4a4a4a !important;
  }
  .b-crumb_new-style.active {
    color: #4a4a4a !important;
  }
  .b-crumb_new-style.active:after {
    background-color: #4a4a4a !important;
  }
</style>`;
const head = document.querySelector("head");

head.insertAdjacentHTML("beforeend", styles);

const crumbsBg = document.querySelector(".background");
const bCrumbs = document.querySelector(".breadcrumb").querySelectorAll(".breadcrumb-item");

crumbsBg.remove();
bCrumbs.forEach((crumb) => {
	crumb.classList.add("b-crumb_new-style");
});
