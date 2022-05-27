const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotation) => {
  element.style.setProperty("--rotation", rotation * 360);
};

const setClock = () => {
  const now = new Date();
  const seconds = now.getSeconds() / 60;
  const minutes = (seconds + now.getMinutes()) / 60;
  const hours = (minutes + now.getHours()) / 12;

  setRotation(secondsHand, seconds);
  setRotation(minutesHand, minutes);
  setRotation(hoursHand, hours);
};

setClock();
setInterval(setClock, 1000);
