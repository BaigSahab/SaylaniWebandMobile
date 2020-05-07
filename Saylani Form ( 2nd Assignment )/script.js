const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


let days = document.getElementById('days'); 
let years = document.getElementById('years');
 

for (let index = 1; index <= 31; index++) {
    let option = document.createElement('option');
    option.value = index;
    option.text = index;
    days.appendChild(option);
}


for (let index = 2019; index >= 1980; index--) {
    let option = document.createElement('option');
    option.value = index;
    option.text = index;
    years.appendChild(option);
}

const monthList = `${months.map(month => `<option title="${month}">${month}</option>`)}`

document.getElementById('months').innerHTML = monthList;