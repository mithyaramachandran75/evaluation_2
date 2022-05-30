// Add the coffee to local storage with key "coffee"
function item(n, p){
    this.name=n;
    this.price=p;
}
function storeData(e){
 e.preventDefault();
let form=document.getElementById("coffees");
let name=form.name.value;
let price=form.price.value;

let coffe=new item(name, price)

let data=JSON.parse(localStorage.getItem('coffee')) || [];
data.push(coffe);
localStorage.setItem('coffee',JSON.stringify(data))

console.log(coffe)

}
 
const datas="https://masai-mock-api.herokuapp.com/coffee/menu"
console.log(datas)
 