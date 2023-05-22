import {Component, isDevMode} from '@angular/core';
import {menus} from "./menus";
import {Router} from "@angular/router";


interface Menu {
  displayname: string;
  url?: string;
  name: string;
  active?: boolean;
  subMenus: Menu[];
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   items: Menu[] = [];
   activeMenu: string = "Certification-Work Queue";
   baseUrl = "";
   constructor(private router: Router) {
     this.items = this.getItems();
     if (!isDevMode()) {
       this.baseUrl = "/angular-ui-component-sample";
     }
   }
    getItems(menuItems: any = null): Menu[] {
    const children = menuItems ? menuItems : menus;
    return children
      .map((item: any) => {
        return {
          displayname: item.DisplayName,
          name: item.Name,
          url: item.Url,
          active: item.Name === this.activeMenu,
          subMenus: item.SubMenus && item.SubMenus.length > 0 ? this.getItems([...item.SubMenus]) : [],
      }
      });
  }

  handleSelectMenuItem(event: any) {
     this.activeMenu = event.detail.name;
     console.log("This activeMenu is ", this.activeMenu);
     this.items = [...this.getItems()];
     const selectedMenuUrl = event.detail.url;
      if (selectedMenuUrl) {
        this.router.navigateByUrl(selectedMenuUrl);
      }
   }
}
