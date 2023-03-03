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
    const newId = Math.max(...this.munchkins.map(x => x.id))+1;
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
    if(increase){
      if(this.munchkins[this.munchkins.findIndex(x=>x.id===id)].level<10){
        this.munchkins[this.munchkins.findIndex(x=>x.id===id)].level=this.munchkins[this.munchkins.findIndex(x=>x.id===id)].level+1
      }
    }
    else{
      if(this.munchkins[this.munchkins.findIndex(x=>x.id===id)].level>1){
        this.munchkins[this.munchkins.findIndex(x=>x.id===id)].level=this.munchkins[this.munchkins.findIndex(x=>x.id===id)].level-1
      }
    }
  
    this.saveMunchkinsToStorage();

  }


  public changeItems(id:number,increase:boolean):void{
      if(increase){       
          this.munchkins[this.munchkins.findIndex(x=>x.id===id)].items=this.munchkins[this.munchkins.findIndex(x=>x.id===id)].items+1        
      }
      else{
          this.munchkins[this.munchkins.findIndex(x=>x.id===id)].items=this.munchkins[this.munchkins.findIndex(x=>x.id===id)].items-1       
      }
    this.saveMunchkinsToStorage();

  }

  public changeSex(id:number):void{
    this.munchkins[this.munchkins.findIndex(x=>x.id===id)].male=!this.munchkins[this.munchkins.findIndex(x=>x.id===id)].male
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
      this.munchkins[this.munchkins.findIndex(x=>x.id===id)].name = newName;
    }
    if (newLevel != null) {
      this.munchkins[this.munchkins.findIndex(x=>x.id===id)].level = newLevel;
    }
    if (newItems != null) {
      this.munchkins[this.munchkins.findIndex(x=>x.id===id)].items = newItems;
    }
    if (changeSex) {
      this.munchkins[this.munchkins.findIndex(x=>x.id===id)].male = !this.munchkins[this.munchkins.findIndex(x=>x.id===id)].male;
    }
    this.saveMunchkinsToStorage();

  }

  public removeMunchkin(id: number): void {
    id=this.munchkins.findIndex(x=>x.id===id);
    this.munchkins.splice(id, 1);
    this.saveMunchkinsToStorage();

  }
}
