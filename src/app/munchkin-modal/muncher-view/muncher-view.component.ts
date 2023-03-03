import { Component, Input } from '@angular/core';
import { Munchkin, MunchkinService } from 'src/app/services/munchkin.service';

@Component({
  selector: 'app-muncher-view',
  templateUrl: './muncher-view.component.html',
  styleUrls: ['./muncher-view.component.scss'],
})
export class MuncherViewComponent   {
  @Input() munchkin!:Munchkin;
  
  constructor(private data: MunchkinService) { }

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
