"use strict";

const cardsContainer = document.getElementById("cards-container");

const HTMLCollectionActors = actors
  .filter((actor) => actor.name || actor.birthdate)
  .map((actor) => createActorCard(actor));

function createActorCard({ id, name, photo, birthdate }) {
  const fixName = name || "No Name";
  const HTMLCard = document.createElement("li");
  HTMLCard.classList.add("card-wrapper");

  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card-container");

  const cardPhotoWrapper = document.createElement("div");
  cardPhotoWrapper.classList.add("card-photo-wrapper");
  cardPhotoWrapper.setAttribute("id", `photo-wrapper-${id}`);

  const cardInitials = document.createElement("div");
  cardInitials.classList.add("card-initials");
  cardInitials.style.backgroundColor = stringToColour(fixName);
  cardInitials.append(document.createTextNode(getInitialsName(fixName)));

  cardPhotoWrapper.append(cardInitials);

  const cardPhoto = document.createElement("img");
  cardPhoto.classList.add("card-photo");
  cardPhoto.setAttribute("src", photo);
  cardPhoto.setAttribute("alt", fixName);
  cardPhoto.dataset.wrapperId = `photo-wrapper-${id}`;
  cardPhoto.addEventListener("error", handlerError);
  cardPhoto.addEventListener("load", handlerLoadPhoto);

  const cardName = document.createElement("h2");
  cardName.classList.add("card-name");
  cardName.append(document.createTextNode(fixName));

  const cardInfo = document.createElement("p");
  cardInfo.classList.add("card-info");
  cardInfo.append(document.createTextNode(birthdate));

  cardContainer.append(cardPhotoWrapper, cardName, cardInfo);
  HTMLCard.append(cardContainer);
  return HTMLCard;
}

cardsContainer.append(...HTMLCollectionActors);

//Handles
function handlerError({ target }) {
  target.remove();
}

function handlerLoadPhoto({target}) {
  document.getElementById(target.dataset.wrapperId).append(target);
};

//Tooltips
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).slice(-2);
  }
  return colour;
}

function getInitialsName(str) {
  return str
    .split(" ")
    .map((elem) => elem.at(0).toUpperCase())
    .join("");
}
