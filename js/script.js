(function() {
    let $input = document.querySelector("input");
    let $btn = document.querySelector(".btn1");
    let $btn2 = document.querySelector(".btn2");
    let $ul = document.querySelector("ul");
    let $lis = $ul.querySelectorAll("li");

    $btn.addEventListener('click', addLi);
    $input.addEventListener("keyup", e => {
        if(e.keyCode === 13) {
            addLi();
        }
    });
    
    $ul.addEventListener("click", e => {
        if(e.target.nodeName === 'LI'){
            toggleDone(e.target);
        }
    });
    
    function toggleDone(li) {
        li.classList.toggle("efeito-li");
    }
    
    function addLi() {
        let li = document.createElement("li");
        let inputValue = document.createTextNode($input.value)
        
        li.appendChild(inputValue);
        $ul.appendChild(li)
    
        $input.value = "";
        $input.focus();

        $btn2.addEventListener("click", e => {
            e.stopPropagation();
            li.parentNode.removeChild(li);
        })
    }
    
})();

    
    