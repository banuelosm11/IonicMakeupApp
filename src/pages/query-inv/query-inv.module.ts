import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryInvPage } from './query-inv';

@NgModule({
  declarations: [
    QueryInvPage,
  ],
  imports: [
    IonicPageModule.forChild(QueryInvPage),
  ],
  exports: [
    QueryInvPage
  ]
})
export class QueryInvPageModule {}
