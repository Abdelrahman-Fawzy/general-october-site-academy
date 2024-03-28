import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccreditedCertificatesComponent } from './accredited-certificates.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AccreditedCertificatesComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccreditedCertificatesRoutingModule { }
