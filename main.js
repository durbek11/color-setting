let color = document.querySelector('#color')


document.body.addEventListener('click', function(){
    document.body.backgroundColor = color.value
    console.log(color.value);
})