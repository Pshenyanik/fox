$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
});







(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        "with(obj){p.push('" +

        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    return data ? fn( data ) : fn;
  };
})();


$(function(){

  var dataObject = {
    members:[
    {id:1, name:"Name", text:"ЕЛИЗАВЕТА"},
    {id:3, name:"Namefather", text:"ВАДИМОВНА"},
    {id:9, name:"Last Name", text:"ПШЕНЯНИК"},
    {id:15, name:"Telephone", text:"+380660738526"},
    {id:22, name:"E-mail", text:"pshenyanik@mail.ru"},
    {id:78, name:"Photo", text:"<img src='photo1.png'>"}
    ]
  };

  var results = document.getElementById("results");
  results.innerHTML = tmpl("item_tmpl", dataObject);

});
