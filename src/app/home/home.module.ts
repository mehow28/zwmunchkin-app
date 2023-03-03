import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { OneMunchkinModule } from '../one-munchkin/one-munchkin.module';
import { MunchkinModalModule } from '../munchkin-modal/munchkin-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    OneMunchkinModule,
    MunchkinModalModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
