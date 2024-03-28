import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccreditedCertificatesRoutingModule } from './accredited-certificates-routing.module';
import { AccreditedCertificatesComponent } from './accredited-certificates.component';


@NgModule({
  declarations: [
    AccreditedCertificatesComponent
  ],
  imports: [
    CommonModule,
    AccreditedCertificatesRoutingModule
  ]
})
export class AccreditedCertificatesModule { }
