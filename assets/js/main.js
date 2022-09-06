const billInput = document.getElementById('bill-input');
const tipBtn = document.querySelectorAll('.tip-button');
const customTip = document.getElementById ('custom');
const NumberOfPeople = document.getElementById('people-input');
const perPerson = document.getElementById('tipPerPerson');
const total = document.getElementById('totalPerPerson');
const hidden = document.querySelector('.hidden');
const reset = document.getElementById('reset');

rst();
let tip = 0, amt = 0, ppl = 1;


tipBtn.forEach(button =>{
    button.addEventListener("click", ()=>{
        if(button.classList.contains("selected")){
            tip = 0;
            button.classList.remove("selected");
            button.classList.add("unselected");
        }else{            
            tipBtn.forEach(e =>{
                e.classList.remove("selected");
            })
            tip = button.value;
            button.classList.remove("unselected");
            button.classList.add("selected");
        }
        customTip.value = "";
        calc();
    })
});

customTip.addEventListener("input", ()=>{
    if(customTip.value >= 0)
    {    
        tipBtn.forEach(e =>{
            e.classList.remove("selected");
        })
        tip = customTip.value;
        calc();
    }
});

billInput.addEventListener("input", ()=>{
    amt = Number(billInput.value);

    calc();
})

NumberOfPeople.addEventListener("input", ()=>{
    ppl = NumberOfPeople.value;
    if(ppl <= 0 && ppl != ""){
        NumberOfPeople.classList.add("hidden-input");
        hidden.style.visibility = "visible";
    }else{
        NumberOfPeople.classList.remove("hidden-input");
        hidden.style.visibility = "hidden";
        calc();        
    }
});

reset.addEventListener("click", rst);
function rst(){
    billInput.value = "";
    NumberOfPeople.value = "1";
    customTip.value = "";
    perPerson.innerHTML = "$0.00";
    total.innerHTML = "$0.00";

    tipBtn.forEach(e =>{
        e.classList.remove("selected");
        e.classList.add("unselected");
    })
}

function calc(){
    if(amt >= 0 && ppl >= 1){
        let totalTip = (tip*amt)/(100);
        let totalAmt = amt + totalTip;
        perPerson.innerHTML = `$${((totalTip)/(ppl)).toFixed(2)}`;
        total.innerHTML = `$${((totalAmt)/(ppl)).toFixed(2)}`;
    }
}