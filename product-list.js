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
}

function showProduct(product) {
    console.log(product);
    const template = document.querySelector(".smallProductTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector(
        ".subtle"
    ).textContent = `${product.articletype} | ${product.brandname}`;
    /*    document.querySelector(".product-name").textContent =
                                          product.productdisplayname; */

    document.querySelector(".category-name").textContent = product.category;

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
    copy.querySelector(
        ".product-img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    copy.querySelector("a").setAttribute("href", `product.html?id=${product.id}`);
    copy;

    const parent = document.querySelector("main");
    parent.appendChild(copy);
}