import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { AddItemComponent } from './add-item.component';

@NgModule({
  declarations: [
    AddItemComponent,  // Declare your AddItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Include IonicModule to use Ionic components
  ],
  exports: [
    AddItemComponent  // Export it if you want to use it in other modules
  ]
})
export class AddItemModule { }