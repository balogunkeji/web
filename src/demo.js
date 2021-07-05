import { delveryPriceCalculator } from "./calculatePrice";

const content = document.querySelector(".form-content");
const formBtn = document.querySelector(".form-button");
const addressForm = document.querySelector("#form");

export function demo() {
  (function () {
    const btnY = document.querySelector(".btnY");
    btnY.addEventListener("click", (e) => {
      content.innerHTML = `<p>Send an Email to</p>`;
      formBtn.innerHTML = `<a href="info@dotexpress.app">info@dotexpress.app</a>`;
      content.appendChild(formBtn);
      e.preventDefault();
    });
  })();

  (function () {
    const btnN = document.querySelector(".btnN");
    btnN.addEventListener("click", (e) => {
      addressForm.innerHTML = `
          <div class='label'>
          <label class='input-label'>Pickup Address</label>
          <input  name='pickup' type='text' id='pickup'/>
          </div>
          <div class='label'>
          <label class='input-label'>Dropoff Address</label>
          <input type='text' id='drop'/>
          </div>
          <div class='delivery'>
          <p>How urgent is your delivery (delivery type)?</p>
          <select id='deliveryOption'>
          <option value='express'>Express</option>
          <option value='regular'>Regular</option>
          </select>
          <button type="submit" >Submit</button>
        </div>
        `;
      e.preventDefault();
      content.appendChild(addressForm);
      addressForm.addEventListener("submit", handleSubmit);
    });
  })();

  function handleSubmit(e) {
    e.preventDefault();

    const deliveryOption = document.querySelector("#deliveryOption");
    const pickup = document.querySelector("#pickup");
    const dropoff = document.querySelector("#drop");
    content.innerHTML = delveryPriceCalculator(
      pickup.value,
      dropoff.value,
      deliveryOption.value
    );
    formBtn.innerHTML = `<p>Happy to proceed?</P>
    <button>Yes</button>
    <button>No</button>
    `;
    content.appendChild(formBtn);
    console.log(pickup.value, dropoff.value, deliveryOption.value);
  }
}
