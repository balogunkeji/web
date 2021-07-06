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
    <button id="bty">Yes</button>
    <button id="btN">No</button>
    `;
    content.appendChild(formBtn);
    console.log(pickup.value, dropoff.value, deliveryOption.value);
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
        <input  name='name' type='text' id='name' placeholder="Contact’s Full Name"/>
          <input  name='num' type='num' id='pic' placeholder="Pickup phone number"/>
          <textarea name='describe' type="text" id="text" placeholder="Kindly describe the content of your package"></textarea>
          <input  name='value' type='num' id='money' placeholder="Monetary value of your package"/>
          </div>
        <div class="dropoff">
        <p>Drop off contact details:</p>
        <input  name='pickup' type='text' id='drop' placeholder="Contact’s Full Name"/>
        <input  name='value' type='num' id='full' placeholder="Drop off phone number"/>
        </div>
        <div class="buts">
        <button class="btnup type="submit">Pickup</button>
        <button class="btnof" type="submit">Dropoff</button>
        <button class="none" type="submit">None of the above</button>
        </div>
      `;
      content.appendChild(proceedForm);
      e.preventDefault();
      proceedForm.addEventListener("submit", handleChange);
      none()
    });
  }

  function handleChange(e) {
    e.preventDefault();
    const para = document.createElement("p")
    const name = document.getElementById("name");
    const pic = document.getElementById("pic");
    const text = document.getElementById("text");
    const dro = document.getElementById("money");
    const drop = document.getElementById("drop");
    const full = document.getElementById("full");
    para.innerHTML =  name.value + " " + pic.value  + " " +text.value + " " +dro.value + " " +drop.value + " " +full.value
    content.appendChild(para);
    console.log(name.value, pic.value,text.value,dro.value, drop.value, full.value)
    // none()
  }

  function none(){
    const sub = document.querySelector(".none")
    sub.addEventListener("click",(e)=>{
      content.innerHTML = `
       
        <div>
        <label>Name</label>
        <input type="text"/>
        </div>
        <div>
        <label>Phone Number</label>
        <input type="num"/>
        </div>
        <button class="buttons">Submit</button>
       
      `
      e.preventDefault();
    })
  }
}
