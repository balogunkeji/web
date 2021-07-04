import { demo } from "./demo";

const contain = document.querySelector(".container");
const content = document.querySelector(".form-content");
const butYes = document.querySelector(".yes");
const butNo = document.querySelector(".no");
const formBtn = document.querySelector(".form-button");

export function getOrder() {
  (function () {
    butYes.addEventListener("click", (e) => {
      content.innerHTML =
        "<p>Place order to the Customer Care</p>" + "<a>07039518150</a>";
      e.preventDefault();
    });
  })();

  (function () {
    butNo.addEventListener("click", (e) => {
      content.innerHTML = `<p>Does your order include multiple pickup or drop off addresses?</p>`;
      formBtn.innerHTML = `
        <button class='btnY'>Yes</button> <button class='btnN'>No</button>
      `;

      content.appendChild(formBtn);
      e.preventDefault();
        demo();
    });
  })();



}

