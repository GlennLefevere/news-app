import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OtherRoutingModule} from './other-routing.module';
import {OtherComponent} from './components/other/other.component';
import {OtherService} from "./services/other.service";


@NgModule({
  declarations: [
    OtherComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule
  ],
  providers: [
    OtherService
  ]
})
export class OtherModule {
}
