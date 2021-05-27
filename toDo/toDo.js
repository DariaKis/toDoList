const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

let i = 0;

//Добавить событие
btn.addEventListener('click', (e) => {
    // result.innerHTML += `<li>${input.value}</li>`;
    if (input.value === '') return;
    createDeleteElements(input.value)
    input.value = '';

})

//Создание элементов
function createDeleteElements(value) {
    console.log(value);

    i++;
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.className = 'li';
    li.textContent = value;


    btn.className = 'btn';
    btn.textContent = 'Delete';
    li.appendChild(btn);

    //Удаление объектов

    btn.addEventListener('click', (e) => {
        i--;
        total.textContent=i;
        result.removeChild(li);

    })


    //Переключаем активный класс

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active');
    })

    total.textContent = i;

    result.appendChild(li);
}