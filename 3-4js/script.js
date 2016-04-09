// Заголовок страницы (h1)
var title = ['Тест по программированию'];


// Это ваши вопросы
var questions=[
{
    text: "Вопрос №1",
    answers: ["Вариант ответа №1",
          "Вариант ответа №2",
          "Вариант ответа №3"],

},
{
    text: "Вопрос №2",
    answers: ["Вариант ответа №1",
          "Вариант ответа №2",
          "Вариант ответа №3"],

},
{
    text: "Вопрос №3",
    answers: ["Вариант ответа №1",
          "Вариант ответа №2",
          "Вариант ответа №3"],
        }
];




document.writeln(title);




for(var q=0; q<questions.length; ++q) {
   var question = questions[q];
   var idx = 1 + q;

   document.writeln('<br/><br/><li><span class="quest">' + question.text + '</span><br/><br/>');
      for(var i in question.answers) {
    document.writeln('<input type=checkbox  name="q' + idx + '" value="' + i +
    '" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>');
}
}