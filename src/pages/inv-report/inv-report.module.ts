import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvReportPage } from './inv-report';

@NgModule({
  declarations: [
    InvReportPage,
  ],
  imports: [
    IonicPageModule.forChild(InvReportPage),
  ],
  exports: [
    InvReportPage
  ]
})
export class InvReportPageModule {}
