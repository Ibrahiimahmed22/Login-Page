let pro = document.querySelector(".products");

function init(url) {
  let request = new XMLHttpRequest();
  pro.innerHTML = "";

  request.open("GET", url, true);

  request.onload = () => {
    if (request.status == 200 && request.readyState == 4) {
      let data = JSON.parse(request.responseText);
      let products = data.products;
      let productsHTML = "";

      products.forEach((p) => {
        productsHTML += `
          <div class="cards">
            <img src="${p.thumbnail}" alt="">
            <h1>${p.title}</h1>
            <p>${p.description}</p>
            <p>${p.price}</p>
            <button class="btn">Buy Now</button>
          </div>
        `;
      });
      pro.innerHTML = productsHTML;
    }
  };

  request.send();
}

init("https://dummyjson.com/products");


let search = document.querySelector("input");

search.addEventListener("input", () => {
  let value = `https://dummyjson.com/products/search?q=${search.value}`;
  init(value);
});


let categoriesLink = "https://dummyjson.com/products/categories";

function getCategories(link) {
  let categoryRq = new XMLHttpRequest();

  categoryRq.onload = function () {
    if (categoryRq.status == 200 && categoryRq.readyState == 4) {

      let categories = JSON.parse(categoryRq.responseText);

      let categoriesContainer = document.querySelector(".categories");

      categoriesContainer.innerHTML = "";
      let categoriesHTML = "";

      categories.forEach(function (c) {
        categoriesHTML += `
          <span class="category" onclick="showCategory(this)" data-slug="${c.slug}">
            ${c.name}
          </span>
        `;
      });
      categoriesContainer.innerHTML = categoriesHTML;
    }
  }

  categoryRq.open("GET", link, true);
  categoryRq.send();
}

getCategories(categoriesLink);


function showCategory(cat) {
  init(`https://dummyjson.com/products/category/${cat.dataset.slug}`);
}
