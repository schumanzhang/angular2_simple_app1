import { Component } from '@angular/core';

//every component has a decorator, selector, and then template
//this app component should be the 'meeting place' of all sub-components
@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
    <hr/>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
 
 
}
