// Menu data (Model).
// Every dish uses a dish-specific photo. Local generated/bundled photos are preferred;
// the remaining dishes use their intended Unsplash photo IDs as stable remote assets.
// There is deliberately NO "rotate a generic food image" fallback.

const namedLocalPhotos = {
  'Paneer Tikka': '/images/paneer-tikka.jpg',
  'Masala Dosa': '/images/masala-dosa.jpg',
  'Butter Chicken': '/images/butter-chicken.jpg',
  'Veg Hakka Noodles': '/images/veg-hakka-noodles.jpg',
  'Hyderabadi Dum Biryani': '/images/biryani.jpg',
  'Dal Makhani': '/images/dal-makhani.jpg',
  'Garlic Naan': '/images/garlic-naan.jpg',
  'Garden Salad': '/images/garden-salad.jpg',
  'Tomato Basil Soup': '/images/tomato-basil-soup.jpg',
  'Velvet Tiramisu': '/images/velvet-tiramisu.jpg',
  'Pistachio Gelato': '/images/pistachio-gelato.jpg',
  'Chocolate Truffle Cake': '/images/chocolate-truffle-cake.jpg',
  'Masala Chai': '/images/masala-chai.jpg',
  'Cappuccino': '/images/cappuccino.jpg',
  'Mango Lassi': '/images/mango-lassi.jpg',
  'Fresh Lime Soda': '/images/fresh-lime-soda.jpg',
  'Avocado Toast': '/images/avocado-toast.jpg',
  'Pancake Stack': '/images/pancake-stack.jpg',
  'Grilled Chicken Steak': '/images/grilled-chicken-steak.jpg',
  'Citrus Salmon': '/images/citrus-salmon.jpg',
  'Idli Sambar': '/images/idli-sambar.jpg',
  'Chilli Paneer': '/images/chilli-paneer.jpg',
  'Berry Cheesecake': '/images/berry-cheesecake.jpg',
  'Seasonal Fruit Bowl': '/images/seasonal-fruit-bowl.jpg',
  'Poha': '/images/poha.jpg',
  'Aloo Paratha': '/images/aloo-paratha.jpg',
  'Filter Coffee': '/images/filter-coffee.jpg',
  'Iced Latte': '/images/iced-latte.jpg',
  'Hot Chocolate': '/images/hot-chocolate.jpg',
  'Veg Uttapam': '/images/veg-uttapam.jpg',
  'Chole Bhature': '/images/chole-bhature.jpg',
  'Paneer Butter Masala': '/images/paneer-butter-masala.jpg',
  'Gulab Jamun': '/images/gulab-jamun.jpg',
  'Rasmalai': '/images/rasmalai.jpg'
};

