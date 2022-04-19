var button=document.querySelector('.button');
var inputvalue=document.querySelector('.inputvalue');
var nameis=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=2cda702822ce4e53fde5138e9faa8fce')

    .then(response=>response.json())
    .then(data=>{
        var namevalue=data['name'];
        var tempvalue=data['main']['temp'];
        var descvalue=data['weather'][0]['description'];

        nameis.innerHTML=namevalue;
        temp.innerHTML=tempvalue;
        desc.innerHTML=descvalue;

    })
    .catch(err=>alert("Wrong City name"))
    
})
