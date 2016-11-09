import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Hero } from './hero';
import {HeroService} from './hero.service';
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  providers:[HeroService]
})
export class AppComponent  {
 
  
 

}

@Component({
  selector: 'my-app1',
  template: `<h1>Hello Angular2!</h1>
  <a routerLink="/myapp2" routerLinkActive="active">Crisis Center</a>
  <input type=button (click)=nav2()/>
  `
})
export class AppComponent1 {

  constructor(private router: Router) { }

  nav2() {
    this.router.navigate(['/myapp2']);
  }

}

@Component({
  selector: 'my-app2',
  template: `<h1>Hello Angular3!</h1>
  <table>
  <tr *ngFor="let hero of heroes"  ><td [innerText]=hero.name (click)="msg(hero.name)" >{{hero.name}}</td></tr></table>
  `

})
export class AppComponent2 implements OnInit {
   heroes: Hero[];
  constructor(private HeroServ:HeroService){}

msg(name){
alert(name);
}


   ngOnInit(){
    this.heroes=this.HeroServ.getHeroes();
  }

}