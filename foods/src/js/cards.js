"use strict";

const containers = document.querySelectorAll('.container');

function generateCarCard({name, img, origin, type, eaten}) {
    const card = document.createElement('div');
    card.classList.add("card");
    
    const image = document.createElement('img');
    image.src = img;
    image.alt = name;
    image.classList.add("card-image");

    const title = document.createElement('h3');
    title.textContent = name;
    
    const link = document.createElement('div');

    const a = document.createElement('a');
    a.textContent = "Tovább";
    a.classList.add("button");
    a.href = "htmls/Mbeqa250.html";

    link.append(a);

    card.append(image,title,link);

    return card;
}


function generateCarCards(cars) {
    cars.forEach(carItem => {
        const card = generateCarCard(carItem);

        switch (carItem.type) {
            case "mcdonald":
                containers[0].appendChild(card);
                break;
            case "kfc":
                containers[1].appendChild(card);
                break;
            case "burgerking":
                containers[2].appendChild(card);
                break;
            case "burgers":
                containers[3].appendChild(card);
                break;
            case "fstrest":
                containers[4].appendChild(card);
                break;
        }
    });
}

generateCarCards(cars);
