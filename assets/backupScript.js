// var images = {
//   promos: {
//     edan: "5% off","imgd/5%/jpg ",
//   },
// };
const PopUpObject = {
    freeShipping1: {
      smallText:
        "Purchase over <strong>150$</strong> Replacement parts & Recieve",
      bigText: "Free Shipping",
    },
    freeShipping2: {
      text1: ["Reduced shipping Rates Available for ", "black"],
      text2: ["Hospital Beds | procedure Chairs | Stretchers", "red"],
      text3: ["Reduced shipping Rates Available for ", "black"],
      p1: ["Hospital Beds | procedure Chairs | Stretchers", "red"],
      btn: ["Shop Now", "white", "red"],
    },
    reduceShippingStates: {
      imgText: ["Shopping in ", "White"],
      bigText: ["Reduced shipping Rates Available", "black"],
      smallText: ["Hospital Beds | procedure Chairs | Stretchers", "red"],
      btn: ["Call 833-238-4633 Today!", "white", "red"],
    },
  };
  
  const formObj = {
    "Contact Us": {
      title : "",
      webhook: "https://",
      fields: [
        "First Name",
        "Last Name",
        "Email",
        "Order Number",
        "Company Name",
        "RMA Number",
      ],
      textArea: ["Comments"],
      buttonText: "Contact Us",
      img: "./imgs/offer.jpg",
    },
    "Purchase Order": {
      title : "",
      webhook: "https://",
      fields: [
        "Name",
        "Address",
        "Email",
        "Address Line 2",
        "City",
        "State",
        "Postal / Zip Code",
        "Country",
        "Phone Number",
        "Email",
        "Business Name",
      ],
      textArea: ["Comments"],
      buttonText: "Submit",
      img: "./imgs/offer.jpg",
    },
    "Sell to Us": {
      title : "",
      webhook: "https://",
      fields: [
        "First Name",
        "Last Name",
        "Phone Number",
        "Email",
        "Order Number",
        "Company Name",
        "Comments",
      ],
      textArea: ["Comments / Questions"],
      buttonText: "Submit",
      img: "./imgs/offer.jpg",
    },
    "Replacement Part": {
      title : "",
      webhook: "https://",
      fields: [
        "Name of Product",
        "OEM Part Number",
        "First Name",
        "Last Name",
        "Phone Number",
        "Comments / Question",
        "Email",
      ],
      textArea: ["Comments / Questions"],
      buttonText: "Submit",
      img: "./imgs/offer.jpg",
    },
    "Price Match": {
      title : "",
      webhook: "https://",
      fields: [
        "First Name",
        "Last Name",
        "Phone Number",
        "Email",
        "Product",
        "Brand",
        "Model Number",
        "Color",
      ],
      textArea: ["Comments / Questions"],
      buttonText: "Submit",
      img: "./imgs/offer.jpg",
    },
    "Color Chart": {
      title : "",
      webhook: "https://",
      fields: [
        "Name",
        "Address",
        "Address Line 2",
        "City",
        "State",
        "Postal / Zip Code",
        "Country",
        "Phone Number",
        "Email",
        "Business Name",
      ],
      textArea: ["Comments / Questions"],
      buttonText: "Submit",
      img: "./imgs/offer.jpg",
    },
    "Make an Offer": {
      title: "Make your Offer & We Call You!",
      webhook:
        "https://hooks.airtable.com/workflows/v1/genericWebhook/appEjZzbuEeVfNfPU/wflRQ9Ppx2DctwV16/wtrbKwd6loarfR9ld",
      buttonText: "Send",
      fields: ["make your offer", "First Name", "Email", "Phone Number"],
      img: "./imgs/offer.jpg",
    },
    "Personalized": {
      title: "Do you want personalized",
      webhook:
        "https://hooks.airtable.com/workflows/v1/genericWebhook/appEjZzbuEeVfNfPU/wflRQ9Ppx2DctwV16/wtrbKwd6loarfR9ld",
      fields: ["First Name", "Email", "Phone Number"],
      subTitle: "Call Us At 833-238-4633",
      buttonText: "Send",
      img: "./imgs/personalized.jpg",
    },
  };
  
  const formBasedPopUp = (formName) => {
    console.log(formName);
    let aside = document.createElement("aside");
    aside.classList.add("formContainer");
    aside.innerHTML = `
          <img src="./assets/imgs/illinois.jpg" />
          <h4 class="formTitle">${formName}</h4>
          <form class="form hidden">
             ${formObj[formName]["fields"]
               .map((field) => {
                 return `
                 <div class="fields">
                 <label for=${field} >${field}</label>
                 <input name=${field} placeholder=${field}/>
                 </div>
                 `;
               })
               .join("")}
              <button class="btn">${formObj[formName]["buttonText"]}</button>
          </form>
      `;
    aside
      .querySelector("h4.formTitle")
      .addEventListener("click", ({ target }) => {
        console.log(aside.querySelector("form"), target.nextSibling);
        aside.querySelector("form").classList.toggle("hidden");
      });
    document.getElementById("module").append(aside);
  };
  
  const toggleForms = (form) => {
    form.classList.toggle("hidden");
    form.querySelector("")
  };
  
  const stateBasedPopUp = async () => {
    let url = "https://ipinfo.io/json?token=39dd58180d085e";
    let response = await fetch(url);
    data = await response.json();
    console.log(data);
    let aside = document.createElement("aside");
    aside.id = "imgContainer";
    aside.innerHTML = `
    <img id="" alt="${data}" src="https://store-gkik02snuw.mybigcommerce.com/content/cevimed/images/imgs/POP-UP-CEVI-MED-SHIPPING-STATES-${data.region.toUpperCase()}.jpg" />
               <button class="btn">${
                 PopUpObject["reduceShippingStates"]["btn"][0]
               }</button>
    `;
    document.getElementById("module").append(aside);
  };
  
  
  // formBasedPopUp("Contact Us");
  // formBasedPopUp("Purchase Order");
  // formBasedPopUp("Sell to Us");
  // formBasedPopUp("Replacement Part");
  // formBasedPopUp("Price Match");
  // formBasedPopUp("Color Chart");
  // formBasedPopUp("Color Chart");
  // formBasedPopUp("Make an Offer");
  stateBasedPopUp();
  
  // provides fields and webhook
  
  // instead of splitting code into different pop ups, all forms and norifications will be handled on one page as a side bar that show all corresponding pop up , this should alow us to hide and show information at a clikc of a bu
  
  