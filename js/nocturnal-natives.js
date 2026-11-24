/* Nocturnal Natives cards */

const profileCards = document.querySelectorAll('.natives-page .profile-card');

function flipCard(card, flipped) {
  const front = card.querySelector('.profile-card__front');
  const back = card.querySelector('.profile-card__back');

  front.inert = flipped;
  back.inert = !flipped;
  front.setAttribute('aria-hidden', String(flipped));
  back.setAttribute('aria-hidden', String(!flipped));
  card.classList.toggle('is-flipped', flipped);
}

profileCards.forEach((card) => {
  const moreButton = card.querySelector('.profile-card__show');
  const backButton = card.querySelector('.profile-card__hide');

  moreButton.addEventListener('click', () => {
    // Only one animal card can be flipped at a time.
    profileCards.forEach((otherCard) => {
      if (otherCard !== card) flipCard(otherCard, false);
    });

    flipCard(card, true);
    backButton.focus({ preventScroll: true });
  });

  backButton.addEventListener('click', () => {
    flipCard(card, false);
    moreButton.focus({ preventScroll: true });
  });
});

// Home featured-animal links use fragments such as #elf-owl.
// When a direct link arrives, open the matching card and bring it into view.
function openLinkedAnimal() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;

  const card = [...profileCards].find((item) => item.id === id);
  if (!card) return;

  profileCards.forEach((otherCard) => {
    flipCard(otherCard, otherCard === card);
  });

  const backButton = card.querySelector('.profile-card__hide');
  backButton.focus({ preventScroll: true });
  card.scrollIntoView({ behavior: 'auto', block: 'center' });
}

// After images/styles load, ensure fragment scrolling lands on the opened card.
if (document.readyState === 'complete') {
  openLinkedAnimal();
} else {
  window.addEventListener('load', openLinkedAnimal, { once: true });
}
window.addEventListener('hashchange', openLinkedAnimal);
