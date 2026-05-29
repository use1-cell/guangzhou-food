const places = [
  {
    name: "广州酒家（文昌总店）",
    district: "荔湾",
    category: "早茶粤菜",
    budget: "聚餐",
    address: "广州市荔湾区文昌南路2号",
    dishes: ["虾饺", "文昌鸡", "广式点心"],
    note: "老广早茶和粤菜名片，适合第一次来广州时打个稳稳的底。",
    tags: ["老字号", "游客友好", "早茶"],
  },
  {
    name: "陶陶居（第十甫店）",
    district: "荔湾",
    category: "早茶粤菜",
    budget: "适中",
    address: "广州市荔湾区第十甫路20号",
    dishes: ["虾饺", "叉烧酥", "流沙包"],
    note: "上下九一带的经典茶楼选项，吃完还能顺路逛西关。",
    tags: ["西关", "点心", "老建筑"],
  },
  {
    name: "南信牛奶甜品专家",
    district: "荔湾",
    category: "糖水甜品",
    budget: "轻松",
    address: "广州市荔湾区第十甫路47号",
    dishes: ["双皮奶", "姜撞奶", "红豆双皮奶"],
    note: "逛上下九时很顺路的一口甜，奶香路线走得很广州。",
    tags: ["糖水", "上下九", "甜品"],
  },
  {
    name: "银记肠粉（上九路店）",
    district: "荔湾",
    category: "粥粉面",
    budget: "轻松",
    address: "广州市荔湾区上九路79号",
    dishes: ["牛肉肠", "鲜虾肠", "艇仔粥"],
    note: "布拉肠粉代表选手，适合早餐或者逛街中途补一口。",
    tags: ["肠粉", "早餐", "街坊味"],
  },
  {
    name: "伍湛记（龙津东路店）",
    district: "荔湾",
    category: "粥粉面",
    budget: "轻松",
    address: "广州市荔湾区龙津东路871号",
    dishes: ["及第粥", "艇仔粥", "咸煎饼"],
    note: "想吃广州粥品，这家可以放进行程里。暖胃，朴素，但很有用。",
    tags: ["粥", "西关", "早餐"],
  },
  {
    name: "向群饭店（龙津东路）",
    district: "荔湾",
    category: "粤菜老店",
    budget: "适中",
    address: "广州市荔湾区龙津东路853-857号",
    dishes: ["葱油鸡", "豉油皇鹅肠", "黄鳝饭"],
    note: "更像街坊饭局，不是精致派，但吃得出老城区的日常感。",
    tags: ["街坊店", "粤菜", "晚饭"],
  },
  {
    name: "泮溪酒家",
    district: "荔湾",
    category: "早茶粤菜",
    budget: "聚餐",
    address: "广州市荔湾区龙津西路151号",
    dishes: ["泮塘五秀", "园林早茶", "传统粤菜"],
    note: "园林酒家代表，适合把吃饭和荔湾湖一带散步打包安排。",
    tags: ["园林酒家", "聚餐", "荔湾湖"],
  },
  {
    name: "达扬原味炖品（文明路）",
    district: "越秀",
    category: "炖汤小吃",
    budget: "轻松",
    address: "广州市越秀区文明路160-1号",
    dishes: ["椰子炖鸡", "原盅炖汤", "花旗参炖品"],
    note: "文明路上的炖汤代表，逛北京路前后喝一盅很舒服。",
    tags: ["炖汤", "文明路", "米其林指南"],
  },
  {
    name: "百花甜品店",
    district: "越秀",
    category: "糖水甜品",
    budget: "轻松",
    address: "广州市越秀区文明路210号",
    dishes: ["芝麻糊", "凤凰奶糊", "杨枝甘露"],
    note: "文明路糖水线的经典一站，适合饭后不想立刻回家的时候。",
    tags: ["糖水", "北京路", "饭后"],
  },
  {
    name: "炳胜品味（珠江新城旗舰店）",
    district: "天河",
    category: "精致粤菜",
    budget: "聚餐",
    address: "广州市天河区珠江新城冼村路2号1-4楼",
    dishes: ["叉烧", "烧鹅", "炳胜小炒皇"],
    note: "更适合认真吃一顿粤菜，朋友来广州时拿来请客比较稳。",
    tags: ["珠江新城", "粤菜", "请客"],
  },
];

const districtFilter = document.querySelector("#districtFilter");
const categoryFilter = document.querySelector("#categoryFilter");
const budgetFilter = document.querySelector("#budgetFilter");
const searchInput = document.querySelector("#searchInput");
const placeGrid = document.querySelector("#placeGrid");
const resultCount = document.querySelector("#resultCount");

function uniqueValues(key) {
  return [...new Set(places.map((place) => place[key]))];
}

function fillFilter(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function mapUrl(place) {
  const keyword = encodeURIComponent(`${place.name} ${place.address}`);
  return `https://www.amap.com/search?query=${keyword}`;
}

function placeMatches(place) {
  const district = districtFilter.value;
  const category = categoryFilter.value;
  const budget = budgetFilter.value;
  const query = searchInput.value.trim().toLowerCase();
  const haystack = [
    place.name,
    place.district,
    place.category,
    place.budget,
    place.address,
    place.note,
    ...place.dishes,
    ...place.tags,
  ]
    .join(" ")
    .toLowerCase();

  return (
    (district === "全部" || place.district === district) &&
    (category === "全部" || place.category === category) &&
    (budget === "全部" || place.budget === budget) &&
    (!query || haystack.includes(query))
  );
}

function renderPlaces() {
  const visiblePlaces = places.filter(placeMatches);
  placeGrid.innerHTML = "";
  resultCount.textContent = `找到 ${visiblePlaces.length} 家，先挑一家开吃。`;

  visiblePlaces.forEach((place) => {
    const card = document.createElement("article");
    card.className = "place-card";
    card.innerHTML = `
      <div class="place-top">
        <h3>${place.name}</h3>
        <span class="badge">${place.district}</span>
      </div>
      <p>${place.note}</p>
      <ul class="meta-list">
        <li><strong>类型</strong><span>${place.category}</span></li>
        <li><strong>预算</strong><span>${place.budget}</span></li>
        <li><strong>推荐</strong><span>${place.dishes.join(" / ")}</span></li>
        <li><strong>地址</strong><span>${place.address}</span></li>
      </ul>
      <div class="tag-row">${place.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <a class="map-link" href="${mapUrl(place)}" target="_blank" rel="noreferrer">打开地图导航</a>
    `;
    placeGrid.appendChild(card);
  });
}

fillFilter(districtFilter, uniqueValues("district"));
fillFilter(categoryFilter, uniqueValues("category"));

[districtFilter, categoryFilter, budgetFilter, searchInput].forEach((control) => {
  control.addEventListener("input", renderPlaces);
});

renderPlaces();
