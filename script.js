const setActive = (id) => {
  const btns = document.getElementsByClassName("cat-btn");
  // console.log(btns);
  for (let btn of btns) {
    btn.classList.remove("active");
  }
  // console.log(id);
  document.getElementById(`cat-${id}`).classList.add("active");
};
const loadAllTrees = async () => {
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
      <div onClick="showPlantDetails(${plant.id})" class="bg-white rounded-lg md:rounded-xl shadow-md h-full md:h-full flex flex-col md:p-4 md:border md:border-gray-200">
  <img
    class="h-[152px] w-[152px] mb-2 md:w-full md:h-40 md:object-cover rounded-md"
    src="${plant.image}"
    alt="Tree Img"
  />

  <h2 class="font-semibold text-lg text-left">${plant.name}</h2>

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
      class="bg-[#15803D] w-[95%] md:w-full text-white font-medium mt-2 mb-1 md:mt-4 rounded-lg hover:bg-[#035421] md:px-[20px] md:py-[6px] md:rounded-full"
    >
      Add to Cart
    </button>
  </div>
</div>
      `;
    container.appendChild(div);
  }
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
                class="cat-btn border border-gray-200 rounded-sm px-8 hover:bg-[#15803D] hover:text-white w-full md:text-left md:py-2 md:border-0"
              >
                All Trees
              </button>
            </li>
    `;
  const categories = data.categories;
  for (let category of categories) {
    const li = document.createElement("li");
    li.classList.add("list-none");
    li.innerHTML = `
        <button
                id="cat-${category.id}"
                onClick="showByCategory(${category.id})"
                class="cat-btn border border-gray-200 rounded-sm px-8 hover:bg-[#15803D] hover:text-white w-full md:text-left md:py-2 md:border-0 text-[#1F2937] font-medium"
              >
                ${category.category_name}
        </button>
        `;
    container.appendChild(li);
    //   console.log(container);
  }
  setActive(0);
};

// Show Modal
const showPlantDetails = async (id) => {
  const container = document.getElementById("modal-container");
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  const plant = data.plants;
  console.log(plant);
  container.innerHTML = `

          <h1 class="font-bold text-2xl mb-2">${plant.name}</h1>
          <img class="h-[200px] md:h-[320px] w-full mb-2 rounded-lg" src="${plant.image}" alt="Tree Picture">
          <p class="mb-2"><b>Category:</b> ${plant.category}</p>
          <p class="mb-2"><b>Price:</b> &#2547;${plant.price}</p>
          <p class="h-[100px] overflow-auto"><b>Description:</b> ${plant.description}</p>
        
  `;
  document.getElementById("plantDetails").showModal();
}
loadCategory();
loadAllTrees();
// plantDetails.showModal();
const showByCategory = async (id) => {
  setActive(id);
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
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
      <div onClick="showPlantDetails(${plant.id})" class="bg-white rounded-lg md:rounded-xl shadow-md h-full md:h-full flex flex-col md:p-4 md:border md:border-gray-200">
  <img
    class="h-[152px] w-[152px] mb-2 md:w-full md:h-40 md:object-cover rounded-md"
    src="${plant.image}"
    alt="Tree Img"
  />

  <h2 class="font-semibold text-lg text-left">${plant.name}</h2>

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
      class="bg-[#15803D] w-[95%] md:w-full text-white font-medium mt-2 mb-1 md:mt-4 rounded-lg hover:bg-[#035421] md:px-[20px] md:py-[6px] md:rounded-full"
    >
      Add to Cart
    </button>
  </div>
</div>
      `;
    container.appendChild(div);
  }
};

