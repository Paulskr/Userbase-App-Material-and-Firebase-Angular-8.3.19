import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatInputModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatListModule, MatToolbarModule, MatProgressBarModule } from '@angular/material';


@NgModule({
  imports: [MatExpansionModule, MatInputModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatListModule, MatToolbarModule, MatProgressBarModule],
  exports: [MatExpansionModule, MatInputModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatListModule, MatToolbarModule, MatProgressBarModule]
})

export class MaterialModule { }
