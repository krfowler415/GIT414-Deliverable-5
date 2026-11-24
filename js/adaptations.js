/* Adaptations cards */

const adaptationCards = [...document.querySelectorAll('.adaptations-page .adaptation-card')];

function setAdaptationOpen(card, open, restoreFocus = true) {
  const toggle = card.querySelector('.adaptation-card__toggle');
  const details = card.querySelector('.adaptation-card__details');
  const indicator = card.querySelector('.adaptation-card__indicator');
  const name = card.dataset.title;

  // Return keyboard focus to the close button if the details had focus.
  if (!open && restoreFocus && document.activeElement === details) {
    toggle.focus({ preventScroll: true });
  }

  card.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', `${open ? 'Hide' : 'Show'} details for ${name}`);
  details.setAttribute('aria-hidden', String(!open));
  details.inert = !open;
  details.tabIndex = open ? 0 : -1;
  indicator.textContent = open ? '−' : '+';
  details.scrollTop = 0;
}

adaptationCards.forEach((card) => {
  const toggle = card.querySelector('.adaptation-card__toggle');

  toggle.addEventListener('click', () => {
    const opening = !card.classList.contains('is-open');

    // Selecting another card closes the previous one.
    adaptationCards.forEach((other) => {
      if (other !== card && other.classList.contains('is-open')) {
        setAdaptationOpen(other, false, false);
      }
    });

    setAdaptationOpen(card, opening);
  });
});

// Clicking outside the cards closes the selected card.
document.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('.adaptation-card')) {
    return;
  }

  adaptationCards.forEach((card) => {
    if (card.classList.contains('is-open')) {
      setAdaptationOpen(card, false, false);
    }
  });
});

// Escape closes the selected card; the native button handles Enter and Space.
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;

  adaptationCards.forEach((card) => {
    if (card.classList.contains('is-open')) {
      setAdaptationOpen(card, false);
    }
  });
});
