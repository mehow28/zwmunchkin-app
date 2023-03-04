import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BattleModalModule } from "src/app/battle-modal/battle-modal.module";
import { MuncherViewComponent } from "./muncher-view.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      BattleModalModule
    ],
    exports:[MuncherViewComponent],
    declarations: [MuncherViewComponent]
  })
  export class MuncherViewModule {}
  