const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleProductList(data);
    });

function handleProductList(data) {
    data.forEach(showProduct);
    /*     console.log(data);
     */
}

/** <div class="products">

                <a href="product.html"><img src="./imgs/1526.webp" alt="a picture of a t-shirt">
                    <p class="sold-out">Sold out!!</p>
                    <div class="product-content">
                        <h3>Big Cat Backpack Black</h3>
                        <p>Apparel | T-shirts</p>
                        <p>1500kr.</p>
                    </div>

                </a>
            </div>**/

function showProduct(product) {
    console.log(product);
    const template = document.querySelector(".smallProductTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector(
        ".subtle"
    ).textContent = `${product.articletype} | ${product.brandname}`;
    copy.querySelector("h3").textContent = product.productdisplayname;

    if (product.soldout) {
        copy.querySelector(".products").classList.add("sold-out");
    }

    if (product.discount) {
        copy.querySelector(".products").classList.add("onSale");
    }
    copy.querySelector(".new-price").textContent =
        Math.round((product.price * product.discount) / 100 + -product.price) * -1 +
        ",00";

    copy.querySelector(".discount-amount").textContent = -product.discount + "%";
    copy.querySelector(".price").textContent =
        product.price + ",00" + " " + "DKK";
    const parent = document.querySelector("body");
    parent.appendChild(copy);
}