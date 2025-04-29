// simplest code on the planet

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const acceptedKeys = ["1", "2"];

    if (acceptedKeys.includes(key)) {
      switch (key) {
        case "1":
          window.location.href = "about.html";
          break;
        case "2":
          window.location.href = "blog.html";
          break;
      }
    }
  });
});
