const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.append(imgPopup);

    imgPopup.style.cssText = 
    `justify-content: center; 
    align-items: center; 
    display: none`;

    

    imgPopup.append(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }

        bigImage.style.cssText = 
        `max-width: 800px;
        max-height: 800px`;
    });

};

export default images;