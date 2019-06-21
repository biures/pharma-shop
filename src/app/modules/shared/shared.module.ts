import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../../components/shop/search-form/search-form.component';
import { MainMenuComponent } from '../../components/shop/main-menu/main-menu.component';
import {
  MatAutocompleteModule, MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToolboxComponent } from '../../components/shared/toolbox/toolbox.component';

@NgModule({
  declarations: [
    SearchFormComponent,
    MainMenuComponent,
    ToolboxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    FlexModule,
    RouterModule
  ],
  exports: [
    SearchFormComponent,
    MainMenuComponent,
    ToolboxComponent
  ]
})
export class SharedModule {
}
