    const menu = (() => {
        const showMenu = () => {
            const content = document.querySelector('#content');
            const menuPage = document.createElement('div');
            menuPage.classList.add('menu');
            content.appendChild(menuPage); //menuPage

            const textContainer = document.createElement('div');
            textContainer.classList.add('text-container');
            menuPage.appendChild(textContainer); //text container

            const title = document.createElement('div')
            title.classList.add('title');
            title.textContent = "Pizza";
            textContainer.appendChild(title); //Title

            const text = document.createElement('div');
            text.classList.add('text');
            textContainer.appendChild(text); //text body


            const medSize = document.createElement('div');
            medSize.textContent = "MEDIUM";
            medSize.classList.add('med-size')
            const larSize = document.createElement('div');
            larSize.textContent = "LARGE";
            larSize.classList.add('lar-size') //medium,large text


            const item1Name = document.createElement('div'); 
            item1Name.textContent = "PALERMO PIZZA SPECIAL";
            item1Name.classList.add('name')
            const item1PrizeMed = document.createElement('div');
            item1PrizeMed.textContent = "19.50";
            item1PrizeMed.classList.add('prize');
            const item1PrizeLar = document.createElement('div');
            item1PrizeLar.textContent = "21.25";
            item1PrizeLar.classList.add('prize'); 
            const item1Ingredients = document.createElement('div');
            item1Ingredients.textContent = "Pepperoni, Sausage, Mushrooms, Green Peppers & Onions";
            item1Ingredients.classList.add('ingredients');
            item1Name.appendChild(item1Ingredients); //item1


            const item2Name = document.createElement('div'); 
            item2Name.textContent = "MARGHERITA";
            item2Name.classList.add('name')
            const item2PrizeMed = document.createElement('div');
            item2PrizeMed.textContent = "18.50";
            item2PrizeMed.classList.add('prize');
            const item2PrizeLar = document.createElement('div');
            item2PrizeLar.textContent = "20.50";
            item2PrizeLar.classList.add('prize'); //item 2
            

            const item3Name = document.createElement('div'); 
            item3Name.textContent = "CAPRI PIZZA (White)";
            item3Name.classList.add('name')
            const item3PrizeMed = document.createElement('div');
            item3PrizeMed.textContent = "19.50";
            item3PrizeMed.classList.add('prize');
            const item3PrizeLar = document.createElement('div');
            item3PrizeLar.textContent = "21.50";
            item3PrizeLar.classList.add('prize'); 
            const item3Ingredients = document.createElement('div');
            item3Ingredients.textContent = "BrocColi, Spinach, Tomatoes & Ricotta Cheese";
            item3Ingredients.classList.add('ingredients');
            item3Name.appendChild(item3Ingredients); //item3

            const item4Name = document.createElement('div'); 
            item4Name.textContent = "VEGGIE PIZZA (Red or White)";
            item4Name.classList.add('name')
            const item4PrizeMed = document.createElement('div');
            item4PrizeMed.textContent = "19.50";
            item4PrizeMed.classList.add('prize');
            const item4PrizeLar = document.createElement('div');
            item4PrizeLar.textContent = "21.50";
            item4PrizeLar.classList.add('prize'); //item 4

            const item5Name = document.createElement('div'); 
            item5Name.textContent = "GRILLED VEGGIE PIZZA";
            item5Name.classList.add('name')
            const item5PrizeMed = document.createElement('div');
            item5PrizeMed.textContent = "19.50";
            item5PrizeMed.classList.add('prize');
            const item5PrizeLar = document.createElement('div');
            item5PrizeLar.textContent = "21.50";
            item5PrizeLar.classList.add('prize'); 
            const item5Ingredients = document.createElement('div');
            item5Ingredients.textContent = "BrocColi, Tomatoes, EggPlant, Zucchini & Roasted Peppers";
            item5Ingredients.classList.add('ingredients');
            item5Name.appendChild(item5Ingredients); //item5

            text.append(medSize,larSize,
                item1Name,item1PrizeMed,item1PrizeLar,
                item2Name,item2PrizeMed,item2PrizeLar,
                item3Name,item3PrizeMed,item3PrizeLar,
                item4Name,item4PrizeMed,item4PrizeLar,
                item5Name,item5PrizeMed,item5PrizeLar,
            );//appending everything
            
        }
        return {showMenu};
    })();

    export { menu };