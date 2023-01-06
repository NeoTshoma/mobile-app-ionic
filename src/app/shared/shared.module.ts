import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from './../components/pickup-call-card/pickup-call-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PickupCallCardComponent]

})
export class SharedModule { }
