import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {Hero} from '../classes/hero';

@Injectable({
  providedIn: 'root'
})
export class DbConnectService {
  db = firebase.firestore();
  heroes: Hero[] = [];

getDB(){
    this.db.collection('Testing').onSnapshot((tests) =>{
          tests.docs.forEach(tet  =>{
           if (!this.heroes.some(hero => (hero.id === tet.data().id)) ){
            this.heroes.push(  {  "id": tet.data().id, "name": tet.data().name } )
           }
          });
        });
    return this.heroes
  }

  searchDB(id: number){
   for (var i =0; i<this.heroes.length; i++ ){
      if(this.heroes[i].id == id){
        return this.heroes[i];
      }   
    }
   }

  addToDB(name: string){
    this.db.collection('Testing').add({
id: this.heroes.length +1,
name: name,
    })
  }
  constructor() { }
}
