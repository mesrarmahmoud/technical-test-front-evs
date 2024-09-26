import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondidatPage } from './condidat.page';

const routes: Routes = [
  {
    path: '',
    component: CondidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondidatPageRoutingModule {}
