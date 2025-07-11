let scrollPos = 0;

function scrollTimeline(direction) {
  const wrapper = document.querySelector('.timeline-wrapper');
  const scrollAmount = 350; // cantidad de píxeles a desplazar

  scrollPos += direction * scrollAmount;
  wrapper.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}
