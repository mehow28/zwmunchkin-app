import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MunchkinModalComponent } from '../munchkin-modal/munchkin-modal.component';
import { Munchkin, MunchkinService } from '../services/munchkin.service';

@Component({
  selector: 'app-one-munchkin',
  templateUrl: './one-munchkin.component.html',
  styleUrls: ['./one-munchkin.component.scss'],
})
export class OneMunchkinComponent {
  @Input() munchkin!: Munchkin;
  @Input() isEditMode!:boolean;
  @Input() viewMode!:string;
  constructor(private data: MunchkinService,private alertController: AlertController,private modalCtrl: ModalController){}

  async showMunchkinModal(id:number) {
    const modal = await this.modalCtrl.create({
      component: MunchkinModalComponent,
      componentProps:{
        id:id
      }
    });
    modal.present();
  }

  async removeMunchkinAlert() {
    let sexCheck=false;
    const alert = await this.alertController.create({
      header: 'Usunąć '+this.munchkin.name+'?',
      buttons: [
          {
            text: 'Anuluj',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.data.removeMunchkin(this.munchkin.id)
            },
          },
        ],  
    });

    await alert.present();
  }

  async editMunchkinAlert() {
    let sexCheck=false;
    const alert = await this.alertController.create({
      header: 'Edytujesz munchkina '+this.munchkin.name+'.',
      buttons: [
          {
            text: 'Anuluj',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (eventData) => {
              this.data.editMunchkin(this.munchkin.id,false,eventData.name,undefined,undefined)
            },
          },
        ], 
      inputs: [
          {
            name:'name',
            type:'text',
            placeholder: this.munchkin.name,
          }
        ],
    });

    await alert.present();
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}