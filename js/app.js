'use strict';
let clicks = 0;
let temp = 0;
let ws = 0;
let storm;
const loadSVG = function(wd) {
  switch (wd) {
    case 'SWW':
    case 'SW':
    case 'SSW':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SE');
      storm.classList.remove('u-wd__E');
      storm.classList.remove('u-wd__S');
      storm.classList.remove('u-wd__NE');
      storm.classList.remove('u-wd__N');
      storm.classList.remove('u-wd__NW');
      storm.classList.remove('u-wd__W');
      storm.classList.add('u-wd__SW');
      return `<svg       height="150px"
      class="c-svg"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
   <style type="text/css">
     .st0{fill:#FFFFFF;}
   </style>
   <path class="st0" d="M11.8,16.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.5,0.2h2.9c0.2,0,0.4-0.1,0.5-0.2C16,17.1,16,17,16,16.8
     c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2h-1.2l3.9-3.9c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.3-0.2-0.5
     c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2l-3.9,3.9v-1.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2
     c-0.1,0.1-0.2,0.3-0.2,0.5C11.8,13.9,11.8,16.8,11.8,16.8z"/>
   </svg>`;

    case 'SEE':
    case 'SE':
    case 'SSE':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SW');
      storm.classList.remove('u-wd__E');
      storm.classList.remove('u-wd__S');
      storm.classList.remove('u-wd__NE');
      storm.classList.remove('u-wd__N');
      storm.classList.remove('u-wd__NW');
      storm.classList.remove('u-wd__W');
      storm.classList.add('u-wd__SE');
      return `<svg       height="150px"
      class="c-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
   <style type="text/css">
     .st0{fill:#FFFFFF;}
   </style>
   <path class="st0" d="M10,10.1c0-0.3,0.1-0.6,0.3-0.7c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.7,0.3l6,6.1v-1.9
     c0-0.3,0.1-0.6,0.3-0.8s0.5-0.3,0.8-0.3c0.3,0,0.5,0.1,0.7,0.3s0.3,0.4,0.3,0.8v4.5c0,0.3-0.1,0.5-0.3,0.8S19.2,19,18.9,19h-4.5
     c-0.3,0-0.5-0.1-0.7-0.3s-0.3-0.5-0.3-0.8c0-0.3,0.1-0.5,0.3-0.7s0.4-0.3,0.7-0.3h1.9l-6.1-6.1C10.1,10.6,10,10.4,10,10.1z"/>
   </svg>`;

    case 'NEE':
    case 'NE':
    case 'NNE':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SE');
      storm.classList.remove('u-wd__E');
      storm.classList.remove('u-wd__S');
      storm.classList.remove('u-wd__SW');
      storm.classList.remove('u-wd__N');
      storm.classList.remove('u-wd__NW');
      storm.classList.remove('u-wd__W');
      storm.classList.add('u-wd__NE');
      return `<svg       height="150px"
      class="c-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
   <style type="text/css">
     .st0{fill:#FFFFFF;}
   </style>
   <path class="st0" d="M10.1,17.5c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.7-0.3l6-6.1v1.9
     c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.5-0.1,0.7-0.3s0.3-0.4,0.3-0.8V9.7c0-0.3-0.1-0.6-0.3-0.8s-0.5-0.3-0.7-0.3
     h-4.5c-0.3,0-0.5,0.1-0.7,0.3s-0.3,0.4-0.3,0.8c0,0.3,0.1,0.5,0.3,0.7s0.4,0.3,0.7,0.3h2l-6.1,6.1C10.1,17,10.1,17.3,10.1,17.5z"/>
   </svg>`;

    case 'NWW':
    case 'NW':
    case 'NNW':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SE');
      storm.classList.remove('u-wd__E');
      storm.classList.remove('u-wd__S');
      storm.classList.remove('u-wd__NE');
      storm.classList.remove('u-wd__N');
      storm.classList.remove('u-wd__SW');
      storm.classList.remove('u-wd__W');
      storm.classList.add('u-wd__NW');
      return `<svg       height="150px"
      class="c-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
   <style type="text/css">
     .st0{fill:#FFFFFF;}
   </style>
   <path class="st0" d="M10,14.3V9.8c0-0.3,0.1-0.6,0.3-0.8s0.4-0.3,0.7-0.3h4.5c0.3,0,0.5,0.1,0.7,0.3s0.3,0.4,0.3,0.8
     c0,0.3-0.1,0.5-0.3,0.7s-0.4,0.3-0.7,0.3h-1.9l6.1,6.1c0.2,0.2,0.3,0.5,0.3,0.8c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.3-0.8,0.3
     c-0.3,0-0.5-0.1-0.7-0.3l-6-6.1v1.9c0,0.3-0.1,0.6-0.3,0.8s-0.4,0.3-0.8,0.3c-0.3,0-0.5-0.1-0.7-0.3S10,14.6,10,14.3z"/>
   </svg>`;

    case 'N':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SE');
      storm.classList.remove('u-wd__E');
      storm.classList.remove('u-wd__S');
      storm.classList.remove('u-wd__NE');
      storm.classList.remove('u-wd__SW');
      storm.classList.remove('u-wd__NW');
      storm.classList.remove('u-wd__W');
      storm.classList.add('u-wd__N');
      return `<svg       height="150px"
      class="c-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
   <style type="text/css">
     .st0{fill:#FFFFFF;}
   </style>
   <path class="st0" d="M9.9,10.9c0,0.4,0.1,0.6,0.3,0.9s0.5,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4l1.7-1.6v10.3c0,0.4,0.1,0.6,0.4,0.9
     s0.6,0.4,0.9,0.3c0.3,0,0.6-0.1,0.9-0.3c0.2-0.2,0.4-0.5,0.4-0.9V10.1l1.6,1.6c0.2,0.2,0.5,0.4,0.9,0.4c0.4,0,0.7-0.1,0.9-0.4
     s0.4-0.5,0.4-0.9c0-0.4-0.1-0.6-0.4-0.9l-3.7-3.8C15.7,6,15.4,5.8,15,5.8c-0.4,0-0.7,0.2-0.9,0.4L10.3,10
     C10.1,10.3,9.9,10.5,9.9,10.9z"/>
   </svg>`;

    case 'S':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SE');
      storm.classList.remove('u-wd__E');
      storm.classList.remove('u-wd__SW');
      storm.classList.remove('u-wd__NE');
      storm.classList.remove('u-wd__N');
      storm.classList.remove('u-wd__NW');
      storm.classList.remove('u-wd__W');
      storm.classList.add('u-wd__S');
      return `<svg height="150px"
      class="c-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
   <style type="text/css">
     .st0{fill:#FFFFFF;}
   </style>
   <path class="st0" d="M11.8,16.5c0,0.2,0.1,0.4,0.3,0.5l2.4,2.5c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2L18,17
     c0.2-0.1,0.2-0.3,0.2-0.5s-0.1-0.4-0.2-0.6s-0.3-0.2-0.6-0.2s-0.4,0.1-0.6,0.2l-1.1,1v-6.6c0-0.2-0.1-0.4-0.2-0.6
     c-0.2-0.1-0.3-0.2-0.6-0.2s-0.4,0.1-0.6,0.2c-0.2,0.1-0.2,0.3-0.2,0.6V17l-1.1-1.1c-0.2-0.2-0.3-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2
     C11.9,16,11.8,16.3,11.8,16.5z"/>
   </svg>`;

    case 'E':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SE');
      storm.classList.remove('u-wd__SW');
      storm.classList.remove('u-wd__S');
      storm.classList.remove('u-wd__NE');
      storm.classList.remove('u-wd__N');
      storm.classList.remove('u-wd__NW');
      storm.classList.remove('u-wd__W');
      storm.classList.add('u-wd__E');
      return `<svg
      height="150px"
      class="c-svg"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 30 30"
      style="enable-background:new 0 0 30 30;"
      xml:space="preserve"
    >
      <style type="text/css">
        .st0 {
          fill: #ffffff;
        }
      </style>
      <path
        class="st0"
        d="M9.9,14.4c0,0.2,0.1,0.4,0.2,0.6s0.3,0.2,0.6,0.2h6.6l-1,1.1c-0.2,0.2-0.2,0.4-0.2,0.5c0,0.2,0.1,0.4,0.2,0.6
c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.5-0.3l2.5-2.4c0.2-0.2,0.2-0.4,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6l-2.5-2.4
c-0.1-0.2-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.2,0.3-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6l1.1,1.1h-6.6
c-0.2,0-0.4,0.1-0.6,0.3C10,13.9,9.9,14.1,9.9,14.4z"
      />
    </svg>`;

    case 'W':
      storm = document.querySelector('.js-storm');
      storm.classList.remove('u-wd__SE');
      storm.classList.remove('u-wd__E');
      storm.classList.remove('u-wd__S');
      storm.classList.remove('u-wd__NE');
      storm.classList.remove('u-wd__N');
      storm.classList.remove('u-wd__NW');
      storm.classList.remove('u-wd__SW');
      storm.classList.add('u-wd__W');
      return `
      <svg height="150px"
      class="c-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:#FFFFFF;}
      </style>
      <path class="st0" d="M7.1,15c0,0.4,0.1,0.7,0.4,0.9l3.8,3.8c0.2,0.3,0.5,0.4,0.9,0.4c0.4,0,0.6-0.1,0.9-0.4s0.4-0.5,0.4-0.9
        s-0.1-0.6-0.4-0.9l-1.6-1.6h10.3c0.4,0,0.6-0.1,0.9-0.4s0.3-0.6,0.3-0.9s-0.1-0.6-0.3-0.9s-0.5-0.4-0.9-0.4H11.4L13,12
        c0.2-0.2,0.4-0.5,0.4-0.9c0-0.4-0.1-0.6-0.4-0.9s-0.5-0.4-0.9-0.4c-0.3,0-0.6,0.1-0.9,0.4l-3.8,3.8C7.2,14.3,7.1,14.6,7.1,15z"/>
      </svg>`;
  }
};

