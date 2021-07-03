

const content = document.querySelector(".form-content");
const formBtn = document.querySelector(".form-button");

export function demo() {
    (function () {
      const btnY = document.querySelector(".btnY");
      btnY.addEventListener("click", (e) => {
        content.innerHTML = `<p>Send an Email</p>`;
        formBtn.innerHTML = `<form> <input type='email' name='email' required='' id='email' placeholder='Email'/> <button class='button' >Submit</button> </form>`;
        content.appendChild(formBtn);
        e.preventDefault();
      });
    })();

    (function () {
      const btnN = document.querySelector(".btnN");
      btnN.addEventListener("click", (e) => {
        content.innerHTML = `
        <form>
          <div class='label'>
          <label class='input-label'>Pickup Address</label>
          <input type='text' id='input-field'/>
          </div>
          <div class='label'>
          <label class='input-label'>Pickup Address</label>
          <input type='text' id='input-field'/>
          </div>
        </form>
        <div class='delivery'>
          <p>How urgent is your delivery (delivery type)?</p>
          <button class='express'>Express</button>
          <button class='regular'>Regular</button>
        </div>
        `;
        e.preventDefault();
        but();
      });
    })();

    (function (){
      const express = document.querySelector(".express");
      express.addEventListener("click",(e) =>{

      })

      const regular = document.querySelector(".regular")
      regular.addEventListener()

    })();

    // function but() {
    //   const express = document.querySelector(".express");
    //   express.addEventListener("click", (e) => {
    //     const put = document.getElementById('input-field').value
    //     formBtn.innerHTML = `<p>${put}</p>
    //     <button class="pY">Yes</button>
    //       <button class="pN">No</button>
    //     `;
    //     content.appendChild(formBtn);
    //     console.log(formBtn)
    //     e.preventDefault();
    //   });
    // }

    //  document.querySelector('.express').addEventListener("click",addUser)
    //  document.querySelector('.regular').addEventListener("click",addUser)

    // function addUser(e){
    //   e.preventDefault()
    //   let input = document.getElementById('input-field').value;
    //   console.log(input)
    //   fetch('file.json',{
    //     method: 'POST',
    //     body: JSON.stringify({input:address[0], input:price[1]})
    //   })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    // }

}