function cards() {
    fetch("db.json")
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        product.forEach((e) => {
          const card = document.querySelector(".card");
          const products = document.createElement("div");
          const ul = document.createElement("ul");
          const li = document.createElement("li");
          const img = document.createElement("img");
          const p = document.createElement("h3");
          const price = document.createElement("h4");
          const desc = document.createElement("h5");
  
          img.getAttribute("src");
          img.src = e.img;
          p.textContent = e.title;
          price.textContent = e.price;
          desc.textContent = e.desc;
          card.append(products);
          products.append(ul);
          ul.append(li);
          li.append(img);
          li.append(p);
          li.append(price);
          li.append(desc);
  
          const btnAll = document.querySelector(".btn-all");
          const btnLaptop = document.querySelector(".btn-laptops");
          const btnPhone = document.querySelector(".btn-phones");
          const btnTv = document.querySelector(".btn-tv");
  
          btnAll.addEventListener("click", () => {
            if (e.category === "") {
              products.style.display = "none";
            } else {
              products.style.display = "block";
            }
          });
  
          btnLaptop.addEventListener("click", () => {
            if (e.category === "ноутбуки") {
              products.style.display = "block";
            } else {
              products.style.display = "none";
            }
          });
  
          btnPhone.addEventListener("click", () => {
            if (e.category === "Phone") {
              products.style.display = "block";
            } else {
              products.style.display = "none";
            }
          });
  
          btnTv.addEventListener("click", () => {
            if (e.category === "The TABLET") {
              products.style.display = "block";
            } else {
              products.style.display = "none";
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  cards();