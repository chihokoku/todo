'use scrict'

const form = document.getElementById('form');
const input = document.getElementById('input');
const ul = document.getElementById('ul');
const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo => {
        add(todo);
    });
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
})



function add(todo) {
    let todoText = input.value;

    //リロードした時の処理
    if(todo) {
        const li = document.createElement('li');
        li.innerText = todo;
        li.classList.add('list-group-item');
        ul.appendChild(li);
        //削除ボタンの作成
        const removeButton = document.createElement('button');
        removeButton.innerText = '削除';
        ul.appendChild(removeButton);
        //タスクを削除するイベント
        removeButton.addEventListener('click', function
        (event){
            event.preventDefault();
            li.remove();
            removeButton.remove();
            saveData();
        });
    }

    //空文字を入力したときはリストに追加しない
    if(todoText){
        const li = document.createElement('li');
        li.innerText = input.value;
        li.classList.add('list-group-item');
        ul.appendChild(li);
        input.value = "";
        //削除ボタンの作成
        const removeButton = document.createElement('button');
        removeButton.innerText = '削除';
        ul.appendChild(removeButton);
        //タスクを削除するイベント
        removeButton.addEventListener('click', function
        (event){
            event.preventDefault();
            li.remove();
            saveData();
        });
        saveData();
    }
}

//ローカルスレージに保存するための関数
function saveData(){
    const lists = document.querySelectorAll('li');
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText);  //配列に保存
    });
    //ローカルストレージに保存し、扱いがしやすいようにJSONに変換しておく
    localStorage.setItem("todos", JSON.stringify(todos));
   
}
