document.addEventListener(
  "DOMContentLoaded",
  function () {
    var days = document.querySelector(".days span");
    var hour = document.querySelector(".hour");
    var min = document.querySelector(".min");
    var second = document.querySelector(".second");

    var startDate = new Date("5/16/2022");
    var now = new Date();
    var difference = now.getTime() - startDate.getTime();
    days.innerText = (
      Math.ceil(difference / (1000 * 3600 * 24)) + 103
    ).toString();
    // days.innerText = Math.floor((startDate - new Date()) / 86400000) + 104;
    console.log(startDate);
    console.log(new Date());
    countTime();

    function countTime() {
      let today = new Date();
      let ms = (today - startDate) % 86400000;
      hour.innerText = Math.floor(ms / 3600000);
      min.innerText = Math.floor((ms % 3600000) / 60000);
      second.innerText = Math.floor(((ms % 3600000) % 60000) / 1000);
    }

    setInterval(countTime, 1000);
  },
  false
);
