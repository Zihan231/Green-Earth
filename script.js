const setActive = (id) => {
  const btns = document.getElementsByClassName("cat-btn");
  // console.log(btns);
  for (let btn of btns) {
    btn.classList.remove("active");
  }
  // console.log(id);
  document.getElementById(`cat-${id}`).classList.add("active");
};
// Loader
const loader = (status) => {
  if (status) {
    document.getElementById("loader").style.display = "";
  } else {
    document.getElementById("loader").style.display = "none";
  }
};
const loadAllTrees = async () => {
  loader(true);
  const url = "https://openapi.programming-hero.com/api/plants";
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.plants);
  const container = document.getElementById("main-container");
  container.innerHTML = "";
  const plants = data.plants;
  for (let plant of plants) {
    // console.log(plant.name)
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white rounded-lg md:rounded-xl shadow-md h-[360px] md:h-[450px] flex flex-col md:p-4 md:border md:border-gray-200 px-2">
  <img
    class="h-[152px] w-[100%] mb-2 md:w-full md:h-40 md:object-cover rounded-md"
    src="${plant.image}"
    alt="Tree Img"
  />
  <h2 onClick="showPlantDetails(${plant.id})" class="font-semibold text-lg text-left">${plant.name}</h2>

  <!-- description reserves ~6 lines and truncates -->
  <p class="text-xs text-left md:text-sm overflow-hidden text-ellipsis line-clamp-3 md:line-clamp-6 min-h-[6lh]">
    ${plant.description}
  </p>
  <!-- actions pinned to bottom -->
  <div class="mt-auto">
    <div class="flex justify-between text-sm py-2 px-1 md:px-0">
      <p class="bg-[#DCFCE7] rounded-lg px-1 text-sm text-[#15803D]">
        ${plant.category}
      </p>
      <p class="font-semibold text-sm">&#2547;${plant.price}</p>
    </div>

    <button
    onClick="addToCart(${plant.id})"
      class="bg-[#15803D] w-[95%] md:w-full text-white font-medium mt-2 mb-1 md:mt-4 rounded-lg hover:bg-[#035421] md:px-[20px] md:py-[6px] md:rounded-full"
    >
      Add to Cart
    </button>
  </div>
</div>
      `;
    container.appendChild(div);
  }
  loader(false);
  setActive(0);
};
// Load Category
const loadCategory = async () => {
  url = "https://openapi.programming-hero.com/api/categories/";
  const response = await fetch(url);
  const data = await response.json();
  // console.log();
  const container = document.getElementById("category-Section");
  container.innerHTML = "";
  container.innerHTML = `
    <li class="text-[#1F2937] font-medium list-none">
              <button
              id="cat-0"
              onClick="loadAllTrees()"
                class="cat-btn border border-gray-200 rounded-sm px-8 hover:bg-[#71ffa5] hover:text-white w-full md:text-left md:py-2 md:border-0"
              >
                All Trees
              </button>
            </li>
    `;
  setActive(0);
  const categories = data.categories;
  for (let category of categories) {
    const li = document.createElement("li");
    li.classList.add("list-none");
    li.innerHTML = `
        <button
                id="cat-${category.id}"
                onClick="showByCategory(${category.id})"
                class="cat-btn border border-gray-200 rounded-sm px-8 hover:bg-[#71ffa5] hover:text-white w-full md:text-left md:py-2 md:border-0 text-[#1F2937] font-medium"
              >
                ${category.category_name}
        </button>
        `;
    container.appendChild(li);
    //   console.log(container);
  }
};
// Show Modal
const showPlantDetails = async (id) => {
  const container = document.getElementById("modal-container");
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const plant = data.plants;
  // console.log(plant);
  container.innerHTML = `

          <h1 class="font-bold text-2xl mb-2">${plant.name}</h1>
          <img class="h-[200px] md:h-[320px] w-full mb-2 rounded-lg" src="${plant.image}" alt="Tree Picture">
          <p class="mb-2"><b>Category:</b> ${plant.category}</p>
          <p class="mb-2"><b>Price:</b> &#2547;${plant.price}</p>
          <p class="h-[100px] overflow-auto"><b>Description:</b> ${plant.description}</p>
        
  `;
  document.getElementById("plantDetails").showModal();
};
// plantDetails.showModal();
const showByCategory = async (id) => {
  loader(true);
  setActive(id);
  const container = document.getElementById("main-container");
  container.innerHTML = "";
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const plants = data.plants;

  for (let plant of plants) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white rounded-lg md:rounded-xl shadow-md h-[360px] md:h-[450px] flex flex-col md:p-4 md:border md:border-gray-200 px-2">
  <img
    class="h-[152px] w-[100%] mb-2 md:w-full md:h-40 md:object-cover rounded-md"
    src="${plant.image}"
    alt="Tree Img"
  />

  <h2 onClick="showPlantDetails(${plant.id})" class="font-semibold text-lg text-left">${plant.name}</h2>

  <!-- description reserves ~6 lines and truncates -->
  <p class="text-xs text-left md:text-sm overflow-hidden text-ellipsis line-clamp-3 md:line-clamp-6 min-h-[6lh]">
    ${plant.description}
  </p>

  <!-- actions pinned to bottom -->
  <div class="mt-auto">
    <div class="flex justify-between text-sm py-2 px-1 md:px-0">
      <p class="bg-[#DCFCE7] rounded-lg px-1 text-sm text-[#15803D]">
        ${plant.category}
      </p>
      <p class="font-semibold text-sm">&#2547;${plant.price}</p>
    </div>

    <button
    onClick="addToCart(${plant.id})"
      class="bg-[#15803D] w-[95%] md:w-full text-white font-medium mt-2 mb-1 md:mt-4 rounded-xl hover:bg-[#035421] md:px-[20px] md:py-[6px] md:rounded-full"
    >
      Add to Cart
    </button>
  </div>
</div>
      `;
    container.appendChild(div);
  }
  loader(false);
};
let TotalPrice = 0;
// Add to cart
const addToCart = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const plant = data.plants;
  console.log(id);
  const container = document.getElementById("add-to-cart");
  const div = document.createElement("div");
  div.innerHTML = `
            <div
            id="remove-${id}"
              class="bg-[#F0FDF4] flex justify-between py-2 border-1 border-gray-200 rounded-lg mb-1 px-4"
            >
              <div>
                <h1 class="text-left text-sm font-medium mb-2">${plant.name}</h1>
                <p class="text-sm font-normal text-left text-[#585555]">
                  &#2547;${plant.price} x 1
                </p>
              </div>
              <i
              onClick="removeFromCart(${id},${plant.price})"
                  class="text-[#8C8C8C] fa-solid fa-xmark hover:text-red-500 h-[20px] my-auto"
                ></i>
              
            </div>
  `;
  container.appendChild(div);
  TotalPrice += plant.price;
  document.getElementById("total-price").innerHTML = `&#2547; ${TotalPrice}`;
  // console.log(TotalPrice);
};
// Remove from cart
const removeFromCart = (id, price) => {
  document.getElementById(`remove-${id}`).remove();
  TotalPrice -= price;
  document.getElementById("total-price").innerHTML = `&#2547; ${TotalPrice}`;
};

// First call
const init = async () => {
  await loadCategory();
  await loadAllTrees();
};
// init();