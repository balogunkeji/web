// import axios from "axios";

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
          <input  name='pickUpAddress' type='text' id='pickUpAddress' autocomplete/>
          </div>
          <div class='label'>
          <label class='input-label'>Dropoff Address</label>
          <input type='text' id='dropOffAddress' name=" dropOffAddress" autocomplete/>
          </div>
          <div class='delivery'>
          <p>How urgent is your delivery (delivery type)?</p>
          <select id='deliveryMethod' name="deliveryMethod">
          <option value='express'>Express</option>
          <option value='regular'>Regular</option>
          </select>
          <button type="submit" >Submit</button>
        </div>
        `;
      e.preventDefault();
      content.appendChild(addressForm);
      formBtn.style.display = "none";
      content.removeChild(content.childNodes[0]);
      addressForm.addEventListener("submit", handleSubmit);
    });
  })();

  function handleSubmit(e) {
    
    const deliveryMethod = document.querySelector("#deliveryMethod");
    const pickUpAddress = document.querySelector("#pickUpAddress");
    const dropOffAddress = document.querySelector("#dropOffAddress");

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGI0Y2M3MmVlZGMxYzJkZGRhYmI5NzEiLCJmaXJzdE5hbWUiOiJhamFndW5ubmEiLCJsYXN0TmFtZSI6Im1hcnVmZGVlbiIsImVtYWlsIjoibWFydWZhamFndW5uYUBnbWFpbC5jb20iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2MjMzMzI2ODMsImV4cCI6MTYyMzMzNjI4M30.2aw56Ns2U_YxwPjTLQSBLi5Z0CI4yK9Qx_WjRG6IAv0"
    );
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("pickUpAddress", pickUpAddress.value);
    urlencoded.append("dropOffAddress", dropOffAddress.value);
    urlencoded.append("deliveryMethod", deliveryMethod.value);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("https://79baa11cd583.ngrok.io/api/deliveryprice", requestOptions)
      .then((response) => response.text())
      .then((text) => {
        content.innerHTML= `<p>${text}</p>`
        console.log(text)
      })
      .catch((error) => console.log("error", error));

    e.preventDefault();
    formBtn.innerHTML = `<p>Happy to proceed?</P>
    <button id="bty">Yes</button>
    <button id="btN">No</button>
    `;
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
        <input  name='fullName' type='text' id='fullName' placeholder="Contact’s Full Name"/>
          <input  name='pickUpPhoneNumber' type='num' id='pickUpPhoneNumber' placeholder="Pickup phone number"/>
          <textarea name='description' type="text" id="description" placeholder="Kindly describe your package"></textarea>
          <input  name='monetary' type='num' id='monetary' placeholder="Monetary value of your package"/>
          </div>
        <div class="dropoff">
        <p>Drop off contact details:</p>
        <input  name=' recipientName' type='text' id='recipientName' placeholder="Contact’s Full Name"/>
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
      content.removeChild(content.childNodes[0]);
      e.preventDefault();
      proceedForm.addEventListener("submit", handleChange);
      none();
    });
  }

  function handleChange(e) {
    e.preventDefault();
    const para = document.createElement("p");
    const fullName = document.getElementById("fullName");
    const pickUpPhoneNumber = document.getElementById("picUpPhoneNumber");
    const description = document.getElementById("description");
    const monetary = document.getElementById("monetary");
    const dropOffPhoneNumber = document.getElementById("dropOffPhoneNumber");
    const recipientName = document.getElementById("recipientName");
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGI0Y2M3MmVlZGMxYzJkZGRhYmI5NzEiLCJmaXJzdE5hbWUiOiJhamFndW5ubmEiLCJsYXN0TmFtZSI6Im1hcnVmZGVlbiIsImVtYWlsIjoibWFydWZhamFndW5uYUBnbWFpbC5jb20iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2MjMzMzI2ODMsImV4cCI6MTYyMzMzNjI4M30.2aw56Ns2U_YxwPjTLQSBLi5Z0CI4yK9Qx_WjRG6IAv0"
    );
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("fullName", fullName.value);
    urlencoded.append("pickUpPhoneNumber", pickUpPhoneNumber.value);
    urlencoded.append("description", description.value);
    urlencoded.append("monetary", monetary.value);
    urlencoded.append("dropOffPhoneNumber", dropOffPhoneNumber.value);
    urlencoded.append("recipient", recipient.value);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("https://79baa11cd583.ngrok.io/api/order", requestOptions)
      .then((response) => response.text())
      .then((text) => {
        content.innerHTML= `<p>${text}</p>`
        console.log(text)
      })
      .catch((error) => console.log("error", error));
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
