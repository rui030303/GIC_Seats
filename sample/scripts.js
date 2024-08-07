// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");

function changeColor(picker) {
  // Set the fill style
  overlay.style.fill = picker.toHEXString();
}

// 位置数据
const svgElement = document.getElementById('product-svg');

const numberPositions = [
  
  {id: 1, coords: "1289,796,1318,820"},
  {id: 2, coords: "1240,796,1271,820"},
  {id: 3, coords: "1191,796,1222,820"},
  {id: 4, coords: "1143,796,1174,820"},
  {id: 5, coords: "1095,796,1126,820"},
  {id: 6, coords: "1047,796,1078,820"},

  {id: 7, coords: "1289,692,1318,715"},
  {id: 8, coords: "1240,692,1271,715"},
  {id: 9, coords: "1191,692,1222,715"},
  {id: 10, coords: "1143,692,1174,715"},
  {id: 11, coords: "1095,692,1126,715"},
  {id: 12, coords: "1047,692,1078,715"},

  {id: 13, coords: "1281,664,1310,690"},
  {id: 14, coords: "1232,664,1262,690"},
  {id: 15, coords: "1183,664,1214,690"},
  {id: 16, coords: "1135,664,1166,690"},
  {id: 17, coords: "1087,664,1118,690"},
  {id: 18, coords: "1039,664,1069,690"},

  {id: 19, coords: "1273,589,1303,614"},
  {id: 20, coords: "1224,589,1254,614"},
  {id: 21, coords: "1176,589,1206,614"},
  {id: 22, coords: "1128,589,1158,614"},
  {id: 23, coords: "1088,589,1118,614"},
  {id: 24, coords: "1039,589,1070,614"},

  {id: 25, coords: "1273,559,1303,584"},
  {id: 26, coords: "1224,559,1254,584"},
  {id: 27, coords: "1176,559,1206,584"},
  {id: 28, coords: "1128,559,1158,584"},
  {id: 29, coords: "1088,559,1118,584"},
  {id: 30, coords: "1039,559,1069,584"},

  {id: 31, coords: "1449,796,1478,820"},
  {id: 32, coords: "1497,796,1526,820"},
  {id: 33, coords: "1545,796,1574,820"},
  {id: 34, coords: "1593,796,1622,820"},
  {id: 35, coords: "1641,796,1670,820"},

  {id: 36, coords: "1431,692,1462,715"},
  {id: 37, coords: "1480,692,1511,715"},
  {id: 38, coords: "1528,692,1559,715"},
  {id: 39, coords: "1576,692,1607,715"},
  {id: 40, coords: "1624,692,1655,715"},

  {id: 41, coords: "1423,664,1454,690"},
  {id: 42, coords: "1471,664,1502,690"},
  {id: 43, coords: "1519,664,1550,690"},
  {id: 44, coords: "1567,664,1598,690"},
  {id: 45, coords: "1615,664,1646,690"},

  {id: 46, coords: "1448,589,1478,614"},
  {id: 47, coords: "1489,589,1519,614"},
  {id: 48, coords: "1537,589,1567,614"},
  {id: 49, coords: "1585,589,1615,614"},
  {id: 50, coords: "1634,589,1664,614"},
  {id: 51, coords: "1680,589,1710,614"},

  {id: 52, coords: "1440,559,1470,584"},
  {id: 53, coords: "1480,559,1510,584"},
  {id: 54, coords: "1528,559,1558,584"},
  {id: 55, coords: "1576,559,1606,584"},
  {id: 56, coords: "1624,559,1654,584"},
  {id: 57, coords: "1672,559,1702,584"},

  {id: 61, coords: "759,664,792,687"},
  {id: 62, coords: "758,710,792,735"},
  {id: 63, coords: "728,665,759,687"},
  {id: 64, coords: "728,710,758,735"},

  {id: 65, coords: "633,674,663,696"},
  {id: 66, coords: "625,711,655,735"},
  {id: 67, coords: "601,674,632,696"},
  {id: 68, coords: "592,711,623,735"},

  {id: 71, coords: "584,570,615,593"},
  {id: 72, coords: "591,532,623,555"},
  {id: 73, coords: "598,494,630,517"},
  {id: 74, coords: "606,456,638,479"},
  {id: 75, coords: "614,418,645,441"},

  {id: 76, coords: "554,570,585,593"},
  {id: 77, coords: "561,532,593,555"},
  {id: 78, coords: "567,494,599,517"},
  {id: 79, coords: "575,456,607,479"},
  {id: 80, coords: "583,418,614,441"},
  
  {id: 81, coords: "270,408,301,434"},
  {id: 82, coords: "311,408,341,434"},
  {id: 83, coords: "360,408,392,434"},
  {id: 84, coords: "399,408,430,434"},
  {id: 85, coords: "448,408,480,434"},

  {id: 91, coords: "192,733,223,754"},
  {id: 92, coords: "240,733,269,754"},
  {id: 93, coords: "287,733,318,754"},
  {id: 94, coords: "336,733,367,754"},
  {id: 95, coords: "382,733,413,754"},

  {id: 96, coords: "390,702,421,726"},
  {id: 97, coords: "344,702,375,726"},
  {id: 98, coords: "295,702,326,726"},
  {id: 99, coords: "248,702,277,726"},
  {id: 100, coords: "200,702,231,726"},
  
  {id: 101, coords: "263,930,294,952"},
  {id: 102, coords: "248,977,278,1000"},
  {id: 103, coords: "240,1025,270,1048"},
  {id: 104, coords: "233,1073,262,1094"},

  {id: 105, coords: "223,930,254,952"},
  {id: 106, coords: "208,977,238,1000"},
  {id: 107, coords: "200,1025,230,1048"},
  {id: 108, coords: "193,1073,222,1094"},

  {id: 111, coords: "1039,494,1070,519"},
  {id: 112, coords: "1079,494,1110,519"},
  {id: 113, coords: "1128,494,1158,519"},
  {id: 114, coords: "1168,494,1198,519"},
  {id: 115, coords: "1216,494,1246,519"},

  {id: 116, coords: "1472,494,1502,519"},
  {id: 117, coords: "1520,494,1550,519"},
  {id: 118, coords: "1560,494,1590,519"},
  {id: 119, coords: "1600,494,1630,519"},
  {id: 120, coords: "1648,494,1678,519"}
];

