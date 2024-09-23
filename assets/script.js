var images = {
  promos: {
    edan: "5% off",
  },
};
var PopUpObject = {
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

var formObject = {
  offers: {
    title: "Make your Offer & We Call You!",
    subTitle: "",
    fields: ["make your offer", "First Name", "Email", "Phone Number"],
    buttonTxt: "Send",
    img: "./imgs/img.svg",
  },
  personalized: {
    title: "Do you want personalized",
    subTitle: "Call Us At 833-238-4633",
    fields: ["First Name", "Email", "Phone Number"],
    buttonTxt: "Send",
    img: "./imgs/img.svg",
  },
};

const stateBasedPopUp = async () => {
  let url = "https://ipinfo.io/json?token=39dd58180d085e";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let aside = document.createElement("aside");
  aside.id = "imgContainer";
  aside.innerHTML = `
        <img src="./assets/imgs/${data.region}.jpg" />
        <span class="imgText">Shipping In <br> ${data.city}, ${data.region}?</span>
        <div class="infoBox">
            <span class="bigText">
            ${PopUpObject["reduceShippingStates"]["bigText"][0]}
            </span>
            <span class="smallText">
            ${PopUpObject["reduceShippingStates"]["smallText"][0]}
            </span>
            <span>
            <button class="btn">${PopUpObject["reduceShippingStates"]["btn"][0]}</button>
            </span>
        </div>
    `;
  document.getElementById("module").append(aside);
};

// provides fields and webhook
const formBasedPopUp = {
  "Contact Us": {
    webhook: "https://",
    inputFields: [
      "First Name",
      "Last Name",
      "Email",
      "Order Number",
      "Company Name",
      "RMA Number",
    ],
    textArea: ["Comments"],
    buttonText: "Contact Us",
  },
  "Purchase Order": {
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
  },
  "Make an Offer": {
    webhook: "https://",
    fields: ["Make your Offer", "First Name", "Email", "Phone Number"],
    buttonText: "Send",
  },
  "Sell to Us": {
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
  },
  "Replacement Part": {
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
  },
  "Price Match": {
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
  },
  "Color Chart": {
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
  },
};

const promoBasedPopUp = {};

stateBasedPopUp();
