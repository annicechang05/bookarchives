document.querySelectorAll('.card-inner').forEach(inner => {
    inner.addEventListener('click', () => {
      inner.classList.toggle('flipped');
    });
  });

  document.querySelectorAll('.card-container.span-2').forEach(container => {
    container.classList.add('step-0');
  
    const imageCard = container.querySelector('.image-card');
    const textCard = container.querySelector('.text-card');
  
    imageCard.addEventListener('click', (e) => {
      e.stopPropagation();
      if (container.classList.contains('step-0')) {
        container.classList.replace('step-0', 'step-1');
      } else if (container.classList.contains('step-2')) {
        container.classList.replace('step-2', 'step-0');
      }
    });
  
    textCard.addEventListener('click', (e) => {
      e.stopPropagation();
      if (container.classList.contains('step-1')) {
        container.classList.replace('step-1', 'step-2');
      }
    });
  });