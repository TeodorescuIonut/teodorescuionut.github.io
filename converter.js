function check(event){ 
  var selectButton = document.getElementById('selectButton');
      audiobook = document.getElementById('audiobook');
      converter = document.getElementById('converter');
  if(selectButton.selectedIndex == 0){
    console.log('converter');
    converter.className = 'active';
    audiobook.className = 'hidden';
  }
  else if(selectButton.selectedIndex==2){
    console.log('audiobook');
    audiobook.className = 'active';
    converter.className = 'hidden';
    localStorage.clear();
  }
  event.preventDefault();
}

// *********** AUDIOBOOK ********

document.getElementById('audio-tip-form').addEventListener('submit', calculateAudioConversion);
var hour = document.getElementById('hour');
    minutes = document.getElementById('minutes');
    seconds = document.getElementById('seconds');
    step = document.getElementById('step');
    
const inputs = {
      hour: minutes,
      minutes: seconds,
       
    }
    inputTime = document.getElementById('step').value;
    resultAudio = document.getElementById('audioResult').value;
    maxLength = 2;
var prev;
var newValue;
function onClick(event){
  event.target.value='';
  
}
function reseted(event){
  event.preventDefault();
}
[hour,minutes,seconds].map(element => element.addEventListener("blur", function() {
  prev = undefined
  var n = this.value.length;
    console.log(n);
    var max = parseInt(this.getAttribute("maxlength"), 10);
    console.log(max);
    if (n < max ) {
      var l = max - n + 1;
      var prefix = new Array(l).join("0");
      this.value = prefix + this.value;
      
    }
   
}))

// Validate time type & value
function onKeyPress(event) {
  idValue= event.target.id;
  if (!(/[0-9]/.test(event.key))) {
    event.preventDefault();
  }

   newValue = [prev, event.key].join('') 
  prev = event.key
  
  if (event.target.id === 'hour' && !(/^([0-9]|[0-9][0-9])$/g.test(newValue))) {
    console.log('nope hour');
    prev = undefined
    event.preventDefault();
  }

  if ((event.target.id === 'minutes') && !(/^([0-9]|[0-5][0-9])$/g.test(newValue))) {
    console.log('nope minutes');
    seconds.focus()
    prev = undefined
    event.preventDefault();
  }
  if (event.target.id === 'seconds' && !(/^([0-9]|[0-5][0-9])$/g.test(newValue))) {
    console.log('nope seconds');
    step.focus();
    prev = undefined
    event.preventDefault();
    
  } 
  if (inputs[event.target.id] && newValue.length === maxLength ) { 
    window.setTimeout(function (){
      inputs[event.target.id].focus();
      console.log('newValue:', newValue);
     prev = undefined;
   },0)
    }
        
 

  console.log('newValue:', newValue, prev);
  
  
  
  
}


// Playback rate increment/decrement playback rate

var newVal = 1.0;
function incrementValue() {
  newVal = newVal + 0.10;
  inputTime = newVal.toFixed(1);
  if (inputTime <= 3.0) {
    document.getElementById('step').value = inputTime;
  }
  else if (inputTime = 3.0) {
    newVal = 1.0;
    document.getElementById('step').value = newVal.toFixed(1);
  }
  console.log(document.getElementById('step').value);
  event.preventDefault();
};


function decrementValue() {

  newVal = newVal - 0.10;
  inputTime = newVal.toFixed(1);

  if (inputTime >= 1.0) {
    document.getElementById('step').value = inputTime;

  }
  else if (inputTime < 1.0) {
    newVal = 1.0;
    document.getElementById('step').value = newVal.toFixed(1);

  }
  console.log(document.getElementById('step').value);
  event.preventDefault();
}

// Calculate time conversion

function calculateAudioConversion() {
  event.preventDefault();
  var stepValue = document.getElementById('step').value;
  measure = 60;
  hours = parseInt(hour.value);
  minute = parseInt(minutes.value);
  second = parseInt(seconds.value);
  minustesCalc = (hours * measure) + minute;
  secondsCalc = (minustesCalc * measure) + second;
  secondsTotal = secondsCalc / stepValue;
  minutesTotal = secondsTotal / measure;
  hoursTotal = Math.floor(minutesTotal / measure);
  minutesFinal = Math.floor(((minutesTotal / measure) - hoursTotal) * measure);
  secondsFinal = Math.ceil((((minutesTotal / measure) - hoursTotal) * measure - minutesFinal) * measure);
  resultime = hoursTotal + 'h ' + minutesFinal + 'm ' + secondsFinal + 's ';
  document.getElementById('audioResult').value = resultime;
  event.preventDefault();
}


// *********** CONVERTER ********

let factors1 = new Array(0.3937, 0.0328, 0.00000621);/*cm 1, 0.01, 0.00001,*/
let factors2 = new Array( 39.37, 3.28084, 0.00062137);/*meter 100, 1, 0.001,*/
let factors3 = new Array(39370.078, 3280.83,0.6213712);/*km  100000, 1000, 1,*/

