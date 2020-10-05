// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class MaterialModule { }


import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';

// import {
//   MatTableModule,
//   MatStepperModule,
//   MatButtonModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatOptionModule,
//   MatSelectModule,
//   MatIconModule,
//   MatPaginatorModule,
//   MatSortModule
// } from '@angular/material';

@NgModule({
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule {}
