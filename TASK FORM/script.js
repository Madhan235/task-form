let form_submit = document.querySelector('#form_submit');

form_submit.addEventListener('submit',(event)=>{
event.preventDefault();
var first_name = document.querySelector('[placeholder="first name"]').value;
 var last_name = document.querySelector('[placeholder="Last name"]').value;
 var address = document.querySelector('[placeholder="address"]').value;
 var pin_code = document.querySelector('[placeholder="pin code"]').value;
 var gender = document.querySelector('[placeholder="gender"]').value;
 var food = document.querySelector('[placeholder="food"]').value;
  var state = document.querySelector('[placeholder="State"]').value;
 var country = document.querySelector('[placeholder="Country"]').value;
 var arr = [first_name, last_name, address, pin_code, gender, food,state, country]
 var arr_count = 0;
 for(let i of arr){
    if(i){
        arr_count++; 
    }
}
    if(arr_count > 2){
    var creating_tr = document.querySelector('.data')
    for(var i = 0; i < arr.length; i++){
        var creating_td = document.querySelector('td')
         creating_td.innerText = arr[i];
         creating_tr.append(creating_td);
    }
 
 
 warn.style.display = 'none';
 
 

}
else {
var warn = document.querySelector('warn_msg')
warn.style.display = 'block';
}
var creating_tbody = document.querySelector('.tbody').append(creating_tr);

})