let factors4 = new Array( 2.54, 0.0254, 0.0000254);/*inch 2.54, 0.0254, 0.0000254,*/
let factors5 = new Array( 30.48, 0.3048, 0.0003048);/*feet 30.48, 0.3048, 0.0003048,*/
let factors6 = new Array( 160934.4, 1609.344, 1.609344,);/*mile 160934.4, 1609.344, 1.609344,*/
let factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6);
let arr = new Array(4,5,6,1,2,3);

var ul = document.querySelector('.list');
result = document.getElementById("toValue");
fromUnit =document.querySelector(".name"); 
inputValue = document.querySelector('.number');
counter = document.getElementById('demo');
swap = document.getElementById('swap');
firstInput = document.getElementById('firstInput');
secondInput = document.getElementById('secondInput');
var count = 0;
// Event Listeners

document.getElementById('tip-form').addEventListener('submit', calculateConversion);
document.addEventListener('DOMContentLoaded', getTasks);
ul.addEventListener('click',removeConversion);


// FUNCTION FOR SWAPPING
function swapByOptionValue(){
 
  var select1= [];
  var firstInput = document.getElementById("firstInput");
  for (var i = 0; i < firstInput.options.length; i++) {
    select1.push(firstInput.options[i].text);
  }
  
  var select2= [];
  var secondInput = document.getElementById("secondInput");
  
  for ( var i = 0; i < secondInput.options.length; i++) {
    select2.push(secondInput.options[i].text);
  }
  
  var b = select1;
  select1 = select2;
  select2 = b;

firstInput.options.length = '';
for(var i = 0; i < select1.length; i++){
  firstInput.options.add(new Option(select1[i], select1[i]));
} 

secondInput.options.length = '';
for(var i = 0; i < select2.length; i++){
  secondInput.options.add(new Option(select2[i], select2[i]));
} 

}


// FUNCTION FOR GETTING THE RESULT
function getTasks(){
  let tasks;
  
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else { 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach (function(task){
    count += 1;
    const li = document.createElement('li');
    var child = document.createElement('span')
    child.appendChild(document.createTextNode(task));
    child.className = 'child';
    const counter = document.createElement('span');
    const link = document.createElement('div');
    link.className = "delete-item";
    counter.className = "delete";
    counter.innerHTML = count;
    link.innerHTML = `<a href="#" class="remove">remove</a>`;
    
    li.appendChild(link);
    li.insertBefore(child,link);
    link.appendChild(counter);
    ul.insertBefore(li, ul.childNodes[0]);

  });
}

// FUNCTION FOR CONVERSION
function calculateConversion(e)
{
  fromUnitvalue = document.lengthCon.fromUnit.options[document.lengthCon.fromUnit.selectedIndex].value;
  fromIndex = document.lengthCon.fromUnit.selectedIndex;
  toIndex = document.lengthCon.toUnit.selectedIndex;
  toUnitvalue = document.lengthCon.toUnit.options[document.lengthCon.toUnit.selectedIndex].value;
  fromUnitText = document.lengthCon.fromUnit.options[document.lengthCon.fromUnit.selectedIndex].text;
  
  if(fromUnitvalue === 'cm'||'m'||'km'){
    factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6);
    factor = factors[fromIndex][toIndex];
    console.log(factors);
  }
  else{
    factors = new Array(factors4,factors5,factors6,factors1,factors2,factors3);
    factor = factors[fromIndex][toIndex];
    console.log(factors);
    
  }
  console.log(factor);
  console.log(toIndex);
  console.log(fromIndex);
    if(isNaN(inputValue.value) || (inputValue==='') ){
      alert('Not A valid Number');
    }  
    else {
      count  += 1;
      result.value = (factor * document.lengthCon.fromValue.value).toFixed(2)+' '+toUnitvalue;
      final= inputValue.value+' '+fromUnitvalue+' = '+result.value;
      
      var li = document.createElement('li');
      var child = document.createElement('span')
      child.appendChild(document.createTextNode(final));
      child.className = 'child';
     
      const link = document.createElement('div');
      const counter = document.createElement('span');
      link.className = "delete-item";
      counter.innerHTML = count;
      counter.className = "delete";
      link.innerHTML = `<a href="#" class="remove">remove</a>`;
      li.appendChild(link);
      li.insertBefore(child,link);
      link.appendChild(counter);
      ul.insertBefore(li, ul.childNodes[0]);

      inputValue.value='';
      storeConversionInLocalStorage(final);
      e.preventDefault();
      
  }

  
// FUNCTION FOR STORING IN LOCAL STORAGE  
}
function storeConversionInLocalStorage(task) {
  let tasks;
  
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else { 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// FUNCTION FOR DELETING THE CONVERSION RESULT
function removeConversion(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    
    e.target.parentElement.parentElement.remove();
  
    // Remove from Localstoarge
    removeConversionFromLocalStorage(e.target.parentElement.parentElement)
  }
}

// FUNCTION FOR DELETING THE CONVERSION RESULT FROM LOCAL STORAGE
function removeConversionFromLocalStorage(convItem){
  let tasks;
  count= 0 ;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {    
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){ 
    count  += 1;
    task +='remove'+count;   
    console.log(convItem.textContent);
    if(convItem.textContent  === task){
      console.log(count);
      tasks.splice(index, 1);     
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  event.preventDefault();
}

