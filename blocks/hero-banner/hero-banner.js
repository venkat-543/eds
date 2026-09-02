export default async function decorate(block) {

    const row1 = block.children[0]

    const columns = [...row1.children]
    const image = columns[0].querySelector('img');
    const title = columns[1].querySelector('p');
    const description = columns[2].querySelector('p');

    const heroBanner = document.createElement('div');
    heroBanner.className = 'hero-banner-block';

    if(image){
        image.removeAttribute('width');
        image.removeAttribute('height');
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'bg-image';
        imageWrapper.append(image);
        heroBanner.append(imageWrapper);
    }


    const text = document.createElement('div');
    text.className = "hero-text"

    if(title){
        const titleWrapper = document.createElement('h2');
        titleWrapper.className="hero-title";
        titleWrapper.append(title);
        titleWrapper.textContent = title.textContent;
        text.append(titleWrapper);
    }
    if(description){
        const descriptionWrapper = document.createElement('p');
        descriptionWrapper.className="hero-description";
        descriptionWrapper.append(description);
        descriptionWrapper.textContent = description.textContent;
        text.append(descriptionWrapper);
    }



    heroBanner.append(text)
    block.replaceChildren(heroBanner);
}