$(function(){
  function callBack () {
    var value = $('.data').val();

    var request = $.ajax({
      url:'https://pixabay.com/api/',
      data: { key: '2573416-853329f61ff5a3b6beba25569',
            q: value,
            },
      success: function(data){
            var html = $('#template').html();
            var content = tmpl(html,data);
            $('body').append(content);
          }
  });
};

$('.search').on('click',callBack);

$('.data').keypress(function(e){
  if (e.which === 13 ){
    callBack();
  }
});
});

function Human() {
  this.name = 'Liza';
  this.age = '18';
  this.sex = 'woman';
  this.height = '1.67';
  this.weight = '50';
};

var newHuman = new Human();
function Worker() {
  this.workCity = 'Kiev';
  this.salary = '4000$'
  this.doWork = function () {
    alert('Работать!');
  };
};


Worker.prototype = new Human();


function Student() {
  this.stadyLocation = 'Kyiv National Economic University named after Vadym Hetman';
  this.stipend = '30$'
  this.watch = function () {
    alert('Cмотреть сериалы');
  }
};


Student.prototype = new Human();


var newWorker1 = new Worker ();
var newWorker2 = new Worker ();

var newStudent1 = new Student ();
var newStudetn2 = new Student ();

console.log(newWorker1);
console.log(newWorker2);
console.log(newStudent1);
console.log(newStudetn2);