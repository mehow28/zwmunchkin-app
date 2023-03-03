import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Munchkin, MunchkinService } from '../services/munchkin.service';

@Component({
  selector: 'app-munchkin-modal',
  templateUrl: './munchkin-modal.component.html',
  styleUrls: ['./munchkin-modal.component.scss'],
})
export class MunchkinModalComponent implements OnInit{
  @Input() id!:number;
  constructor(private modalCtrl: ModalController, private data:MunchkinService) {}

  ngOnInit(): void {
    this.id=this.getMunchkinIndex(this.id)
  }
  
  getMunchkinIndex(idCheck:number){
    const munchkins=this.getMunchkins();
    return munchkins.findIndex(x=>x.id===idCheck)
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  getMunchkins():Munchkin[]{
    return this.data.getMunchkins();
  }

}
