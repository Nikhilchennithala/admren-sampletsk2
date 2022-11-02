import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatTableModule
  ],
  exports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatToolbarModule,
      MatSliderModule,
      MatCheckboxModule,
      MatRadioModule,
      MatRippleModule,
      MatTableModule
  ]
})
export class MaterialModule { }
