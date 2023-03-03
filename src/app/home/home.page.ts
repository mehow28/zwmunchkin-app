import { Component } from '@angular/core';
import { AlertController, RefresherCustomEvent } from '@ionic/angular';

import { Munchkin, MunchkinService } from '../services/munchkin.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  editCheck=false;
  
  constructor(private data: MunchkinService,private alertController: AlertController) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMunchkins(): Munchkin[] {
    return this.data.getMunchkins();
  }

  async addMunchkinAlert() {
    let sexCheck=false;
    const alert = await this.alertController.create({
      header: 'Dodaj munchkina',
      buttons: [
          {
            text: 'Anuluj',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (alertData) => {
              this.data.addMunchkin(alertData.name,true)
            },
          },
        ],  
      inputs: [
        {
          name:'name',
          type:'text',
          placeholder: 'Imie',
        }
      ],
    });

    await alert.present();
  }
}
  


