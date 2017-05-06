// var day = +prompt("ce zi e?");
for(day = 1; day<=7; day++){
  if(day==6 || day==7){ var n = "*";

switch (day) {
  case 1: console.log("1 - Lu");  break;
  case 2: console.log("2 - Ma");  break;
  case 3: console.log("3- Me");  break;
  case 4: console.log("4- Jo");  break;
  case 5: console.log("5- Vi");  break;
  case 6: console.log(`6- ${n} Si`);  break;
  case 7: console.log(`7- ${n} Du`);  break;

  default: console.log("?????");  break;

};
};
}
// ---------------------------------------------
document.write("<ul>");
for(day = 1; day<=7; day++){
  if(day==6 && day==7){
    day= "*"+ day;

switch (day) {
  case 1: document.write("<li>1 - Lu</li>");  break;
  case 2: document.write("<li>2 - Ma</li>");  break;
  case 3: document.write("<li>3- Me</li>");  break;
  case 4: document.write("<li>4- Jo</li>");  break;
  case 5: document.write("<li>5- Vi</li>");  break;
  case 6: document.write("<li>6- Si</li>");  break;
  case 7: document.write("<li>7- Du</li>");  break;

  default: console.log("?????");  break;
};
};
};
document.write("</ul>");
