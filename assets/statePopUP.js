console.log("running")

// indeitfies attse and creates pop up
const stateBasedPopUp = async () => {
  let url = "https://ipinfo.io/json?token=39dd58180d085e";
  let response = await fetch(url);
  data = await response.json();
  let section = document.createElement("section");
  section.id = "module";
  section.innerHTML = `  <b id="exit">X</b>
    <img id="statePopUp" alt="state image" src="https://store-gkik02snuw.mybigcommerce.com/content/cevimed/images/states/POP-UP-CEVI-MED-SHIPPING-STATES-${data.region.toUpperCase()}.jpg" />
  <button id="statePopUpBtn"><a href="tel:833-238-4633" tabindex="2">Call 833-238-4633 Today!</a></button> `;
  if(data.country !== "US" || data.region === "Hawaii" || data.region === "Alaska") return
  document.getElementById("stateTab").innerText = ` Shipping in ${data.city} ${data.region} ? `
  document.getElementById("moduleContainer").append(section);
};
stateBasedPopUp();

// shows pop up when scroll to half screen with scroll event function
let scrollEvent = ()=>{
  if (window.scrollY > 850) {
    document.getElementById("moduleContainer").classList.toggle("hidden")
    window.removeEventListener("scroll", scrollEvent, true);
  } else {
    console.log(window.scrollY);
  }
}
//removes scroll event
window.addEventListener("scroll", scrollEvent, true);

// hides pop up when x or outside is clicked
document.addEventListener("click", ({target})=>{
  if(target.id === "moduleContainer" || target.id === "exit")
  document.querySelector("#moduleContainer").classList.toggle("hidden")
});

//hides and shows pop up when tab is clicked 
document.querySelector("#stateTab").addEventListener("click", ()=>{
  document.querySelector("#moduleContainer").classList.toggle("hidden")
});
