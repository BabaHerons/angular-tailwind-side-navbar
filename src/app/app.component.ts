import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle = (event: MouseEvent) => {
    let parent = (event.target as Element);
    let dropdown_id = 'dropdown-' + parent.id;

    let menu = document.getElementsByClassName('menu')
    for (let i = 0; i < menu.length; i++){
      let k = menu[i].firstElementChild
      if (k != null && !(k.id ===parent.id)){
        k.classList.remove('font-semibold')
        k.classList.remove('bg-blue-200')
      }
    }
    
    
    let dropdown_menu = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < dropdown_menu.length; i++){
      if (!dropdown_menu[i].classList.contains('hidden') && !(dropdown_menu[i].id ===dropdown_id)){
        dropdown_menu[i].classList.add('hidden')
      }
    }


    let dropdown_ele = document.getElementById(dropdown_id);
    dropdown_ele?.classList.toggle('hidden');
    parent.classList.toggle('font-semibold');
    parent.classList.toggle('bg-blue-200')
  };
}
