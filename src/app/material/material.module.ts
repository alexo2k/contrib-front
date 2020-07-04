import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

const material = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule
];

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
