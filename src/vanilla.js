const scoreHeading = document.querySelector("h1");
const upvoteButton = document.querySelector("#upvote");
const downvoteButton = document.querySelector("#downvote");

const vote = type => {
  const buttons = { "1": upvoteButton, "-1": downvoteButton };

  scoreHeading.textContent = type
  if (buttons[type].classList.contains("active")) {
    buttons[type].classList.remove("active");
  } else if (buttons[-type].classList.contains("active")) {
    buttons[-type].classList.remove("active");
    buttons[type].classList.add("active");
  } else {
    buttons[type].classList.add("active");
  }
};

upvoteButton.addEventListener("click", () => vote(1));
downvoteButton.addEventListener("click", () => vote(-1));
