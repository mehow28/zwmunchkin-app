import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Munchkin, MunchkinService } from '../services/munchkin.service';

interface Monster {
  strength: number;
  bonus: number;
}

@Component({
  selector: 'app-battle-modal',
  templateUrl: './battle-modal.component.html',
  styleUrls: ['./battle-modal.component.scss'],
})

export class BattleModalComponent  implements OnInit {
  @Input() id!:number;
  ally:Munchkin|undefined;
  monsters: Monster[] = [{ strength: 0, bonus: 0 }];
  munchkinBonuses:number[]=[0,0];


  constructor(private modalCtrl: ModalController, private data:MunchkinService) {}

  ngOnInit(): void {
    this.id=this.getMunchkinIndex(this.id)
  }
  
  getMunchkinIndex(idCheck:number){
    const munchkins=this.getMunchkins();
    return munchkins.findIndex(x=>x.id===idCheck)
  }

  getMunchkins():Munchkin[]{
    return this.data.getMunchkins();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  addMonster() {
    this.monsters.push({ strength: 0, bonus: 0 });
  }

  deleteMonster(index: number) {
    this.monsters.splice(index, 1);
  }

  updateMonsterStrength(index: number, value: number) {
    this.monsters[index].strength = value;
  }

  updateMonsterBonus(index: number, value: number) {
    this.monsters[index].bonus = value;
  }

  getMunchkinPower():number{
    let power=0
    if(this.ally!==undefined){
      power+=this.getMunchkins()[this.id].level+this.getMunchkins()[this.id].items+this.ally.items+this.ally.level+this.munchkinBonuses[0]+this.munchkinBonuses[1]
      console.log(power)
      return power
    }
    power+=this.getMunchkins()[this.id].level+this.getMunchkins()[this.id].items+this.munchkinBonuses[0]
    console.log(power)
    return power;
  }

  getMonstersPower():number{
    let power=0;
    this.monsters.forEach(monster => {
      power+=monster.bonus+monster.strength
    });
    console.log(power);
    return power;
  }

}
