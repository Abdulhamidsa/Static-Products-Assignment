const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));

function showProduct(product) {
    console.log(product);
    document.querySelector(".category-name").textContent = product.category;

    document.querySelector(".product-name").textContent =
        product.productdisplayname;
    document.querySelector(".product-title").textContent =
        product.productdisplayname;
    document.querySelector(".new-price").textContent =
        Math.round((product.price * product.discount) / 100 + -product.price) * -1 +
        ",00";

    document.querySelector(".discount-amount").textContent = -product.discount + "%";
    document.querySelector(".price").textContent =
        product.price + ",00" + " " + "DKK";
    /* 
                document.querySelector(".product-price").textContent =
                    product.price + ",00 " + "DKK";  */
    document.querySelector(
        ".product-img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

    document.querySelector(".product-img").alt = product.productdisplayname;
}