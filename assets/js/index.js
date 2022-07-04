"use strict";

const messages = [];

const form = document.getElementById("form");
const sms = document.querySelector(".sms");
let collectionSms;

form.addEventListener("submit", checkArray);

function checkArray(e) {
  e.preventDefault();
  const reg = /^[A-Z][a-z]{2,12} [A-Z]\.$/;
  let textValue = e.target.text.value.trim();

  if (messages.includes(textValue) || textValue === "") {
    e.target.reset();
    return;
  } else {
    if (reg.test(textValue)) {
      messages.push(textValue);

      const pElem = createElement(
        "p",
        { events: { click: setBackgroundColorElement } },
        document.createTextNode(textValue)
      );

      const buttonElem = createElement(
        "button",
        {
          events: { click: handleDeleteSms.bind(pElem) },
          attributes: { "data-sms-value": textValue },
        },
        document.createTextNode("X")
      );

      pElem.append(buttonElem);

      sms.append(pElem);
    }
    e.target.reset();
  }
}

function createElement(
  tag,
  { className = [], attributes = {}, events = {} },
  ...children
) {
  const elem = document.createElement(tag);
  elem.append(...children);

  for (const [typeEvent, handleEvent] of Object.entries(events)) {
    elem.addEventListener(typeEvent, handleEvent);
  }

  for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
    elem.setAttribute(nameAttr, valueAttr);
  }

  return elem;
}

function setBackgroundColorElement(e) {
  for (const elem of document.querySelectorAll(".add-color-text")) {
    elem.classList.remove("add-color-text");
  }

  e.target.classList.add("add-color-text");
}

function handleDeleteSms({target}) {
  const valueSms = target.dataset.smsValue;
  this.remove();

  messages.splice(messages.indexOf(valueSms), 1);
  console.log(messages);
}
