// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");

function changeColor(picker) {
  // Set the fill style
  overlay.style.fill = picker.toHEXString();
}

// 位置数据
const svgElement = document.getElementById('product-svg');

const numberPositions = [
  
  {id: 'rect1', coords: "1289,796,1318,820"},
  {id: 'rect2', coords: "1240,796,1271,820"},
  {id: 'rect3', coords: "1191,796,1222,820"},
  {id: 'rect4', coords: "1143,796,1174,820"},
  {id: 'rect5', coords: "1095,796,1126,820"},
  {id: 'rect6', coords: "1047,796,1078,820"},

  {id: 'rect7', coords: "1289,692,1318,715"},
  {id: 'rect8', coords: "1240,692,1271,715"},
  {id: 'rect9', coords: "1191,692,1222,715"},
  {id: 'rect10', coords: "1143,692,1174,715"},
  {id: 'rect11', coords: "1095,692,1126,715"},
  {id: 'rect12', coords: "1047,692,1078,715"},

  {id: 'rect13', coords: "1281,664,1310,690"},
  {id: 'rect14', coords: "1232,664,1262,690"},
  {id: 'rect15', coords: "1183,664,1214,690"},
  {id: 'rect16', coords: "1135,664,1166,690"},
  {id: 'rect17', coords: "1087,664,1118,690"},
  {id: 'rect18', coords: "1039,664,1069,690"},

  {id: 'rect19', coords: "1273,589,1303,614"},
  {id: 'rect20', coords: "1224,589,1254,614"},
  {id: 'rect21', coords: "1176,589,1206,614"},
  {id: 'rect22', coords: "1128,589,1158,614"},
  {id: 'rect23', coords: "1088,589,1118,614"},
  {id: 'rect24', coords: "1039,589,1070,614"},

  {id: 'rect25', coords: "1273,559,1303,584"},
  {id: 'rect26', coords: "1224,559,1254,584"},
  {id: 'rect27', coords: "1176,559,1206,584"},
  {id: 'rect28', coords: "1128,559,1158,584"},
  {id: 'rect29', coords: "1088,559,1118,584"},
  {id: 'rect30', coords: "1039,559,1069,584"},

  {id: 'rect31', coords: "1449,796,1478,820"},
  {id: 'rect32', coords: "1497,796,1526,820"},
  {id: 'rect33', coords: "1545,796,1574,820"},
  {id: 'rect34', coords: "1593,796,1622,820"},
  {id: 'rect35', coords: "1641,796,1670,820"},

  {id: 'rect36', coords: "1431,692,1462,715"},
  {id: 'rect37', coords: "1480,692,1511,715"},
  {id: 'rect38', coords: "1528,692,1559,715"},
  {id: 'rect39', coords: "1576,692,1607,715"},
  {id: 'rect40', coords: "1624,692,1655,715"},

  {id: 'rect41', coords: "1423,664,1454,690"},
  {id: 'rect42', coords: "1471,664,1502,690"},
  {id: 'rect43', coords: "1519,664,1550,690"},
  {id: 'rect44', coords: "1567,664,1598,690"},
  {id: 'rect45', coords: "1615,664,1646,690"},

  {id: 'rect46', coords: "1448,589,1478,614"},
  {id: 'rect47', coords: "1489,589,1519,614"},
  {id: 'rect48', coords: "1537,589,1567,614"},
  {id: 'rect49', coords: "1585,589,1615,614"},
  {id: 'rect50', coords: "1634,589,1664,614"},
  {id: 'rect51', coords: "1680,589,1710,614"},

  {id: 'rect52', coords: "1440,559,1470,584"},
  {id: 'rect53', coords: "1480,559,1510,584"},
  {id: 'rect54', coords: "1528,559,1558,584"},
  {id: 'rect55', coords: "1576,559,1606,584"},
  {id: 'rect56', coords: "1624,559,1654,584"},
  {id: 'rect57', coords: "1672,559,1702,584"},

  {id: 'rect61', coords: "759,664,792,685"},
  {id: 'rect62', coords: "758,710,792,734"},
  {id: 'rect63', coords: "728,665,759,685"},
  {id: 'rect64', coords: "728,710,758,734"},

  {id: 'rect65', coords: "633,674,663,696"},
  {id: 'rect66', coords: "625,711,655,734"},
  {id: 'rect67', coords: "602,674,632,696"},
  {id: 'rect68', coords: "595,711,625,734"},

  {id: 'rect71', coords: "584,570,615,593"},
  {id: 'rect72', coords: "591,532,623,555"},
  {id: 'rect73', coords: "598,494,630,517"},
  {id: 'rect74', coords: "606,456,638,479"},
  {id: 'rect75', coords: "614,418,645,441"},

  {id: 'rect76', coords: "554,570,585,593"},
  {id: 'rect77', coords: "561,532,593,555"},
  {id: 'rect78', coords: "567,494,599,517"},
  {id: 'rect79', coords: "575,456,607,479"},
  {id: 'rect80', coords: "583,418,614,441"},
  
  {id: 'rect81', coords: "270,409,301,434"},
  {id: 'rect82', coords: "311,409,341,434"},
  {id: 'rect83', coords: "360,409,392,434"},
  {id: 'rect84', coords: "399,409,430,434"},
  {id: 'rect85', coords: "448,409,480,434"},

  {id: 'rect91', coords: "192,733,223,754"},
  {id: 'rect92', coords: "240,733,269,754"},
  {id: 'rect93', coords: "287,733,318,754"},
  {id: 'rect94', coords: "336,733,367,754"},
  {id: 'rect95', coords: "382,733,413,754"},

  {id: 'rect96', coords: "390,703,421,724"},
  {id: 'rect97', coords: "344,703,375,724"},
  {id: 'rect98', coords: "295,703,326,724"},
  {id: 'rect99', coords: "248,703,277,724"},
  {id: 'rect100', coords: "200,703,231,724"},
  
  {id: 'rect101', coords: "263,930,294,952"},
  {id: 'rect102', coords: "248,977,278,1000"},
  {id: 'rect103', coords: "240,1025,270,1048"},
  {id: 'rect104', coords: "233,1073,262,1094"},

  {id: 'rect105', coords: "223,930,254,952"},
  {id: 'rect106', coords: "208,977,238,1000"},
  {id: 'rect107', coords: "200,1025,230,1048"},
  {id: 'rect108', coords: "193,1073,222,1094"},

  {id: 'rect111', coords: "1039,494,1070,519"},
  {id: 'rect112', coords: "1079,494,1110,519"},
  {id: 'rect113', coords: "1128,494,1158,519"},
  {id: 'rect114', coords: "1168,494,1198,519"},
  {id: 'rect115', coords: "1216,494,1246,519"},

  {id: 'rect116', coords: "1472,494,1502,519"},
  {id: 'rect117', coords: "1520,494,1550,519"},
  {id: 'rect118', coords: "1560,494,1590,519"},
  {id: 'rect119', coords: "1600,494,1630,519"},
  {id: 'rect120', coords: "1648,494,1678,519"}
];

