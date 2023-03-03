import { Injectable } from '@angular/core';

export interface Munchkin {
  id: number;
  name: string;
  male: boolean;
  level: number;
  items: number;
}

@Injectable({
  providedIn: 'root',
})
export class MunchkinService {
  public munchkins: Munchkin[] = [{
    id:0,
    name:'secret muncher',
    male:false,
    level:1,
    items:0
  }];

  constructor() {
    const savedMunchkins = localStorage.getItem('munchkins');
    if (savedMunchkins) {
      this.munchkins = JSON.parse(savedMunchkins);
    }
  }
  
  private saveMunchkinsToStorage(): void {
    localStorage.setItem('munchkins', JSON.stringify(this.munchkins));
  }
  
  public getMunchkins(): Munchkin[] {
    return this.munchkins;
  }

  public addMunchkin(givenName: string, givenMale: boolean): void {
    const newId = this.munchkins.length;
    this.munchkins.push({
      id: newId,
      name: givenName,
      male: givenMale,
      level: 1,
      items: 0,
    });
    this.saveMunchkinsToStorage();

    console.log(this.munchkins)
  }

  public changeLevel(id:number,increase:boolean):void{
    if(this.munchkins.length>id){
      if(increase){
        if(this.munchkins[id].level<10){
          this.munchkins[id].level=this.munchkins[id].level+1
        }
      }
      else{
        if(this.munchkins[id].level>1){
          this.munchkins[id].level=this.munchkins[id].level-1
        }
      }
    }
    this.saveMunchkinsToStorage();

  }


  public changeItems(id:number,increase:boolean):void{
    if(this.munchkins.length>id){
      if(increase){       
          this.munchkins[id].items=this.munchkins[id].items+1        
      }
      else{
          this.munchkins[id].items=this.munchkins[id].items-1       
      }
    }
    this.saveMunchkinsToStorage();

  }

  public changeSex(id:number):void{
    if(this.munchkins.length>id){
      this.munchkins[id].male=!this.munchkins[id].male
    }
    this.saveMunchkinsToStorage();

  }

  public editMunchkin(
    id: number,
    changeSex: boolean,
    newName?: string,
    newLevel?: number,
    newItems?: number
  ): void {
    if (newName != null) {
      this.munchkins[id].name = newName;
    }
    if (newLevel != null) {
      this.munchkins[id].level = newLevel;
    }
    if (newItems != null) {
      this.munchkins[id].items = newItems;
    }
    if (changeSex) {
      this.munchkins[id].male = !this.munchkins[id].male;
    }
    this.saveMunchkinsToStorage();

  }

  public removeMunchkin(id: number): void {
    this.munchkins.splice(id, 1);
    this.saveMunchkinsToStorage();

  }
}
