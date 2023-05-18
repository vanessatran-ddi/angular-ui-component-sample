import { Component } from '@angular/core';
import {menus} from "./menus";


interface Menu {
  displayname: string;
  url?: string;
  name: string;
  active?: boolean;
  subMenus: Menu[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   items: Menu[] = [];
   constructor() {
     menus.forEach(menu => {
       const item: Menu = {
          displayname: menu.DisplayName,
          name: menu.Name,
          url: menu.Url,
          active: false,
          subMenus: []
       };
       if (menu.SubMenus && menu.SubMenus.length > 0) {
         menu.SubMenus.forEach(subMenu => {
           item.subMenus.push({
             displayname: subMenu.DisplayName,
             name: menu.Name,
             url: subMenu.Url,
             active: false,
             subMenus: []
           });
         });
       }
        this.items.push(item);
     });
     // Set first menu item and first sub menu item active
     this.items[0].subMenus[0].active = true;
   }
   handleSelectMenuItem(event: any) {
     console.log("Someone clicked on handleSelectMenuItem ");
     console.log("Navigating to url: ", event.detail.url);
   }
}
