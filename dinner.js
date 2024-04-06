let host = "http://localhost:8080";
    let menuDiv = document.getElementById("menu");

    displayTheMenu();

    async function getTheMenu() {
    let response = await fetch(host + "/merger/supper");
    let menu = await response.json();
    return menu;
    }

    async function displayTheMenu() {
    let menu = await getTheMenu();
    for (let menuItem of menu) {
        let div = document.createElement("div");
        div.class = "menu-item";
        div.innerHTML = `
            <div class="menu-item">
            <div class="item-name">${menuItem.name}</div>
            <div class="item-description">${menuItem.description}</div>
            <div class="item-price">${menuItem.price}</div>
            </div>
            `;
        menuDiv.appendChild(div);
    }
}