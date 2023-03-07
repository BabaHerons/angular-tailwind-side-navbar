import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  side_menu = [
    {
      menu: 'Home',
      items: [
        {
          item:'Part 1',
          link:'/part-1'
        },
        {
          item:'Part 2',
          link:'/part-2'
        },
        {
          item:'Part 3',
          link:'/part-3'
        },
      ]
    },
    {
      menu: 'About',
      // items: []
    },
    {
      menu: 'Department',
      items: [
        {
          item:'Physics',
          link:'/physics'
        },
        {
          item:'Chemistry',
          link:'/chemistry'
        },
        {
          item:'Mathematics',
          link:'/maths'
        },
      ]
    },
    {
      menu: 'Coding',
      items: [
        {
          item:'Python',
          link:'/python'
        },
        {
          item:'JavaScript',
          link:'/js'
        },
        {
          item:'Java',
          link:'/java'
        },
      ]
    },
  ]
  
  
  
  
  
  
  
  
  
  
  
  toggle = (event: MouseEvent) => {
    let parent = (event.target as Element);
    let dropdown_id = 'dropdown-' + parent.id;

    let menu = document.getElementsByClassName('menu')
    for (let i = 0; i < menu.length; i++){
      let k = menu[i].firstElementChild
      if (k != null && !(k.id ===parent.id)){
        k.classList.remove('active')
        
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
    parent.classList.toggle('active');
  };
}
