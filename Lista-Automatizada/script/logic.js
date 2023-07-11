//logica
var loginstatus = '';
var userid = {user:''};
var list = [];
function insertIten(iten, price) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            list.push({ iten, price });
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({ msg: "erro" })
            }
        }, 1000);
    })
    return promise;
}
function calcList(total, iten) {
    return total + parseInt(iten.price);
}
function exibir() {
    let h2 = document.getElementById("h2");
    h2.innerHTML = list.reduce(calcList, 0);;
}
function start() {
    var iten = document.getElementById("prod").value;
    var price = document.getElementById("price").value;
    try {
        if (iten == '' || price == '') {
            throw "Valor não pode ser vazio"
        } else {
            insertIten(iten, price).then(exibir);
        }
    } catch (err) {
        alert("Os espaços não podem ser vazios")
    } finally {
        addList();
    }
}
function addList() {
    setTimeout(() => {
        function retorna(list) {
            return '<li>' + "Produto:" + " " + list.iten + " " + "R$:" + " " + list.price + " " + '</li>'
        }
        let ul = document.getElementById('ul');
        ul.innerHTML = list.map(retorna);
        hidenShowBtn();
    }, 1100)
}
function hidenShowBtn() {
    let btn2 = document.getElementById('remov');
    setTimeout(() => {
        if (list == '') {
            btn2.style.display = "none";
        } else {
            btn2.style.display = "block";
        }
    }, 1100)
}
function data(){
     let altData = document.getElementById('data');
     altData.style.display = "block";
     setTimeout(()=>{
        altData.style.display = "none";
     },1000)
}