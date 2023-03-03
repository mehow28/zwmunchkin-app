import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomePageRoutingModule } from "../home/home-routing.module";
import { OneMunchkinComponent } from "./one-munchkin.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      HomePageRoutingModule
    ],
    exports:[OneMunchkinComponent],
    declarations: [OneMunchkinComponent]
  })
  export class OneMunchkinModule {}
  