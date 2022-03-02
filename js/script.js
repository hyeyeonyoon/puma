var $cont_01 = [
  ["new_01_01.jpg", "KING Platinum 21 FG/AG" , "Men's Soccer Cleats"],
  ["new_02_01.jpg", "FUSE" , "Training Shoes"],
  ["new_03_01.jpg", "Suede RE.GEN" , "Sneakers"],
  ["new_04_01.jpg", "Leadcat" , "G Sandals"],
  ["new_05_01.jpg", "COOLADAPT" , "Women’s Running Tank Top"],
  ["new_06_01.jpg", "Sonora Waist" , "BAG 2.0"],
  ["new_07_01.jpg", "High Court Regal Mid" , "Women's Sneakers"],
  ["new_08_01.jpg", "Cali Star Rainbow" , "Women's Sneakers"],
  ["new_09_01.jpg", "RS-Z Red" , "CAMPUS"],
  ["new_10_01.jpg", "MB.01" , "BUZZ CITY"],
];

var $content1 = document.querySelector("#cont01 .wrap");

var $content1_box = `
  <div class="main_box">
    <div class="img"></div>
    <div class="txt">
      <h3>Products Launch</h3>
      <p>Stay in the know with the latest drops and upcoming launches,<br> plus early access to PUMA exclusives. Catch it here first.</p>
    </div>
  </div>
`;

for(v of $cont_01){
  $content1_box += `
    <div class="product_box">
    <div class="img" style="background-image: url(./img/products/${v[0]});"></div>
    <div class="txt">
      <h3>${v[1]}</h3>
      <p>${v[2]}</p>
      <a href="">More</a>
    </div>
  </div>
  `;
}

$content1.innerHTML = $content1_box;

/////////////////////////////////////////////////

var $cont_02 = [
  ["category_01.jpg", "EVERYDAY", "BEST FOR: A RUN HERE AND THERE."],
  ["category_02.jpg", "COMPETITIVE", "BEST FOR: CHASING THE NEXT RACE."],
  ["category_03.jpg", "LONG DISTANCE", "BEST FOR: RACKING UP THE MILES."],
];

var $content2 = document.querySelector("#cont02 .wrap");

var $content2_box = "";

for(v of $cont_02){
  $content2_box += `
    <div class="box">
      <div class="img" style="background-image: url(./img/${v[0]});"></div>
      <div class="txt">
        <h3>${v[1]}</h3>
        <p>${v[2]}</p>
        <a href="">Shop Now</a>
      </div>
    </div>
  `;
}

$content2.innerHTML = $content2_box;

/////////////////////////////////////////////////

var $cont_03 = [
  ["collection_01.jpg", "SOFT ON ANOTHER LEVEL", "CLOUDSPUN"],
  ["collection_02.jpg", "ESCAPE FROM ROUTINE", "PUMA x HELLY HANSEN"],
  ["collection_03.jpg", "EMPOWERED PEOPLE. CLEANER PLANET.", "PUMA x FIRST MILE"],
];

var $content3 = document.querySelector("#cont03 .wrap");
var $content3_box = "";
for(v of $cont_03){
  $content3_box += `
    <div class="box">
      <div class="img" style="background-image: url(./img/${v[0]});"></div>
      <div class="txt">
        <h3>${v[1]}</h3>
        <p>${v[2]}</p>
        <a href="">Shop Now</a>
      </div>
    </div>
  `;
}
$content3.innerHTML = $content3_box;



