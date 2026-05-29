const places = [
  {
    name: "广州酒家（文昌总店）",
    district: "荔湾",
    category: "早茶粤菜",
    budget: "聚餐",
    address: "广州市荔湾区文昌南路2号",
    dishes: ["虾饺", "文昌鸡", "广式点心"],
    note: "老广早茶和粤菜名片，第一次来广州选它，像走进标准答案。",
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
    name: "莲香楼（第十甫店）",
    district: "荔湾",
    category: "早茶粤菜",
    budget: "适中",
    address: "广州市荔湾区第十甫路67号",
    dishes: ["莲蓉月饼", "传统点心", "茶点"],
    note: "百年饼家和老茶楼气质很足，适合想补一口老字号历史的人。",
    tags: ["老字号", "糕点", "第十甫"],
  },
  {
    name: "泮溪酒家",
    district: "荔湾",
    category: "早茶粤菜",
    budget: "聚餐",
    address: "广州市荔湾区龙津西路151号",
    dishes: ["泮塘五秀", "园林早茶", "传统粤菜"],
    note: "园林酒家代表，适合把吃饭和荔湾湖散步打包安排。",
    tags: ["园林酒家", "聚餐", "荔湾湖"],
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
    name: "顺记冰室",
    district: "荔湾",
    category: "糖水甜品",
    budget: "轻松",
    address: "广州市荔湾区宝华路85号",
    dishes: ["椰子雪糕", "芒果雪糕", "传统冰品"],
    note: "宝华路甜品老选项，适合下午走累了坐下来降降温。",
    tags: ["宝华路", "冰室", "甜品"],
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
    name: "吴财记面家",
    district: "荔湾",
    category: "粥粉面",
    budget: "轻松",
    address: "广州市荔湾区大同路和隆里20号",
    dishes: ["云吞面", "炸云吞", "牛腩面"],
    note: "小巷面家路线，想吃云吞面又不想坐大酒楼，可以来这里。",
    tags: ["云吞面", "小巷", "街坊味"],
  },
  {
    name: "宝华面店",
    district: "荔湾",
    category: "粥粉面",
    budget: "轻松",
    address: "广州市荔湾区宝华路117号",
    dishes: ["鲜虾云吞面", "牛三星", "捞面"],
    note: "宝华路经典面店，和糖水、鱼皮可以组成一条很顺的西关小吃线。",
    tags: ["宝华路", "云吞面", "小吃"],
  },
  {
    name: "陈添记鱼皮",
    district: "荔湾",
    category: "街头小吃",
    budget: "轻松",
    address: "广州市荔湾区宝华路十五甫三巷2号之一",
    dishes: ["爽鱼皮", "艇仔粥", "猪肠粉"],
    note: "西关小吃代表之一，适合少量多站，别一上来吃太饱。",
    tags: ["鱼皮", "西关", "小吃"],
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
    name: "鹅公村（芳村店）",
    district: "荔湾",
    category: "烧腊烧鹅",
    budget: "聚餐",
    address: "广州市荔湾区花地大道南402-404号",
    dishes: ["烧鹅", "鹅肠", "沙河粉"],
    note: "想认真吃鹅可以安排这家，比较适合多人一起点菜。",
    tags: ["烧鹅", "芳村", "聚餐"],
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
    name: "创膳金牌烧鹅（文明路）",
    district: "越秀",
    category: "烧腊烧鹅",
    budget: "轻松",
    address: "广州市越秀区文明路92号铺",
    dishes: ["烧鹅饭", "叉烧饭", "烧鸭饭"],
    note: "文明路附近想快快吃一份烧味饭，可以把它当作轻量选项。",
    tags: ["烧鹅饭", "文明路", "快餐"],
  },
  {
    name: "富临食府（惠福东路）",
    district: "越秀",
    category: "粤菜老店",
    budget: "适中",
    address: "广州市越秀区惠福东路417-419号",
    dishes: ["家常粤菜", "啫啫菜", "小炒"],
    note: "惠福东路老牌家常粤菜，适合逛北京路时不想只吃游客店。",
    tags: ["惠福东", "粤菜", "饭局"],
  },
  {
    name: "点都德（聚福楼店）",
    district: "越秀",
    category: "早茶粤菜",
    budget: "适中",
    address: "广州市越秀区惠福东路470号",
    dishes: ["虾饺", "红米肠", "叉烧包"],
    note: "全天茶点比较友好，行程不配合早茶时间也能吃上点心。",
    tags: ["点心", "惠福东", "商圈友好"],
  },
  {
    name: "太平馆西餐厅（北京路）",
    district: "越秀",
    category: "老字号西餐",
    budget: "适中",
    address: "广州市越秀区北京路342-346号",
    dishes: ["烧乳鸽", "瑞士鸡翼", "老派西餐"],
    note: "广州老派西餐记忆，适合想换换口味但仍然留在老城区的人。",
    tags: ["北京路", "老字号", "西餐"],
  },
  {
    name: "北园酒家",
    district: "越秀",
    category: "早茶粤菜",
    budget: "聚餐",
    address: "广州市越秀区小北路200号",
    dishes: ["早茶点心", "传统粤菜", "园林酒家"],
    note: "广州老牌园林酒家之一，适合长辈局和慢慢吃的一餐。",
    tags: ["园林酒家", "老字号", "小北"],
  },
  {
    name: "表姨茶餐厅",
    district: "越秀",
    category: "茶餐厅咖啡",
    budget: "轻松",
    address: "广州市越秀区共和西路49号之一首层",
    dishes: ["港式奶茶", "菠萝油", "碟头饭"],
    note: "东山口附近的轻松补给站，适合逛街中途坐一下。",
    tags: ["东山口", "茶餐厅", "下午"],
  },
  {
    name: "TEA+",
    district: "越秀",
    category: "茶餐厅咖啡",
    budget: "适中",
    address: "广州市越秀区新河浦路54-1号",
    dishes: ["原叶茶", "茶饮", "轻食"],
    note: "东山口慢节奏选项，适合把吃喝和街区散步放在一起。",
    tags: ["东山口", "茶", "慢逛"],
  },
  {
    name: "惠食佳（滨江西店）",
    district: "海珠",
    category: "粤菜老店",
    budget: "聚餐",
    address: "广州市海珠区滨江西路172号",
    dishes: ["啫啫煲", "黄鳝煲仔饭", "传统粤菜"],
    note: "江边认真吃粤菜的稳妥选项，适合晚餐和小聚。",
    tags: ["米其林指南", "滨江西", "粤菜"],
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
  {
    name: "点都德（汇胜楼店）",
    district: "天河",
    category: "早茶粤菜",
    budget: "适中",
    address: "广州市天河区天河路598号百脑汇4楼",
    dishes: ["红米肠", "虾饺", "金沙包"],
    note: "天河商圈里容易安排的茶点选择，适合逛街前后解决一餐。",
    tags: ["天河", "点心", "商圈友好"],
  },
  {
    name: "大鸽饭（棠下店）",
    district: "天河",
    category: "烧腊烧鹅",
    budget: "适中",
    address: "广州市天河区棠下二社涌西路69号天辉大厦1层",
    dishes: ["红烧乳鸽", "鸽饭", "炖汤"],
    note: "乳鸽主题很明确，适合想吃点不一样但仍然是广东味的人。",
    tags: ["乳鸽", "天河", "多人"],
  },
  {
    name: "点都德（环球都会店）",
    district: "天河",
    category: "早茶粤菜",
    budget: "适中",
    address: "广州市天河区花城大道68号环球都会广场2楼",
    dishes: ["虾饺", "凤爪", "红米肠"],
    note: "珠江新城附近的茶点备选，适合游客行程里穿插一顿。",
    tags: ["珠江新城", "点心", "交通方便"],
  },
  {
    name: "广州酒家（体育东店）",
    district: "天河",
    category: "早茶粤菜",
    budget: "适中",
    address: "广州市天河区体育东路112号",
    dishes: ["文昌鸡", "虾饺", "广式点心"],
    note: "天河区想吃广州酒家时的方便选项，适合商务区行程。",
    tags: ["天河", "老字号", "早茶"],
  },
  {
    name: "中山大鸽饭（番禺万博店）",
    district: "番禺",
    category: "烧腊烧鹅",
    budget: "适中",
    address: "广州市番禺区汉溪大道东万博商圈",
    dishes: ["红烧乳鸽", "鸽饭", "烧味"],
    note: "番禺商圈友好的乳鸽选择，去长隆或万博附近可以顺手安排。",
    tags: ["番禺", "乳鸽", "商圈"],
  },
  {
    name: "滋粥楼（番禺店）",
    district: "番禺",
    category: "粥粉面",
    budget: "适中",
    address: "广州市番禺区迎宾路段",
    dishes: ["生滚粥", "海鲜粥", "小炒"],
    note: "番禺吃粥的舒适牌，适合晚上不想吃太油的时候。",
    tags: ["番禺", "粥", "夜宵"],
  },
];

const districtNotes = {
  荔湾: "西关老味浓度最高，早茶、糖水、云吞面、鱼皮、小吃都能串起来。",
  越秀: "北京路、文明路、东山口都在这里，游客友好又不缺老店。",
  海珠: "江边粤菜和社区店更适合晚餐，节奏比商圈松一点。",
  天河: "商圈密度高，适合朋友集合、商务饭局和不想跑远的茶点。",
  番禺: "适合把长隆、万博、郊区行程和一顿广东味放在一起。",
};

const districtFilter = document.querySelector("#districtFilter");
const categoryFilter = document.querySelector("#categoryFilter");
const budgetFilter = document.querySelector("#budgetFilter");
const searchInput = document.querySelector("#searchInput");
const placeGrid = document.querySelector("#placeGrid");
const resultCount = document.querySelector("#resultCount");
const districtGrid = document.querySelector("#districtGrid");
const randomButton = document.querySelector("#randomButton");
const randomPick = document.querySelector("#randomPick");

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

function renderDistricts() {
  districtGrid.innerHTML = "";
  uniqueValues("district").forEach((district) => {
    const districtPlaces = places.filter((place) => place.district === district);
    const categories = [...new Set(districtPlaces.map((place) => place.category))];
    const article = document.createElement("article");
    article.innerHTML = `
      <h3>${district}</h3>
      <p>${districtNotes[district]}</p>
      <p><strong>${districtPlaces.length} 家</strong> · ${categories.join(" / ")}</p>
    `;
    districtGrid.appendChild(article);
  });
}

function pickRandomPlace() {
  const candidates = places.filter(placeMatches);
  const pool = candidates.length ? candidates : places;
  const place = pool[Math.floor(Math.random() * pool.length)];
  randomPick.textContent = `${place.name}：${place.dishes[0]}，在${place.district}，今晚就它吧。`;
}

fillFilter(districtFilter, uniqueValues("district"));
fillFilter(categoryFilter, uniqueValues("category"));

[districtFilter, categoryFilter, budgetFilter, searchInput].forEach((control) => {
  control.addEventListener("input", () => {
    renderPlaces();
    pickRandomPlace();
  });
});

randomButton.addEventListener("click", pickRandomPlace);

renderPlaces();
renderDistricts();
pickRandomPlace();
