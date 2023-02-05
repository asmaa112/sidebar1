

let all_menu = document.getElementsByClassName('side_bar')
let mini_menu = document.getElementsByClassName('mini_side_bar')
let check = true
function hide1() {
  if(check == true)
  {
    all_menu[0].style.setProperty("display", 'block');
    mini_menu[0].style.setProperty("display", 'none');
    check = false
  }
  else
  {
    all_menu[0].style.setProperty("display", 'none');
    mini_menu[0].style.setProperty("display", 'block');
   
    check = true
  }

 }