import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { DbConnectService } from '../services/db-connect.service'
import {HeroService} from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

constructor(
  private heroService: HeroService,
  private dbConnectService: DbConnectService,
  ) { }

ngOnInit() {
  this.getHeroes();
}


  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
