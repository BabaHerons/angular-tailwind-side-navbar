import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent {
  @Input() mobile_menu?: Array<any>;


  toggle_mob = (event: MouseEvent) => {
    let ele = event.target as Element

    let dropdown_list = document.getElementsByClassName('mobile-dropdown')
    for (let i=0; i<dropdown_list.length; i++){
      let k = dropdown_list[i]
      if (!k.classList.contains('hidden') && k.id != ('mobile-dropdown-' + ele.id)){
        k.classList.add('hidden')
      }
    }

    let dropdown = document.getElementById('mobile-dropdown-' + ele.id)
    dropdown?.classList.toggle('hidden')
  }
}