const toggleUnits = function() {
  clicks += 1;

  if (clicks % 2 != 0) {
    temp = (temp / 5) * 9 + 32;
    temp = temp.toFixed(1);
    let temperatuur = document.querySelector('.js-temperatuur');
    temperatuur.innerHTML = temp + '°F';

    ws = ws * 2.23693629;
    ws = ws.toFixed(1);
    let windspeed = document.querySelector('.js-ws');
    windspeed.innerHTML = ws + ' mph';
  } else {
    temp = ((temp - 32) * 5) / 9;
    temp = temp.toFixed(1);
    let temperatuur = document.querySelector('.js-temperatuur');
    temperatuur.innerHTML = temp + '°C';

    ws = ws * 0.44704;
    ws = ws.toFixed(1);
    let windspeed = document.querySelector('.js-ws');
    windspeed.innerHTML = ws + ' m/s';
  }
};

const loadData = function(jsondata) {
  let dag = jsondata['sol_keys'].pop();
  let data = jsondata[dag];
  console.log(data);
  console.log(dag);

  let season = data['Season'];
  let seasonCapital = season.charAt(0).toUpperCase() + season.substring(1);
  let seasonSelector = document.querySelector('.js-season');
  seasonSelector.innerHTML = seasonCapital;

  let tempdata = data['AT'];
  temp = tempdata['av'];
  temp = temp.toFixed(1);
  let temperatuur = document.querySelector('.js-temperatuur');
  temperatuur.innerHTML = temp + '°C';

  let wddata = data['WD'];
  let wddata2 = wddata['most_common'];
  let wd = wddata2['compass_point'];
  //svg aanpassen aan de hand van deze data
  let svg = loadSVG(wd);
  console.log(wd);
  let wdsvg = document.querySelector('.js-wd');
  console.log(wdsvg);
  wdsvg.innerHTML = svg;

  let wsdata = data['HWS'];
  ws = wsdata['av'];
  ws = ws.toFixed(1);
  let windspeed = document.querySelector('.js-ws');
  windspeed.innerHTML = ws + ' m/s';
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  handleData('https://api.nasa.gov/insight_weather/?api_key=Hs9DcbY5GCs0g5mr03k1WKzpuqL2gHt9Qt9u6ftu&feedtype=json&ver=1.0', loadData);
  //https://api.nasa.gov/insight_weather/?api_key=Hs9DcbY5GCs0g5mr03k1WKzpuqL2gHt9Qt9u6ftu&feedtype=json&ver=1.0
  document.querySelector('.js-button').addEventListener('click', toggleUnits);
});
