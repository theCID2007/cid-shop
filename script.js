alert("Le fichier JavaScript est chargé !");

const welcomeScreen = document.getElementById("welcomeScreen");
const shop = document.getElementById("shop");
const enterShop = document.getElementById("enterShop");
const languageSelect = document.getElementById("language");

const productModal = document.getElementById("productModal");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartTotal = document.getElementById("cartTotal");

let selectedProduct = null;
let cart = [];

// ENTRER DANS LA BOUTIQUE
enterShop.addEventListener("click", function () {
    const language = languageSelect.value;

    welcomeScreen.style.display = "none";
    shop.hidden = false;

    if (language === "en") {
        document.documentElement.lang = "en";

        document.querySelector(".badge").textContent =
            "STREETWEAR COLLECTION";

        document.querySelector(".hero h1").innerHTML =
            "YOUR STYLE.<br><span>YOUR IDENTITY.</span>";

        document.querySelector(".hero p").textContent =
            "Discover a new way to dress. Express your style with CID SHOP.";

        document.getElementById("decouvrir").textContent =
            "Discover the collection";

        document.querySelector("nav").innerHTML =
            '<a href="#">Home</a><a href="#collection">Collection</a><a href="#contact">Contact</a>';

        document.querySelector("footer").textContent =
            "© 2026 CID SHOP — YOUR STYLE, YOUR IDENTITY.";
    } else {
        document.documentElement.lang = "fr";
    }

    localStorage.setItem(
        "cidShopCountry",
        document.getElementById("country").value
    );

    localStorage.setItem("cidShopLanguage", language);
});

// DÉCOUVRIR LA COLLECTION
document.getElementById("decouvrir").addEventListener("click", function () {
    document.getElementById("collection").scrollIntoView({
        behavior: "smooth"
    });
});

// OUVRIR LA FICHE D'UN PRODUIT
document.querySelectorAll(".view-product").forEach(function (button) {
    button.addEventListener("click", function () {
        selectedProduct = {
            name: button.dataset.name,
            price: Number(button.dataset.price),
            description: button.dataset.description
        };

        document.getElementById("modalName").textContent =
            selectedProduct.name;

        document.getElementById("modalDescription").textContent =
            selectedProduct.description;

        document.getElementById("modalPrice").textContent =
            selectedProduct.price.toLocaleString("fr-FR") + " FCFA";

        productModal.hidden = false;
    });
});

// FERMER LA FICHE PRODUIT
document.getElementById("closeModal").addEventListener("click", function () {
    productModal.hidden = true;
});

productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
        productModal.hidden = true;
    }
});

// AJOUTER UN PRODUIT AU PANIER
document.getElementById("addToCart").addEventListener("click", function () {
    if (!selectedProduct) {
        return;
    }

    const size = document.getElementById("productSize").value;

    cart.push({
        ...selectedProduct,
        size: size,
        id: Date.now() + Math.random()
    });

    renderCart();

    productModal.hidden = true;

    document.getElementById("panier").scrollIntoView({
        behavior: "smooth"
    });
});

// AFFICHER ET ACTUALISER LE PANIER
function renderCart() {
    cartItems.innerHTML = "";

    cartEmpty.style.display = cart.length === 0 ? "block" : "none";

    let total = 0;

    cart.forEach(function (item) {
        total += item.price;

        const row = document.createElement("div");
        row.className = "cart-item";

        const details = document.createElement("div");

        const name = document.createElement("strong");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = "Taille : " + item.size;

        details.appendChild(name);
        details.appendChild(description);

        const actions = document.createElement("div");

        const price = document.createElement("strong");
        price.textContent =
            item.price.toLocaleString("fr-FR") + " FCFA";

        const remove = document.createElement("button");
        remove.className = "remove-item";
        remove.textContent = "Retirer";

        remove.addEventListener("click", function () {
            cart = cart.filter(function (product) {
                return product.id !== item.id;
            });

            renderCart();
        });

        actions.appendChild(price);
        actions.appendChild(document.createElement("br"));
        actions.appendChild(remove);

        row.appendChild(details);
        row.appendChild(actions);

        cartItems.appendChild(row);
    });

    cartTotal.textContent = cart.length > 0
        ? "Total : " + total.toLocaleString("fr-FR") + " FCFA"
        : "";
}

// INITIALISER LE PANIER
renderCart();