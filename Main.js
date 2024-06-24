const menuBtn=document.querySelector("#menuBtn")
const list=document.querySelector("#list")
const closeBtn=document.querySelector("#closeBtn")

menuBtn.addEventListener("click", function(){
    list.style.display="block"
    menuBtn.style.display="none"
    closeBtn.style.display="flex"

})
closeBtn.addEventListener('click', function(){
    list.style.display="none"
    menuBtn.style.display="block"
   closeBtn.style.display="none"

})