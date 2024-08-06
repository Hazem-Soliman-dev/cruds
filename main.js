// calling element from html
let product = document.getElementById('product');
let price = document.getElementById('price');
let count = document.getElementById('count');
let create = document.getElementById('create');
let mood = 'create';
let tmp
// create product
let arr ;
if (localStorage.pro != null) {
    arr = JSON.parse(localStorage.pro);
} else {
    arr = [];
}
create.onclick = function(){
    let obj = {
        product:product.value,
        price:price.value,
        count:count.value,
    }
    if (mood == 'create') {
        arr.push(obj);
    }else{
        arr[tmp] = obj ;
        mood = 'create';
        create.innerHTML = 'انشاء';
    }
    // save at local storage 
    localStorage.setItem('pro',JSON.stringify(arr));
    clear()
    read()
}
// clear inputs 
function clear() {
    product.value = '';
    price.value = '';
    count.value = '';
}
// read 
function read() {
    let table = '';
    for (let i = 0; i < arr.length; i++) {
        table += `
        <tr>
            <td>${arr[i].product}</td>
            <td>${arr[i].price}</td>
            <td>${arr[i].count}</td>
            <td><button onclick="update(${i})" id="update">تعديل</button></td>
            <td><button onclick="delet(${i})" id="delete">حذف</button></td>
        </tr>
        `;
    }
    document.getElementById('tbody').innerHTML=table;
}
read()
// delete 
function delet(i) {
    arr.splice(i,1);
    localStorage.pro = JSON.stringify(arr);
    read()
}
// update
function update(i) {
    product.value = arr[i].product;
    price.value = arr[i].price;
    count.value = arr[i].count;
    create.innerHTML = 'تعديل';
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}
// search
function search(value){
    let table = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].product.includes(value)) {
            table += `
                <tr>
                    <td>${arr[i].product}</td>
                    <td>${arr[i].price}</td>
                    <td>${arr[i].count}</td>
                    <td><button onclick="update(${i})" id="update">تعديل</button></td>
                    <td><button onclick="delet(${i})" id="delete">حذف</button></td>
                </tr>
            `;
        }
        document.getElementById('tbody').innerHTML=table;
    }
}