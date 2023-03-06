import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Munchkin, MunchkinService } from '../services/munchkin.service';

@Component({
  selector: 'app-munchkin-modal',
  templateUrl: './munchkin-modal.component.html',
  styleUrls: ['./munchkin-modal.component.scss'],
})
export class MunchkinModalComponent implements OnInit{
  @Input() id!:number;
  constructor(private modalCtrl: ModalController, private data:MunchkinService,private alertController: AlertController) {}

  ngOnInit(): void {
    this.id=this.getMunchkinIndex(this.id)
  }
  
  
  getMunchkinIndex(idCheck:number){
    const munchkins=this.getMunchkins();
    return munchkins.findIndex(x=>x.id===idCheck)
  }

  killMunchkin(id:number){
    this.data.killMunchkin(id);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  getMunchkins():Munchkin[]{
    return this.data.getMunchkins();
  }
  
  async killMunchkinAlert(id:number) {
    const alert = await this.alertController.create({
      header: 'Zabić '+this.getMunchkins()[id].name+'?',
      buttons: [
          {
            text: 'Anuluj',
            role: 'cancel',
            handler: () => {
            },
          },
          {
            text: 'MORDUJ!',
            role: 'confirm',
            handler: () => {
              this.killMunchkin(id);
              alert.dismiss();
            },
          },
        ],  
    });
    await alert.present();
  }
}
