import { delveryPriceCalculator } from "./calculatePrice";
const content = document.querySelector(".form-content");
const formBtn = document.querySelector(".form-button");
const addressForm = document.querySelector("#form");
const proceedForm = document.querySelector("#proceed");

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
          <input  name='pickUpAddress' type='text' id='pickUpAddress'/>
          </div>
          <div class='label'>
          <label class='input-label'>Dropoff Address</label>
          <input type='text' id='drop' name=" dropOffAddress"/>
          </div>
          <div class='delivery'>
          <p>How urgent is your delivery (delivery type)?</p>
          <select id='deliveryOption' name="deliveryMethod">
          <option value='express'>Express</option>
          <option value='regular'>Regular</option>
          </select>
          <button type="submit" >Submit</button>
        </div>
        `;
      e.preventDefault();
      content.appendChild(addressForm);
      formBtn.style.display = "none";
      content.removeChild(content.childNodes[0])
      addressForm.addEventListener("submit", handleSubmit);
    });
  })();

  function handleSubmit(e) {
    e.preventDefault();
    const deliveryOption = document.querySelector("#deliveryOption");
    const pickUpAddress = document.querySelector("#pickUpAddress");
    const dropoff = document.querySelector("#drop");
    content.innerHTML = delveryPriceCalculator(
      pickUpAddress.value,
      dropoff.value,
      deliveryOption.value
    );
    formBtn.innerHTML = `<p>Happy to proceed?</P>
    <button id="bty">Yes</button>
    <button id="btN">No</button>
    `;
    content.appendChild(formBtn);
    formBtn.style.display = "block";
    console.log(pickUpAddress.value, dropoff.value, deliveryOption.value);
    proceedBtn();
    cancelBtn();
  }

  function cancelBtn() {
    const btN = document.getElementById("btN");
    btN.addEventListener("click", (e) => {
      content.innerHTML = `<p> Order Cancelled</p>`;
      e.preventDefault();
    });
  }

  function proceedBtn() {
    const bty = document.getElementById("bty");
    bty.addEventListener("click", (e) => {
      proceedForm.innerHTML = `
        <div class="pickup">
        <p>Pick-up contact details:</p>
        <input  name='fullName' type='text' id='name' placeholder="Contact’s Full Name"/>
          <input  name='pickUpPhoneNumber' type='num' id='pic' placeholder="Pickup phone number"/>
          <textarea name='description' type="text" id="text" placeholder="Kindly describe your package"></textarea>
          <input  name='' type='num' id='money' placeholder="Monetary value of your package"/>
          </div>
        <div class="dropoff">
        <p>Drop off contact details:</p>
        <input  name=' recipientName' type='text' id='drop' placeholder="Contact’s Full Name"/>
        <input  name='dropOffPhoneNumber' type='num' id='full' placeholder="Drop off phone number"/>
        </div>
        <div class="buts">
        <button class="btnup type="submit">Pickup</button>
        <button class="btnof" type="submit">Dropoff</button>
        <button class="none" type="submit">None of the above</button>
        </div>
      `;
      content.appendChild(proceedForm);
      formBtn.style.display = "none";
      content.removeChild(content.childNodes[0])
      e.preventDefault();
      proceedForm.addEventListener("submit", handleChange);
      none();
    });
  }

  function handleChange(e) {
    e.preventDefault();
    const para = document.createElement("p");
    const name = document.getElementById("name");
    const pic = document.getElementById("pic");
    const text = document.getElementById("text");
    const dro = document.getElementById("money");
    const drop = document.getElementById("drop");
    const full = document.getElementById("full");
    para.innerHTML =
      name.value +
      " " +
      pic.value +
      " " +
      text.value +
      " " +
      dro.value +
      " " +
      drop.value +
      " " +
      full.value;
    content.appendChild(para);
    proceedForm.style.display = "none";
    // none()
  }

  function none() {
    const sub = document.querySelector(".none");
    sub.addEventListener("click", (e) => {
      content.innerHTML = `
       
        <div>
        <label>Enter FullName</label>
        <input type="text"/>
        </div>
        <div>
        <label>Phone Number</label>
        <input type="num"/>
        </div>
        <button class="buttons">Submit</button>
       
      `;
      e.preventDefault();
    });
  }
}
