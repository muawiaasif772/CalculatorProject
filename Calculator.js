let val=document.getElementById('display')
function appendTodisplay(input){
    val.value+=input
}
function calculate(){
    val.value=eval(val.value)
}
function resetInput(){
    val.value=''
  
}
function deleteInput(){
    val.value = val.value.slice(0, -1);
}