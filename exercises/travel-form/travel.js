var form = document.travelForm;
var otherCheckbox = document.querySelector('input[value="otherDiet"]');
var otherText = document.querySelector('input[id="otherDietValue"]');
otherText.style.visibility = 'hidden';

otherCheckbox.onchange = function() {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
};

function findRestrictions(){
    let restrictions = "";
    for(let i = 0; i < form.diet.length; i++){
        console.log(form.diet[i])
        if(form.diet[i].checked){
            console.log(`${form.diet[i].value} is checked`)
            restrictions += `${form.diet[i].value}, `
        }
    }
    return restrictions
}

           
function showInfo(e){
    e.preventDefault()
    findRestrictions()
    console.log(form.diet.value)
    alert(`
    First Name: ${form.firstName.value} 
    Last Name: ${form.lastName.value} 
    Age: ${form.age.value}
    Gender: ${form.gender.value ? form.gender.value : "Please Select a gender."}
    Location: ${form.location.value}
    Dietary Restrictions: ${findRestrictions()}
    `)
}

form.addEventListener('submit', showInfo)