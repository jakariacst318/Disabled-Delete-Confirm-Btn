document.getElementById('delete-confirm').addEventListener('keyup', function(event) {
    const text = event.target.value ;
    const deleteBtn = document.getElementById('delete-bnt');
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }

})
document.getElementById('delete-bnt').addEventListener('click', function(){

    const secret = document.getElementById('secret-info');
    secret.style.display = 'none'
})