window.addEventListener('keydown', function(e){
    const dataContainer = document.querySelector('.number');
    const keyContainer = document.querySelector('.key');
    const data = e.keyCode;
    const key = e.key;
    dataContainer.innerHTML = data;
    keyContainer.innerHTML = key;
});