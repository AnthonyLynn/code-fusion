const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  }
  // {
  //   name: "Mountain house",
  //   link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  // }
];

const hotelCards = [
  {
    name: "Hotel 1",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
  },
  {
    name: "Hotel 2",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
  {
    name: "Hotel 3",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
    name: "Hotel 4",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
    name: "Hotel 5",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
    name: "Hotel 6",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  }
  // {
  //   name: "Mountain house",
  //   link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  // }
];

const cardsHeader = document.querySelector(".cards__header");
const profileGoButton = document.querySelector(".profile__go-btn");
const profileSection = document.querySelector(".profile");
const pageSection = document.querySelector(".page");
const cardsBackButton = document.querySelector(".cards__back-btn");
const nextHotelButton = document.querySelector(".cards__nexthotel-btn");
const exitAppButton = document.querySelector(".cards__exit-btn");

const cardsSection = document.querySelector(".cards");
const cardContentContainer = document.querySelector(".cards__pics");

// const cardHeartButton = cardContentContainer.querySelector(
//   ".card__footer-heart-btn"
// );

// const closeModalListener = (event) => {
//   if (event.target.classList.contains("modal_opened")) {
//     closeModal(event.target);
//   }
// };

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.body.addEventListener("click", closeModalListener);
//   document.addEventListener("keydown", closeModalEscapeListener);
// }

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.body.removeEventListener("click", closeModalListener);
//   document.removeEventListener("keydown", closeModalEscapeListener);
// }

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();

//   profileUserName.textContent = profileNameInput.value;
//   profileUserDescription.textContent = profileDescriptionInput.value;

//   closeModal(editProfileModal);
// }

// function handlePostFormSubmit(evt) {
//   evt.preventDefault();

//   const newCard = {
//     name: addModalFormCaption.value,
//     link: addModalFormLink.value
//   };
//   if (addModalFormCaption.value !== "" && addModalFormLink.value !== "") {
//     initialCards.unshift(newCard);

//     cardContentContainer.prepend(getCardElement(newCard));

//     closeModal(addPostModal);
//   }

//   addModalFormCaption.value = "";
//   addModalFormLink.value = "";

//   const inputList = Array.from(addPostModal.querySelectorAll(".modal__input"));
//   const buttonElement = addPostModal.querySelector(".modal__submit-btn");
//   toggleButtonState(inputList, buttonElement, settings);
// }

function getCardElement(data) {
  const cardElement = document
    .querySelector("#card")
    .content.querySelector(".card")
    .cloneNode(true);

  cardElement.querySelector(".card__footer-title").textContent = data.name;

  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = data.link;
  cardImage.alt = data.name;

  // const cardHeartBtn = cardElement.querySelector(".card__footer-heart-btn");

  // cardHeartBtn.addEventListener("click", () => {
  //   handleLikeButton(cardHeartBtn);
  // });

  // const cardTrashButton = cardElement.querySelector(".card__trash-btn");

  // cardTrashButton.addEventListener("click", () => {
  //   handleDeleteButton(cardElement);
  // });

  cardImage.addEventListener("click", () => {
    // openImageModal(cardElement);
  });

  return cardElement;
}
function handleLikeButton(cardEl) {
  cardEl.classList.toggle("card__footer-heart-btn-liked");
}

function displayCards(cardData) {
  cardData.forEach((item) => {
    cardContentContainer.append(getCardElement(item));
  });
}

profileGoButton.addEventListener("click", () => {
  cardsHeader.textContent = "Select Bars";
  cardContentContainer.innerHTML = "";
  profileSection.style = "display: none";
  pageSection.style = "background-color: #EAE7E5";
  const barCards = displayCards(initialCards);
  cardsSection.style.display = "block";
});

exitAppButton.addEventListener("click", () => {
  profileSection.style.display = "";
  pageSection.style = "background-color: #1e1e1e";

  cardsSection.style.display = "none";
});

nextHotelButton.addEventListener("click", () => {
  cardsHeader.textContent = "Select Hotels";
  cardContentContainer.innerHTML = "";
  displayCards(hotelCards);
});
