var PopUpObject = {
  freeShipping1: {
    img: "./imgs/img.svg",
    smallText:
      "Purchase over <strong>150$</strong> Replacement parts & Recieve",
    bigText: "Free Shipping",
  },
  freeShipping2: {
    img: "./imgs/img.svg",
    text1: ["Reduced shipping Rates Available for ", "black"],
    text2: ["Hospital Beds | procedure Chairs | Stretchers", "red"],
    text3: ["Reduced shipping Rates Available for ", "black"],
    p1: ["Hospital Beds | procedure Chairs | Stretchers", "red"],
    btn: ["Shop Now", "white", "red"],
  },
  reduceShippingStates: {
    img: "./imgs/img.svg",
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

console.log(
  "connected",
  PopUpObject["reduceShippingStates"]["bigText"][0],
  PopUpObject["reduceShippingStates"]["bigText"][1]
);

const stateBasedPopUp = async () => {
  let url = "https://ipinfo.io/json?token=39dd58180d085e";
  let response = await fetch(url);
  let data = await response.json()
  console.log(data)
  let aside = document.createElement("aside");
  aside.id = "imgContainer";
  aside.innerHTML = `
        <img src="./assets/imgs/illinois.jpg" />
        <span class="imgText">Shipping In Illinois ?</span>
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

stateBasedPopUp();
