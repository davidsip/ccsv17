import { Component } from '@angular/core';

export class Item {
  id: string
  name: string;
}

const ITEMS: Item[] = [
{ id: '', name: 'Home' },
{ id: 'Who we are', name: 'About' },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Christian Church of Simi Valley';

//  MENU: any = [
//    { name: 'Home' },
//    { name: 'About' },
//  ];

//  menus = this.MENU;

 items = ITEMS;
 selectedItem: Item;

 onSelect(item: Item): void {
  this.selectedItem = item;
}




  showHomeItems = false;
  showAboutItems = false;
  showMinistryItems = false;
  showContactItems = false;



  homeDropdown(e) {
    this.showHomeItems = !this.showHomeItems;
 }
 aboutDropdown(e) {
     this.showAboutItems = !this.showAboutItems;
 }
 contactDropdown(e) {
     this.showContactItems = !this.showContactItems;
 }
 ministryDropdown(e) {
     this.showMinistryItems = !this.showMinistryItems;
 }


}