numberPositions.forEach(pos => {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const [x1, y1, x2, y2] = pos.coords.split(',').map(Number);
  rect.setAttribute('id', pos.id);
  rect.setAttribute('x', Math.min(x1, x2));
  rect.setAttribute('y', Math.min(y1, y2));
  rect.setAttribute('width', Math.abs(x2 - x1));
  rect.setAttribute('height', Math.abs(y2 - y1));
  // rect.setAttribute('fill', '#FFFFFF'); 
  // rect.setAttribute('stroke', '#FFFFFF');
  // rect.setAttribute('stroke-width', '2');
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
          rect.setAttribute('mask', 'url(#rect-mask)');
          const id = parseInt(key);
          if (id >= 61 && id <= 109) {
            if (data[key] === 'off') {
              rect.setAttribute('fill', '#80477c'); // 暗粉色
              rect.classList.remove('flowing-border');
            } else {
              rect.setAttribute('fill', '#f702d6'); // 亮粉色
              rect.classList.add('flowing-border', 'blue-glow');
            }
          } else {
            if (data[key] === 'off') {
              rect.setAttribute('fill', '#0000A0'); // 暗蓝色
              rect.classList.remove('flowing-border');
            } else {
              rect.setAttribute('fill', '#00BFFF'); // 亮蓝色
              rect.classList.add('flowing-border','pink-glow');
            }
          }
        }
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}


// Update rect colors every 2 seconds
setInterval(updateRectColors, 1000);


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
