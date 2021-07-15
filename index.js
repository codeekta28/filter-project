console.log("This is index.js file");
const serchBox = document.querySelector("#filterNames");
const ul = document.querySelector("#namesContainer");
const li = ul.querySelectorAll('li.name')
serchBox.addEventListener("keyup",filteringNames);

function filteringNames(){
   let searchValue = serchBox.value;
   searchValue = searchValue.trim().toUpperCase();
 li.forEach((names)=>{
     if(names.textContent.trim().toUpperCase().includes(searchValue)){
         names.style.display=""
     }else{
        names.style.display="none";
     }
 })
   
}