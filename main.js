/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
alert("Exciting! your about to add a Wish, to your List."); /*This line of code is going to tell us that the javascript file is connected to the HTML*/
/*The following const are our three elements.*/
window.addEventListener('load', () => {     /*This waits for the page to load.*/
    const form = document.querySelector("#new-wish-form"); 
    const input = document.querySelector("#new-wish-input");
    const list_el = document.querySelector("#wishes"); /*This is the list element.*/
    
    form.addEventListener('submit', (e) => {
       e.preventDefault(); /*This Function stops it from refreshing the page and jumping to a different page.*/
       
       const wish = input.value;
       
       if (!wish) { /*This is telling the user to fill in the form.*/
           alert("Please make your wish");
           return;
       }
       const wish_el = document.createElement("div"); /*This allow me to create DOM Node, which we place in the page.*/
     wish_el.classList.add("wish");
       
       const wish_content_el = document.createElement("div");
       wish_content_el.classList.add("content");
       
      wish_el.appendChild(wish_content_el);
      
      const wish_input_el = document.createElement("input");
      wish_input_el.classList.add("text");
      wish_input_el.type = "text";
      wish_input_el.value = wish;
      wish_input_el.setAttribute("readonly", "readonly");
      
      wish_content_el.appendChild(wish_input_el);
      
      const wish_actions_el = document.createElement("div");
      wish_actions_el.classList.add("actions");
      
      const wish_edit_el = document.createElement("button");
      wish_edit_el.classList.add("edit");
      wish_edit_el.innerHTML = "Edit";
      
        const wish_delete_el = document.createElement("button");
        wish_delete_el.classList.add("delete");
        wish_delete_el.innerHTML = "Delete";
        
        wish_actions_el.appendChild(wish_edit_el);
        wish_actions_el.appendChild(wish_delete_el);
        
        wish_el.appendChild(wish_actions_el);
       
       list_el.appendChild(wish_el);
       
       input.value = " ";
       
       wish_edit_el.addEventListener('click', () => {
       if (wish_edit_el.innerText.toLowerCase() == "edit" ) {
           wish_input_el.removeAttribute("readonly");
           wish_input_el.focus();
           wish_edit_el.innerText = "Save";
       } else {
           wish_input_el.setAttribute("readonly", "readonly");
           wish_edit_el.innerText = "Edit";
       }}
               );
       wish_delete_el.addEventListener('click', () => {
           list_el.removeChild(wish_el);
       }
               
                );
       wishes();/*Variable name that allows the sender to know what they are doing is really working, in the site.*/
       function wishes() {
           window.alert("Sending through");/* Sending a pop out to the sender that their wish is going through and that it has been colllected*/
       }
       

    })
})