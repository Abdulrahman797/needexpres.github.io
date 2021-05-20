const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    //Toggle Nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        
        //Animate Links
        navLinks.forEach(( link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
            }
         });
         //Burger Animation
         burger.classList.toggle('toggle');
    });
   
}

navSlide();

function fadeOut(){
     const contact = document.getElementById('main_form1');
     contact.style.opacity = '0';
     contact.style.transition = '1.5s'
     const thanking = document.getElementById('thanks');
     thanking.style.display = 'revert';   
     thanking.style.opacity = '1';  
     thanking.style.transition = '3.5s' ; 
   
}
function fadeIn(){
    const fade = document.getElementById('fade');
    fade.style.opacity = '0'
    fade.style.transition = '2.5'
}
function fadeOutContact(){
    const contactpage = document.getElementById('contact2');
    contactpage.style.opacity = '0';
    contactpage.style.transition = '2.5s';
}
function blackWhite(){
    const square = document.getElementById('sectionA');
    square.style.cursor = 'none !important';
    const square2 = document.getElementById('cursor1');
    square2.style.position = 'fixed';
}
    function White(){
    const ball = document.getElementById('sectionA')
    ball.style.cursor = 'default';
    }
    var cursor1 = document.getElementById('cursor1');
    window.onmousemove = function(e){
        var x = e.clientX;
            y = e.clientY;
            cursor1.style.left = x + 'px'
            cursor1.style.top = y + 'px'
    }
   
        function White(){
        const ball = document.getElementById('cursor1')
        ball.style.all = 'revert';
        }
        
        const todoInput  = document.querySelector(".todo-input");
        const todoButton  = document.querySelector(".todo-button");
        const todoList  = document.querySelector(".todo-list");
        //Event Listeners
        document.addEventListener('DOMContentLoaded', getTodos);
        todoButton.addEventListener("click", addTodo);
        todoList.addEventListener("click", deleteCheck);
        
        //Functions
        function addTodo(event) {
            // Preventing form from submetting
            event.preventDefault();
            
            //Todo DIV
           
        const tododiv = document.createElement("div");
        tododiv.classList.add("todo");
       
        //create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-items');
        tododiv.appendChild(newTodo);
        // ADD TODO TO LOCALSTOARGE
        saveLocalTodos(todoInput.value);
        //CHECK TRASH BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        tododiv.appendChild(trashButton);
        //APPEND TO LIST
        todoList.appendChild(tododiv);
        //Clear Todo input value 
        todoInput.value = "";
        
        }
        function deleteCheck(e){
            //Delete Function
                const item = e.target;
                //DELETE TODO
                if(item.classList[0] === "trash-btn"){
                    const todo = item.parentElement;
                    removeLocalTodos(todo);
                    todo.remove();
                }
                
            }
        function saveLocalTodos(todo){
            //CHECK IF I HAVE THING IN LOCAL?
            let todos;
            if (localStorage.getItem("todos") === null) {
                todos= [];
               }   else{
                todos = JSON.parse(localStorage.getItem("todos"));
                }
                todos.push(todo);
                localStorage.setItem("todos", JSON.stringify(todos));
            }
            function getTodos(){
                todos = [];
                
                if (localStorage.getItem("todos") === null) {
                    todos= [];
                   }   else{
                    todos = JSON.parse(localStorage.getItem("todos"));
                    }
                    todos.forEach(function(todo){
                        //Todo DIV
           
        const tododiv = document.createElement("div");
        tododiv.classList.add("todo");
       
        //create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add('todo-items');
        tododiv.appendChild(newTodo);
        //CHECK TRASH BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        tododiv.appendChild(trashButton);
        //APPEND TO LIST
        todoList.appendChild(tododiv);
        //Clear Todo input value 
                    });
            }
            function removeLocalTodos(todo){
                let todos;
                if (localStorage.getItem("todos") === null){
                    todos = [];
                }
                else{
                    todos = JSON.parse(localStorage.getItem("todos"));
                }
                
                const todoIndex = todo.children[0].innerText;
                todos.splice(todos.indexOf(todoIndex), 1);
                localStorage.setItem('todos', JSON.stringify(todos));
            }

        
        
        
        
        
        
        




         /**************************************** */
        /*var d = document.getElementById('todo');
        d.style.position = "absolute";
        d.style.left = x_pos+'px';
        d.style.top = y_pos+'px';*/
        //*************************************************************************************************** */