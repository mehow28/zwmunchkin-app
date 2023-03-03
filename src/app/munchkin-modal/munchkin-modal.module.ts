import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomePageRoutingModule } from "../home/home-routing.module";
import { OneMunchkinModule } from "../one-munchkin/one-munchkin.module";
import { MuncherViewModule } from "./muncher-view/muncher-view.module";
import { MunchkinModalComponent } from "./munchkin-modal.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      HomePageRoutingModule,
      MuncherViewModule,
      OneMunchkinModule
    ],
    exports:[MunchkinModalComponent],
    declarations: [MunchkinModalComponent]
  })
  export class MunchkinModalModule {}
  