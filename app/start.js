import { getRoutes } from './routes/getRoutes.js';

let route = String;
let view = String;
let xhttp = new XMLHttpRequest();
let routes = getRoutes();
let error = true;

if (window.location.pathname == '/')
  route = window.location.pathname+"home";
else
  route = window.location.pathname;

for (let cont = 0; routes[cont] != undefined; cont++) {
  if (routes[cont].name == route) {
    view = route.substring(1)+".html";

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        $('#app').html(this.responseText);
      }
    };

    xhttp.open("GET", "app/views/"+view, true);
    xhttp.send();

    error = false;
  }
}

if (error) {
  $('#app').html(`
    <div class="mt-5">
      <h1 class="error404">
        Page not found!
      </h1>
    </div>
  `);
}