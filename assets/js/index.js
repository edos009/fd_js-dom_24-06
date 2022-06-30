"use strict";

const messages = [];

const form = document.getElementById("form");
const sms = document.querySelector(".sms");
let collectionSms;

form.addEventListener("submit", checkArray);

function checkArray(e) {
  e.preventDefault();
  let textValue = e.target.text.value.trim();

  if (messages.includes(textValue) || textValue === "") {
    e.target.reset();
  } else {
    messages.push(textValue);

    sms.append(
      createElement(
        "p",
        { events: { click: setBackgroundColorElement } },
        document.createTextNode(textValue)
      )
    );

    e.target.reset();
    // console.log(messages);
  }
}

function createElement(tag, { events = {} }, ...children) {
  const elem = document.createElement(tag);
  elem.append(...children);

  for (const [typeEvent, handleEvent] of Object.entries(events)) {
    elem.addEventListener(typeEvent, handleEvent);
  }

  return elem;
}

function setBackgroundColorElement(e) {
  for (const elem of document.querySelectorAll(".add-color-text")) {
    elem.classList.remove("add-color-text");
  }

  e.target.classList.add("add-color-text");
}
