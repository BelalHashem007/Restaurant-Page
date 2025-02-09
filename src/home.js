const home = (function () {
    const content = document.querySelector('#content');
    const homePage = document.createElement('div');
    homePage.classList.add('home');
    content.appendChild(homePage); //homepage 

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "You Pizza"
    homePage.appendChild(title); //title

    const imgContainer = document.createElement('div');
    const parOne = document.createElement("p");
    const parTwo = document.createElement("p");
    const parContainer = document.createElement('div');
    imgContainer.classList.add("img-container");
    parOne.textContent = "30% off"
    parTwo.textContent = "DISCOUNT ONLINE"
    parContainer.appendChild(parOne);
    parContainer.appendChild(parTwo);
    parContainer.classList.add('img-text');
    imgContainer.appendChild(parContainer);
    homePage.appendChild(imgContainer); //image + text on image
    
    const textContainer = document.createElement('div');
    const text = document.createElement('div');
    textContainer.classList.add('text-container');
    text.classList.add('text');
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus remreprehenderit quod. Fugiat facere natus pariatur tempora ex, quia, animi error fugit aperiam saepe, voluptas id! Ad, harum aspernatur?";
    textContainer.appendChild(text);
    homePage.appendChild(textContainer); //text under image

    const orderBtn = document.createElement('button');
    orderBtn.textContent = "Order Now"
    homePage.appendChild(orderBtn);

})();
export { home };