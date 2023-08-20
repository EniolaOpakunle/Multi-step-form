const step1Btn = document.getElementById('step1Btn');
const step1 = document.getElementById('personalInfo');
const step1CSS = document.getElementsByClassName('personalInfo')
const step2 = document.getElementById('selectPlan');
const step2CSS = document.getElementsByClassName('selectPlan')
const step2Btn = document.getElementById('step2Btn');
const step2GoBack = document.getElementById('step2GoBack')
const step3 = document.getElementById('pickAddOns')
const step3CSS = document.getElementsByClassName('pickAddOns')
const step3Btn = document.getElementById('step3Btn')
const step3GoBack = document.getElementById('step3GoBack')
const step4 = document.getElementById('finishingUp')
const step4CSS = document.getElementsByClassName('finishingUp')
const step4Btn = document.getElementById('Step4Btn')
const step4GoBack = document.getElementById('step4GoBack')

step1Btn.addEventListener("click", () =>{
    step1.style.display = "none"
    step2.classList.remove("selectPlan")
})
step2Btn.addEventListener("click", () =>{
    step2.classList.add('selectPlan');
    step3.classList.remove("pickAddOns")
})
step3Btn.addEventListener("click", () =>{
    step3.classList.add('pickAddOns');
    step4.classList.remove("finishingUp");
})
step2GoBack.addEventListener("click", () =>{
    step1.style.display = "block"
    step2.classList.add("selectPlan")
})
step3GoBack.addEventListener("click", () =>{
    step3.classList.add('pickAddOns');
    step2.classList.remove("selectPlan");
})
step4GoBack.addEventListener("click", () =>{
    step3.classList.remove('pickAddOns')
    step4.classList.add('finishingUp')
})