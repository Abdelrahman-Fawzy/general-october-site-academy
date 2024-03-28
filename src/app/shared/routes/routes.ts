import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "home",
    loadChildren: () => import("../../components/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "accredited-certificates",
    loadChildren: () => import("../../components/accredited-certificates/accredited-certificates.module").then((m) => m.AccreditedCertificatesModule),
  }
];
