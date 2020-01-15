import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import {HEROES} from '../mock-heros';
import {Hero} from '../classes/hero';
import { MessageService } from './message.service';
import { DbConnectService } from './db-connect.service'
import { variable } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  constructor(
    private messageService: MessageService,
    private  dbConnectService: DbConnectService,
    ) { }
  
    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(this.dbConnectService.getDB());
  }
  
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(this.dbConnectService.searchDB(id));
  }

}
