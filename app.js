const menu = [
    {
      id: 1,
      title: "iphone12pro",
      category: "phones",
      price: 1599.99,
      img: "./images/item-1.jpg",
      desc: `Phone with gream selfie camera and triple back camera. `,
    },
    {
      id: 2,
      title: "samsungs21ultra",
      category: "phones",
      price: 1299.99,
      img: "./images/item-2.jpg",
      desc: `Good looking phone with beutiful design and great back camera. `,
    },
    {
      id: 3,
      title: "xiaomimi12pro",
      category: "phones",
      price: 699.99,
      img: "./images/item-3.jpg",
      desc: `Everything that those two previous phones had, this one has it plus better batter and for much less price. LoL`,
    },
    {
      id: 4,
      title: "macbookpro14",
      category: "laptops",
      price: 2000.99,
      img: "./images/item-4.jpg",
      desc: `This laptop is made for fancy people and influencers. Good battery life, and fancy OS sys. `,
    },
    {
      id: 5,
      title: "asusrog15",
      category: "laptops",
      price: 2255.99,
      img: "./images/item-5.jpg",
      desc: `If u want pure power for gaming, ur on the right place. This laptop is for u. Lol `,
    },
    {
      id: 6,
      title: "dellxps13",
      category: "laptops",
      price: 1890.99,
      img: "./images/item-6.jpg",
      desc: `Bussines laptop with great battery life. Feel good on desk and 4k panel is amazing.`,
    },
    {
      id: 7,
      title: "lg40",
      category: "tvs",
      price: 800.99,
      img: "./images/item-7.jpg",
      desc: `Great 4k tv with 120hz display. Everything is much smoother on this tv. Lol `,
    },
    {
      id: 8,
      title: "vox40",
      category: "tvs",
      price: 450.99,
      img: "./images/item-8.jpg",
      desc: `Cheap tv for older lads. Not bad picture quality but durability is one day more than warrenty. Lol`,
    },
    {
      id: 9,
      title: "tesla40",
      category: "tvs",
      price: 550.99,
      img: "./images/item-9.jpg",
      desc: `Mojne meni to, brend from da Srbija. Provereno odnos cene i kvaliteta`,
    },
    {
      id: 10,
      title: "xiaomiwatch",
      category: "smartwatch",
      price: 220.99,
      img: "./images/item-10.jpg",
      desc: `Great watch with better battery life than most other phones like samsung and iphone. Lol`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");

  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  