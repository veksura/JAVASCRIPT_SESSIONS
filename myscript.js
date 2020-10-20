console.log('Hello all')
/**
 * alert('I am here');
 */
if(confirm('Confirm')==true){
    alert('Got IT');
}
else{
    alert('Rejected');
}

var age= prompt('Enter Age: ');
if (age>=18){
    
    document.getElementById('divCheck').innerHTML='here now';
}
