import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MunchkinService } from '../services/munchkin.service';

@Component({
  selector: 'app-munchkin-modal',
  templateUrl: './munchkin-modal.component.html',
  styleUrls: ['./munchkin-modal.component.scss'],
})
export class MunchkinModalComponent {
  @Input() id!:number;
  constructor(private modalCtrl: ModalController, private data:MunchkinService) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  getMunchkins(){
    return this.data.getMunchkins();
  }

}
