"use strict";

const cardsContainer = document.getElementById("cards-container");

const HTMLCollectionActors = actors
  .filter((actor) => actor.name || actor.birthdate)
  .map((actor) => createActorCard(actor));

function createActorCard(actor) {
  const { id, name, photo, birthdate } = actor;

  const cardPhotoWrapper = createElement(
    "div",
    {
      classNames: ["card-photo-wrapper"],
      atributes: {
        id: `photo-wrapper-${id}`,
      },
    },
    createInitials(actor)
  );

  createElement("img", {
    classNames: ["card-photo"],
    atributes: {
      src: photo,
      alt: name || "No Name",
      "data-wrapper-id": `photo-wrapper-${id}`,
    },
    events: { error: handlerError, load: handlerLoadPhoto },
  }, null);

  const cardName = createElement(
    "h2",
    { classNames: ["card-name"] },
    document.createTextNode(name || "No Name")
  );

  const cardInfo = createElement(
    "p",
    { classNames: ["card-info"] },
    document.createTextNode(birthdate)
  );

  const cardContainer = createElement(
    "article",
    {
      classNames: ["card-container"],
    },
    cardPhotoWrapper,
    cardName,
    cardInfo
  );

  const HTMLCard = createElement(
    "li",
    { classNames: ["card-wrapper"] },
    cardContainer
  );

  return HTMLCard;
}

cardsContainer.append(...HTMLCollectionActors);

//Creaers

function createElement(
  tag,
  { classNames = [], atributes = {}, events = {} },
  ...children
) {
  const element = document.createElement(tag);
  if (classNames.length) {
    element.classList.add(...classNames);
  }
  for (const [nameAtr, valueAtr] of Object.entries(atributes)) {
    element.setAttribute(nameAtr, valueAtr);
  }

  for (const [typeEvent, handlerEvent] of Object.entries(events)) {
    element.addEventListener(typeEvent, handlerEvent);
  }

  element.append(...children);
  return element;
}

function createInitials({ name }) {
  const cardInitials = document.createElement("div");
  cardInitials.classList.add("card-initials");
  cardInitials.style.backgroundColor = stringToColour(name || "No Name");
  cardInitials.append(
    document.createTextNode(getInitialsName(name || "No Name"))
  );
  return cardInitials;
}

//Handles
function handlerError({ target }) {
  target.remove();
}

function handlerLoadPhoto({ target }) {
  document.getElementById(target.dataset.wrapperId).append(target);
}

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
