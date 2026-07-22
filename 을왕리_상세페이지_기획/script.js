document.addEventListener('DOMContentLoaded', () => {
  const priceBlock = document.getElementById('price-block');

  document.querySelectorAll('[data-scroll-price]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!priceBlock) return;
      const top = priceBlock.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const items = [...document.querySelectorAll('[data-faq-item]')];
  items.forEach((item, index) => {
    const button = item.querySelector('[data-faq-button]');
    button?.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      items.forEach((target, targetIndex) => {
        const targetButton = target.querySelector('[data-faq-button]');
        const targetAnswer = target.querySelector('[data-faq-answer]');
        const shouldOpen = targetIndex === index && !isOpen;

        targetButton?.setAttribute('aria-expanded', String(shouldOpen));
        if (targetAnswer) targetAnswer.hidden = !shouldOpen;
      });
    });
  });
});
