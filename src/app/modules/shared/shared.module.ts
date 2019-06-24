import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../../components/shop/search-form/search-form.component';
import { MainMenuComponent } from '../../components/shop/main-menu/main-menu.component';
import {
  MatAutocompleteModule, MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule, MatExpansionModule,
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
import { CharacteristicPanelComponent } from '../../components/shared/characteristic-panel/characteristic-panel.component';
import { CapitalizePipe } from '../../utils/capitalize.pipe';
import { AvailabilityBadgeComponent } from '../../components/shared/availability-badge/availability-badge.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FavoriteTooltipDirective } from '../../components/shared/toolbox/favorite-tooltip/favorite-tooltip.directive';
import { FavoriteTooltipComponent } from '../../components/shared/toolbox/favorite-tooltip/favorite-tooltip.component';

@NgModule({
  declarations: [
    SearchFormComponent,
    MainMenuComponent,
    ToolboxComponent,
    CharacteristicPanelComponent,
    AvailabilityBadgeComponent,
    CapitalizePipe,
    FavoriteTooltipDirective,
    FavoriteTooltipComponent
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
    MatExpansionModule,
    FlexModule,
    RouterModule,
    OverlayModule
  ],
  exports: [
    SearchFormComponent,
    MainMenuComponent,
    ToolboxComponent,
    CharacteristicPanelComponent,
    AvailabilityBadgeComponent,
    CapitalizePipe,
    FavoriteTooltipDirective,
    FavoriteTooltipComponent
  ]
})
export class SharedModule {
}
