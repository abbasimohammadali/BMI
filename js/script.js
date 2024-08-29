let $ = document
const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')
const bmiResult = $.querySelector('#result')
const categoryElem = $.querySelector('#category')

function bmiCalculator() {
    let weightInputValue = weightInput.value
    weightVal.innerHTML = weightInputValue + ' kg'

    let heightInputvalue = heightInput.value
    heightVal.innerHTML = heightInputvalue + ' cm'

    let bmivalue = ( weightInputValue / (Math.pow(heightInputvalue/100 , 2))).toFixed(1)
    bmiResult.innerHTML = bmivalue

    if (bmivalue < 18.5) {
        bmiResult.style.color = '#ffc44d'
        categoryElem.innerHTML = 'UnderWeight'
    } else if(bmivalue >= 18.5 && bmivalue <= 24.9) {
        bmiResult.style.color = '#0be881'
        categoryElem.innerHTML = 'Normal Weight'
    } else if(bmivalue >= 25 && bmivalue <= 29.9) {
        bmiResult.style.color = '#ff884d'
        categoryElem.innerHTML = 'OverWeight'
    }else {
        bmiResult.style.color = '#ff5e4d'
        categoryElem.innerHTML = 'Obese'
    }

}

weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)