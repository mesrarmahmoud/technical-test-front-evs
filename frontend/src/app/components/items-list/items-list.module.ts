import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemsListComponent } from './items-list.component';

@NgModule({
  declarations: [ItemsListComponent],
  imports: [
    CommonModule,
    IonicModule // Import IonicModule to use Ionic components
  ],
  exports: [ItemsListComponent] // Export the component for use in other modules
})
export class ItemsListModule {}