import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menu = [
    {
      menu: 'Python',
      items:[
        {
          item:'String',
          link:'/python/string'
        },
        {
          item:'Lists',
          link:'/python/lists'
        },
        {
          item:'Dictionary',
          link:'/python/dictionary'
        },
      ]
    },
    {
      menu: 'Department',
      items:[
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
      menu: 'Contact us',
      // items:[]
    },
    {
      menu: 'About',
      // items:[]
    },
    {
      menu: 'Coding',
      // items:[]
    }
  ]


  toggle = (event: MouseEvent) => {
    let ele = event.target as Element

    let dropdown_list = document.getElementsByClassName('dropdown')
    for (let i=0; i<dropdown_list.length; i++){
      let k = dropdown_list[i]
      if (!k.classList.contains('hidden') && k.id != ('dropdown-' + ele.id)){
        k.classList.add('hidden')
      }
    }

    let dropdown = document.getElementById('dropdown-' + ele.id)
    dropdown?.classList.toggle('hidden')
  }

  toggle_menu = () => {
    let menu = document.getElementById('mobile-nav-menu')
    menu?.classList.toggle('hidden')
  }
}
