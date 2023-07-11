
const recupnb = document.querySelectorAll('#nb');
const recupoperator = document.querySelectorAll('#nboperator1');
const recupoperatorend = document.querySelector('#nboperatorend');
var numberscatch = [];
const reinit = document.querySelector('#reinit');
recupnb.forEach(recupnb => {
    recupnb.addEventListener('click', function(){
        numberscatch.push(recupnb.value);
        document.querySelector('#writedisplay').innerHTML = numberscatch.join('');
    })
})
recupoperator.forEach(recupoperator => {
    recupoperator.addEventListener('click', function(){
        numberscatch.push(recupoperator.value);
        document.querySelector('#writedisplay').innerHTML = numberscatch.join('');
        
    })
});
reinit.addEventListener('click', function(){
    numberscatch = [];
    document.querySelector('#writedisplay').innerHTML = "0" + numberscatch.join('');
})
recupoperatorend.addEventListener('click', function(){
numberscatch = numberscatch.map(item => item.replace(',', '.'));
let operation = numberscatch.join('');

try {
  const result = eval(operation);
  document.querySelector('#output').innerHTML = result;
} catch (error) {
    document.querySelector('#output').innerHTML = error("Invalid operation:", error);
}
}) 