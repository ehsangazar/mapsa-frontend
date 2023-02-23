window;
window.location;
window.location.href;

window.location.href = "http://www.google.com";
window.location.replace("http://www.google.com");

// Math
Math.random();
Math.floor(3.9);
Math.ceil(3.1);
Math.round(3.5);
Math.pow(2, 3);
Math.sqrt(9);
Math.abs(-9);

// Date
var date = new Date();
date;
date.getFullYear();
date.getMonth();
date.getDate();
date.getDay();
date.getHours();

//persiajs.dev/course/JavaScript-Complete-Course-2023?test=2&name=ehsan#pages

https: location.origin;
location.hash;
location.host;
location.pathname;
location.port;

new URL("http://ehsangazar.com");

const sp = new URLSearchParams(location.search);
// const sp = new URLSearchParams("?test=2&name=ehsan#pages");
sp.get("test");
