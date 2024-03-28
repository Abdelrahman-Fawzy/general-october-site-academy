import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPagination,
    NgbDropdownModule
  ],
  exports: [
    BsDropdownModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPagination,
    NgbDropdownModule
  ]
})
export class SharedModule { }