numberPositions.forEach(pos => {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const [x1, y1, x2, y2] = pos.coords.split(',').map(Number);
  rect.setAttribute('id', pos.id);
  rect.setAttribute('x', Math.min(x1, x2));
  rect.setAttribute('y', Math.min(y1, y2));
  rect.setAttribute('width', Math.abs(x2 - x1));
  rect.setAttribute('height', Math.abs(y2 - y1));
  rect.setAttribute('fill', 'red'); 
  rect.setAttribute('stroke', 'red');
  rect.setAttribute('stroke-width', '2');
  svgElement.appendChild(rect);
});

// Function to update rect colors based on JSON state
function updateRectColors() {
  fetch('state.json')
    .then(response => response.json())
    .then(data => {
      Object.keys(data).forEach(key => {
        const rect = document.getElementById(key);
        if (rect) {
          if (data[key] === 'off') {
            rect.setAttribute('fill', 'green');
            rect.setAttribute('filter', 'url(#glow)');
          } else {
            rect.setAttribute('fill', 'red');
            rect.removeAttribute('filter');
          }
        }
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}


// Update rect colors every 10 seconds
setInterval(updateRectColors, 10000);


// Thats it!

// BONUS

// This function simulates background-size: cover for the SVG inside its parent div, so it would likely be helpful for people migrating from using images to using an SVG locked onto with a photo.

// Reference the SVG
const svg = document.getElementById("product-svg");

// Reference the image
const img = document.getElementById("background-image");

// Place the SVG inside a parent div, reference it
const container = document.getElementById("container");

// (On resize)
window.onresize = () => simulateCover(container, svg, img, 1920, 1280);

// (On load)
simulateCover(container, svg, img, 1920, 1280);

// Pass the parent div, and the SVG (child)
// Pass the image
// x and y are the native dimensions of the image (1920, 1280 in our example)
function simulateCover(parent, child, image, x, y) {
  let { width, height } = parent.getBoundingClientRect();
  let yPercentage = x / y;
  let xPercentage = y / x;

  // Set styles, these can be moved to CSS if need be
  parent.setAttribute("style", "position: relative; overflow: hidden;");

  child.setAttribute(
    "style",
    "display: block; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  );
  
  image.setAttribute(
    "style",
    "display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  );

  if (width < height * yPercentage) {
    child.style.width = height * yPercentage + "px";
    child.style.height = height + "px";
    
    image.style.width = height * yPercentage + "px";
    image.style.height = height + "px";

  } else {
    child.style.width = width + "px";
    child.style.height = width * xPercentage + "px";
    
    image.style.width = width + "px";
    image.style.height = width * xPercentage + "px";
    
    
  }
}
