import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BattleModalComponent } from "./battle-modal.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule
    ],
    exports:[BattleModalComponent],
    declarations: [BattleModalComponent]
  })
export class BattleModalModule {}
  