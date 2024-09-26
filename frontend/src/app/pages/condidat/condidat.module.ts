import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondidatPageRoutingModule } from './condidat-routing.module';

import { CondidatPage } from './condidat.page';
import { ItemsListModule } from 'src/app/components/items-list/items-list.module';
import { AddItemModule } from 'src/app/components/add-item/add-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondidatPageRoutingModule,
    ItemsListModule,
    AddItemModule
    
  ],
  declarations: [CondidatPage]
})
export class CondidatPageModule {}
