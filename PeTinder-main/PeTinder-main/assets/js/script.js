document.querySelector('#range').addEventListener('input', range => {
    changeWidth (range.target.value);
});

function changeWidth(value){
    document.querySelector('#dv-effect').style.width = value + '%';

    if (value < 50){
        document.getElementById ('informacao_novidades').style.display="block";
    }
    else{
        document.getElementById ('informacao_novidades').style.display="none";
    }
}