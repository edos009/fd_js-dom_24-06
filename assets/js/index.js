"use strict";

function imageLoad(pathSrc) {
  const image = new Image();
  image.src = pathSrc;
  return new Promise((resolve, reject) => {
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("path invalid")));
  });
}

imageLoad(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxJjDanT_SIiRT38UFpOvyGeGZrZgtEGK0A&usqp=CAU"
)
  .then((data) => document.body.append(data))
  .catch((error) => document.body.append(error));
