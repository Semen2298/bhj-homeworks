const linksTooltip = document.querySelectorAll(".has-tooltip");

linksTooltip.forEach(linkTooltip => {
    const div = document.createElement('div');
    div.classList.add('tooltip');
    const linksTitle = linkTooltip.title;
    div.textContent = linksTitle;
    linkTooltip.insertAdjacentElement( "afterend" , div);

    linkTooltip.addEventListener('click', e => {
        e.preventDefault();
        const activeTooltip = document.querySelector('.tooltip_active');
        const tooltipActive = div.classList.contains('tooltip_active');

        if (activeTooltip) {
            activeTooltip.classList.remove('tooltip_active');
        } 
        if(!tooltipActive) {
            div.classList.add('tooltip_active');
        } else {
            div.classList.remove('tooltip_active');
        }
        const coordinates = linkTooltip.getBoundingClientRect()

        div.style.top = coordinates.top + coordinates.height + 'px';
        div.style.left = coordinates.left + 'px';
    });
});