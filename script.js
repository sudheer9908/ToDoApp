var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var ul = document.getElementById('list')
var li;

addButton.addEventListener('click',addItem);
removeButton.addEventListener('click',removeItem)

function addItem(){
    var input =document.getElementById('input')
    var item = input.value
    var textnode = document.createTextNode(item)
    if(item ===""){
        div1 = document.getElementById("controlsdiv")
        let newp = document.createElement('p');
        // newp.textContent="enter valid input"
        // document.querySelector("body ul").append(newp)
        var v1 = document.createTextNode('enter a valid string')
        newp.appendChild(v1)
        // ul.insertBefore(newp,ul.childNodes[0])
        div1.appendChild(newp);
        setTimeout(() => {document.getElementById("controlsdiv").removeChild(newp);}, 1000);
        

       
    }
    else{
        // li
        li = document.createElement('li')
        // checekbox
        var check = document.createElement('input')
        check.type="checkbox"
        check.setAttribute('class','check')
        // label
        var label = document.createElement('label')

        label.appendChild(textnode);
        li.appendChild(check);
        li.appendChild(label);
        li.setAttribute('class','mycheck')
        ul.insertBefore(li,ul.childNodes[0]);
        input.value='';
        setTimeout(() => {li.className='visual';}, 6000);
        
    }

}

function removeItem(){
 li = ul.children
//  console.log(li)
 for (let index = 0; index <li.length; index++) {
    const element = li[index];
    // console.log(element)
    // ul.remove(li)
    // ul.removeChild(li[index])
    if(li[index].children[0].checked){
        ul.removeChild(li[index])
        index--
    }
    // while(li[index] && li[index].children[0].checked){
    //     ul.removeChild(li[index])
    // }
    
 }
}