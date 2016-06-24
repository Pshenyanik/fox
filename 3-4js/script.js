
    var element = document.createElement('div');
    element.classList.add('box1');
    element.innerHTML='Тест по программированию';
    element.style.textAlign = "center";
    element.style.marginTop = "10px";
    document.body.appendChild(element);


    var element = document.createElement('ul');
    element.classList.add('box2');
    element.innerHTML='1. Вопрос №1';
    element.style.textAlign = "left";
    element.style.marginTop = "30px";
    element.style.marginBottom = "30px";
    element.style.marginLeft = "60px";
    document.body.appendChild(element);
    

    

    
    var element = document.createElement('ul');
    element.classList.add('box4');
    element.innerHTML='2. Вопрос №2';
    element.style.textAlign = "left";
    element.style.marginTop = "30px";
    element.style.marginBottom = "30px";
    element.style.marginLeft = "60px";
    document.body.appendChild(element);
    
    
    var element = document.createElement('ul');
    element.classList.add('box6');
    element.innerHTML='3. Вопрос №3';
    element.style.textAlign = "left";
    element.style.marginTop = "30px";
    element.style.marginBottom = "30px";
    element.style.marginLeft = "60px";
    document.body.appendChild(element);
    
    var list2 = document.querySelector('.box4');
    var newListElem2 = document.createElement('LI');
    newListElem2.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 1';
    list2.appendChild(newListElem2);
    var newListElem2 = document.createElement('LI');
    newListElem2.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 2';
    list2.appendChild(newListElem2);
    var newListElem2 = document.createElement('LI');
    newListElem2.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 3';
    list2.appendChild(newListElem2);
    
    
          
          
        var list = document.querySelector('.box2');
    var newListElem = document.createElement('LI');
    newListElem.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 1';
    list.appendChild(newListElem);
    var newListElem = document.createElement('LI');
    newListElem.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 2';
    list.appendChild(newListElem);
    var newListElem = document.createElement('LI');
    newListElem.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 3';
    list.appendChild(newListElem);
    
    
          
          
        var list = document.querySelector('.box6');
    var newListElem = document.createElement('LI');
    newListElem.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 1';
    list.appendChild(newListElem);
    var newListElem = document.createElement('LI');
    newListElem.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 2';
    list.appendChild(newListElem);
    var newListElem = document.createElement('LI');
    newListElem.innerHTML = '<input type="checkbox" style="color:blue; border:black 1px" value="" style="background:blue;">' + 'Вариант ответа № 3';
    list.appendChild(newListElem);

    
    var element = document.createElement('div');
    element.innerHTML='<input type="button" value="Проверить мои результаты" style="height:35px; width:195px; background:#cfe2f3;">';
    element.style.textAlign = "center";
    element.style.marginTop = "10px";
    document.body.appendChild(element);


    
