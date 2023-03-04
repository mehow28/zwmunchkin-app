import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BattleModalComponent } from 'src/app/battle-modal/battle-modal.component';
import { Munchkin, MunchkinService } from 'src/app/services/munchkin.service';

@Component({
  selector: 'app-muncher-view',
  templateUrl: './muncher-view.component.html',
  styleUrls: ['./muncher-view.component.scss'],
})
export class MuncherViewComponent   {
  @Input() munchkin!:Munchkin;
  
  constructor(private data: MunchkinService,private modalCtrl: ModalController) { }

  async showMunchkinModal(id:number) {   
    const modal = await this.modalCtrl.create({
      component: BattleModalComponent,
      componentProps:{
        id:id
      }
    });
    modal.present();
  }


  getMunchkinIndex(idCheck:number){
    const munchkins=this.data.getMunchkins();
    return munchkins.findIndex(x=>x.id===idCheck)
  }

  changeMunchkinLevel(id:number,increase:boolean){
    this.data.changeLevel(id,increase)
  }

  changeMunchkinItems(id:number,increase:boolean){
    this.data.changeItems(id,increase)
  }

  changeMunchkinSex(id:number){
    this.data.changeSex(id)
  }
}