const unsplash = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1000&q=85`;

const localDishPhoto = (name, category, id, photoId) =>
  namedLocalPhotos[name] || unsplash(photoId);

const mealPhoto = (name) => namedLocalPhotos[name];

const item = (id, name, category, meal, price, veg, description, ingredients, allergens, calories, spice, time, image, tag) => ({
  id, name, category, meal, price, veg, description, ingredients, allergens, calories, spice, time,
  rating: Number((4.5 + ((id * 7) % 5) / 10).toFixed(1)), image: localDishPhoto(name, category, id, image), tag, serving: '1 portion'
});

export const dishes = [
  item(1,'Paneer Tikka','North Indian','Dinner',329,true,'Tandoor-charred paneer with a smoky yoghurt and spice marinade.',['Paneer','Hung curd','Kashmiri chilli','Ginger','Garlic','Lemon','Kasuri methi'],['Milk'],390,2,'18 min','photo-1567188040759-fb8a883dc6d1','Chef’s pick'),
  item(2,'Masala Dosa','South Indian','Breakfast',229,true,'Golden, crisp dosa wrapped around a warmly spiced potato masala.',['Rice','Urad dal','Potato','Mustard seeds','Curry leaves','Ghee','Coconut chutney'],['Milk'],480,1,'16 min','photo-1668236543090-82eba5ee5976','Bestseller'),
  item(3,'Butter Chicken','North Indian','Dinner',449,false,'Tandoor chicken simmered in a velvety tomato, butter and cream gravy.',['Chicken','Tomato','Butter','Cream','Garam masala','Kasuri methi'],['Milk'],610,2,'24 min','photo-1603894584373-5c5c5c3e7b5a','Signature'),
  item(4,'Margherita Pizza','Pizza','Dinner',399,true,'Stone-baked pizza with tomato, mozzarella and fragrant basil.',['Pizza dough','Tomato sauce','Mozzarella','Basil','Olive oil'],['Gluten','Milk'],690,1,'18 min','photo-1574071318508-1cdbab80d002','Classic'),
  item(5,'Penne Arrabbiata','Italian','Lunch',369,true,'Penne tossed in a lively garlic and chilli tomato sauce.',['Penne','Tomatoes','Garlic','Chilli flakes','Basil','Parmesan'],['Gluten','Milk'],530,2,'17 min','photo-1473093295043-cdd812d0e601','Spicy favourite'),
  item(6,'Veg Hakka Noodles','Chinese','Lunch',279,true,'Wok-tossed noodles with crisp vegetables and a savoury house sauce.',['Noodles','Cabbage','Carrot','Capsicum','Spring onion','Soy sauce'],['Gluten','Soy'],460,1,'14 min','photo-1585032226651-759b368d724b','Wok tossed'),
  item(7,'Cartell Smash Burger','Burgers','Lunch',429,false,'A juicy double patty with caramelised onion, aged cheese and house sauce.',['Patty','Brioche bun','Aged cheese','Onion','House sauce','Lettuce'],['Milk','Gluten','Egg'],780,1,'15 min','photo-1568901346375-23c9450c58cd','House special'),
  item(8,'Hyderabadi Dum Biryani','Biryani','Dinner',389,false,'Fragrant basmati rice layered with slow-cooked chicken and whole spices.',['Basmati rice','Chicken','Yoghurt','Mint','Saffron','Whole spices'],['Milk'],640,2,'28 min','photo-1563379091339-03246963d51a','Slow cooked'),
  item(9,'Dal Makhani','Main Course','Dinner',299,true,'Black lentils slow-cooked until creamy, finished with butter and cream.',['Black lentils','Kidney beans','Butter','Cream','Tomato','Spices'],['Milk'],510,1,'20 min','photo-1546833999-b9f581a1996d','Comfort food'),
  item(10,'Garlic Naan','Breads','Dinner',99,true,'Soft tandoor-baked naan brushed with garlic butter and herbs.',['Refined flour','Yoghurt','Garlic','Butter','Coriander'],['Gluten','Milk'],260,0,'8 min','photo-1601050690597-df0568f70950','Fresh from tandoor'),
  item(11,'Garden Salad','Salads','Lunch',249,true,'A bright bowl of seasonal greens, cucumber, avocado and citrus dressing.',['Lettuce','Cucumber','Avocado','Pumpkin seeds','Citrus dressing'],['Seeds'],280,0,'10 min','photo-1540420773420-3366772f4999','Fresh & light'),
  item(12,'Tomato Basil Soup','Soups','Lunch',199,true,'Roasted tomato soup finished with basil and a touch of cream.',['Tomatoes','Basil','Garlic','Cream','Vegetable stock'],['Milk'],210,0,'10 min','photo-1547592180-85f173990554','Warm & cosy'),
  item(13,'Velvet Tiramisu','Desserts','Desserts',299,true,'Espresso-soaked sponge layered with mascarpone cream and cocoa.',['Mascarpone','Espresso','Sponge','Cocoa','Vanilla'],['Milk','Egg','Gluten'],390,0,'6 min','photo-1571877227200-a0d98ea607e9','Sweet finish'),
  item(14,'Pistachio Gelato','Ice Cream','Desserts',229,true,'Silky pistachio gelato with a delicate roasted-nut praline.',['Milk','Cream','Pistachio','Sugar','Praline'],['Milk','Tree nuts'],330,0,'5 min','photo-1563805042-7684c019e1cb','Chilled treat'),
  item(15,'Chocolate Truffle Cake','Cakes & Pastries','Desserts',249,true,'Rich chocolate sponge wrapped in a glossy dark-chocolate ganache.',['Cocoa','Dark chocolate','Flour','Butter','Cream'],['Gluten','Milk','Egg'],420,0,'5 min','photo-1578985545062-69928b1d9587','Made for sharing'),
  item(16,'Masala Chai','Tea & Coffee','Tea & Coffee',99,true,'Freshly brewed Indian tea with ginger, cardamom and warming spices.',['Black tea','Milk','Ginger','Cardamom','Sugar'],['Milk'],120,1,'7 min','photo-1571934811356-5ceed4ab3fa2','Tea time'),
  item(17,'Cappuccino','Tea & Coffee','Tea & Coffee',159,true,'Double espresso topped with silky steamed milk foam.',['Espresso','Milk'],['Milk'],140,0,'6 min','photo-1578374173705-7c4b9f8f8b4a','Coffee bar'),
  item(18,'Mango Lassi','Beverages','Beverages',149,true,'A chilled yoghurt drink blended with ripe mango and a hint of cardamom.',['Mango','Yoghurt','Milk','Cardamom'],['Milk'],230,0,'5 min','photo-1513558161293-cdaf765edfd4','Cooler'),
  item(19,'Fresh Lime Soda','Beverages','Beverages',119,true,'Fresh lime, sparkling soda and mint; choose sweet or salted.',['Lime','Soda','Mint','Sugar or salt'],[],90,0,'4 min','photo-1551024709-8f23befc6f87','Refreshing'),
  item(20,'Avocado Toast','Brunch','Brunch',289,true,'Sourdough toast topped with smashed avocado, herbs and chilli flakes.',['Sourdough','Avocado','Lemon','Chilli flakes','Microgreens'],['Gluten'],360,1,'12 min','photo-1525351484163-7529414344d8','Brunch favourite'),
  item(21,'Pancake Stack','Breakfast','Breakfast',279,true,'Fluffy pancakes with berries, maple syrup and a little butter.',['Flour','Milk','Egg','Berries','Maple syrup','Butter'],['Gluten','Milk','Egg'],450,0,'15 min','photo-1528207776546-365bb710ee93','Morning treat'),
  item(22,'Grilled Chicken Steak','Continental','Dinner',549,false,'Herb-marinated chicken with seasonal vegetables and pepper jus.',['Chicken breast','Thyme','Garlic','Seasonal vegetables','Pepper jus'],[],560,1,'22 min','photo-1532550907401-a500c9a57435','Grill special'),
  item(23,'Citrus Salmon','Continental','Dinner',699,false,'Pan-seared salmon with citrus sauce and golden roasted potatoes.',['Salmon','Orange','Lemon','Potato','Herbs'],['Fish','Milk'],510,0,'22 min','photo-1467003909585-2f8a72700288','Chef’s selection'),
  item(24,'Idli Sambar','South Indian','Breakfast',179,true,'Soft steamed idlis served with homestyle sambar and coconut chutney.',['Rice','Urad dal','Lentils','Vegetables','Coconut'],[],320,0,'12 min','photo-1589301760014-d929f3979dbc','Light & hearty'),
  item(25,'Chilli Paneer','Chinese','Dinner',319,true,'Crisp paneer tossed with peppers, onion and a tangy chilli glaze.',['Paneer','Capsicum','Onion','Soy sauce','Garlic','Chilli'],['Milk','Soy'],430,2,'16 min','photo-1565299624946-b28f40a0ae38','Indo-Chinese'),
  item(26,'Berry Cheesecake','Cakes & Pastries','Desserts',279,true,'Creamy cheesecake finished with a bright seasonal berry compote.',['Cream cheese','Biscuit crumb','Berries','Sugar','Butter'],['Milk','Gluten'],440,0,'7 min','photo-1533134242443-d4fd215305ad','Sweet favourite'),
  item(27,'Seasonal Fruit Bowl','Breakfast','Breakfast',199,true,'A fresh mix of seasonal fruit, mint and a little citrus zest.',['Seasonal fruits','Mint','Orange zest'],[],180,0,'5 min','photo-1490474418585-ba9ba8b3c7a3','Fresh start'),
  item(28,'Poha','Breakfast','Breakfast',149,true,'Light and fluffy poha with curry leaves, peanuts and fresh lemon.',['Flattened rice','Onion','Peanuts','Curry leaves','Lemon','Coriander'],['Peanuts'],290,1,'12 min','photo-1601050690117-94f5f6fa8bd7','Homestyle'),
  item(29,'Aloo Paratha','North Indian','Breakfast',189,true,'Golden whole-wheat paratha stuffed with spiced potato, served with curd.',['Wheat flour','Potato','Cumin','Coriander','Curd','Butter'],['Gluten','Milk'],420,1,'16 min','photo-1626132647523-66f5bf380027','Breakfast classic'),
  item(30,'Filter Coffee','Tea & Coffee','Tea & Coffee',129,true,'South Indian filter coffee with a rich aroma and creamy finish.',['Coffee decoction','Milk','Sugar'],['Milk'],110,0,'6 min','photo-1509042239860-f550ce710b93','South Indian classic'),
  item(31,'Iced Latte','Tea & Coffee','Tea & Coffee',179,true,'Chilled espresso and milk over ice for a smooth coffee break.',['Espresso','Milk','Ice'],['Milk'],150,0,'5 min','photo-1461023058943-07fcbe16d735','Coffee bar'),
  item(32,'Hot Chocolate','Tea & Coffee','Tea & Coffee',189,true,'Velvety hot chocolate finished with a soft milk foam.',['Milk','Dark chocolate','Cocoa','Sugar'],['Milk'],240,0,'7 min','photo-1542990253-0b8be8f7f7b2','Cosy sip'),
  item(33,'Veg Uttapam','South Indian','Breakfast',199,true,'Soft, savoury rice-lentil pancake topped with onion, tomato and herbs.',['Rice','Urad dal','Onion','Tomato','Coriander'],[],350,1,'14 min','photo-1630383249896-424e482df921','South Indian'),
  item(34,'Chole Bhature','North Indian','Lunch',249,true,'Fluffy bhature served with spiced chickpea curry and pickled onion.',['Chickpeas','Flour','Tomato','Onion','Ginger','Spices'],['Gluten'],610,2,'20 min','photo-1601050690597-df0568f70950','Street favourite'),
  item(35,'Paneer Butter Masala','North Indian','Dinner',349,true,'Paneer cubes in a mellow tomato-cashew gravy with warming spices.',['Paneer','Tomato','Cashew','Cream','Butter','Spices'],['Milk','Tree nuts'],540,1,'20 min','photo-1631452180519-c014fe946bc7','Guest favourite'),
  item(36,'Rava Idli','South Indian','Breakfast',169,true,'Steamed semolina idlis with mustard seeds, curry leaves and cashews.',['Semolina','Yoghurt','Mustard seeds','Curry leaves','Cashews'],['Gluten','Milk','Tree nuts'],300,0,'14 min','photo-1569058242253-92a9c755a0ec','Light & fluffy'),
  item(37,'Veg Club Sandwich','Brunch','Brunch',259,true,'Toasted sandwich layered with vegetables, cheese and a herby spread.',['Bread','Cucumber','Tomato','Lettuce','Cheese','Herb spread'],['Gluten','Milk'],390,0,'12 min','photo-1528735602780-2552fd46c7af','Brunch pick'),
  item(38,'French Toast','Breakfast','Breakfast',229,true,'Golden brioche French toast with berries and maple drizzle.',['Brioche','Egg','Milk','Cinnamon','Berries','Maple syrup'],['Gluten','Milk','Egg'],410,0,'13 min','photo-1484723091739-30a097e8f929','Sweet morning'),
  item(39,'Caesar Salad','Salads','Lunch',289,true,'Crisp romaine, parmesan and crunchy croutons with Caesar dressing.',['Romaine','Parmesan','Croutons','Caesar dressing'],['Milk','Gluten','Egg'],330,0,'10 min','photo-1550304943-4f24f54ddde9','Fresh favourite'),
  item(40,'Gulab Jamun','Indian Sweets','Desserts',149,true,'Soft milk dumplings soaked in fragrant cardamom sugar syrup.',['Milk solids','Flour','Sugar','Cardamom','Rose water'],['Milk','Gluten'],280,0,'5 min','photo-1666190092159-4a4b7a8f4f6b','Indian sweet'),
  item(46,'Rasmalai','Indian Sweets','Desserts',179,true,'Soft chenna discs served in chilled, saffron-scented milk with pistachio.',['Milk','Chenna','Sugar','Saffron','Cardamom','Pistachio'],['Milk','Tree nuts'],310,0,'5 min','/images/rasmalai.jpg','Classic Indian sweet'),
  item(41,'Belgian Waffle','Breakfast','Breakfast',249,true,'Warm crisp waffle with berries and a drizzle of chocolate.',['Flour','Milk','Egg','Butter','Berries','Chocolate'],['Gluten','Milk','Egg'],460,0,'14 min','photo-1562376552-0d160a2f238d','Weekend treat'),
  item(42,'Mushroom Alfredo','Italian','Dinner',389,true,'Creamy fettuccine with sautéed mushrooms, parmesan and herbs.',['Fettuccine','Mushrooms','Cream','Parmesan','Garlic','Parsley'],['Gluten','Milk'],590,0,'18 min','photo-1645112411341-6c4fd023714a','Creamy comfort'),
  item(43,'Classic Lemon Iced Tea','Beverages','Beverages',139,true,'Black tea shaken with lemon and served chilled over ice.',['Black tea','Lemon','Sugar','Ice'],[],80,0,'5 min','photo-1556679343-c7306c1976bc','Cool & bright'),
  item(44,'Mojito Cooler','Beverages','Beverages',169,true,'Mint, lime and sparkling soda make a fresh, lively cooler.',['Mint','Lime','Soda','Sugar','Ice'],[],95,0,'5 min','photo-1551538827-9c037cb4f32a','Refreshing'),
  item(45,'Sundried Tomato Bruschetta','Starters','Brunch',229,true,'Toasted sourdough with tomato, basil and a drizzle of olive oil.',['Sourdough','Tomato','Basil','Olive oil','Garlic'],['Gluten'],260,0,'9 min','photo-1572695157366-5e585ab2b69f','To share'),
];

export const categories = ['All','Veg','Non-Veg','North Indian','South Indian','Italian','Chinese','Continental','Starters','Main Course','Pizza','Pasta','Burgers','Biryani','Breads','Salads','Soups','Breakfast','Brunch','Desserts','Indian Sweets','Cakes & Pastries','Ice Cream','Tea & Coffee','Beverages'];
export const mealGroups = [
  {name:'Breakfast', subtitle:'Slow mornings, happy plates', image: mealPhoto('Poha')},
  {name:'Brunch', subtitle:'A little extra time at the table', image: mealPhoto('Avocado Toast')},
  {name:'Lunch', subtitle:'Fresh, bright midday favourites', image: mealPhoto('Veg Hakka Noodles')},
  {name:'Dinner', subtitle:'Comfort worth coming back for', image: mealPhoto('Hyderabadi Dum Biryani')},
  {name:'Tea & Coffee', subtitle:'Your little pause in the day', image: mealPhoto('Cappuccino')},
  {name:'Desserts', subtitle:'Always save room for sweet', image: mealPhoto('Chocolate Truffle Cake')},
];
export const offers=[{id:1,title:'A little welcome treat',text:'Enjoy ₹150 off your first order.',code:'FIRST150',tag:'FIRST ORDER'},{id:2,title:'A table for two',text:'Order two mains and enjoy a dessert on us.',code:'DATEBITE',tag:'DATE NIGHT'},{id:3,title:'Midweek cravings',text:'Take 20% off between 3–6 PM.',code:'CRAVE20',tag:'LIMITED TIME'}];
export const getDishes=()=>dishes;
export const filterDishes=(items,category,query='',meal='All')=>items.filter(d=>(meal==='All'||d.meal===meal)&&(category==='All'||category==='Veg'&&d.veg||category==='Non-Veg'&&!d.veg||d.category===category)&&`${d.name} ${d.category} ${d.meal} ${d.ingredients.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim()));
