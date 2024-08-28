const linkElements = document.querySelectorAll('.has-tooltip');

const clickHandler = (event) => {
  event.preventDefault();

  const currentLink = event.currentTarget;

  let { x, y, width, height } = currentLink.getBoundingClientRect();
  x += window.pageXOffset;
  y += window.pageYOffset;

  let tooltip = currentLink.querySelector('.tooltip');

  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = currentLink.title;
    currentLink.append(tooltip);

    tooltip.style.position = 'absolute';

    tooltip = currentLink.querySelector('.tooltip');

    requestAnimationFrame(() => {
      const tipHeight = tooltip.getBoundingClientRect().height;
      const tipPosition = currentLink.dataset.position;

      const setPosition = (x, y, height, tooltipHeight) => {
        if (tipPosition === 'bottomRight') {
          return { top: `${y + height}px`, left: `${x + width}px` };
        } else if (tipPosition === 'top') {
          return { top: `${y - tooltipHeight}px`, left: `${x}px` };
        } else {
          return { top: `${y + height}px`, left: `${x}px` };
        }
      };

      Object.assign(tooltip.style, setPosition(x, y, height, tipHeight));
    });
  }

  tooltip.classList.toggle('tooltip_active');

  const tooltipElements = document.querySelectorAll('.tooltip');
  tooltipElements.forEach((otherTooltip) => {
    if (otherTooltip && otherTooltip !== tooltip) {
      otherTooltip.remove();
    }
  });
};

linkElements.forEach((link) => {
  link.addEventListener('click', clickHandler);
});
