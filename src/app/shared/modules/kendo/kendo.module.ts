import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { PopupModule } from '@progress/kendo-angular-popup';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PageHeaderComponent,
    ProgressBarComponent,
    DataGridComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    IndicatorsModule,
    GridModule,
    DropDownsModule,
    LayoutModule,
    NavigationModule,
    PopupModule,
    RouterModule
  ],
  exports: [
    PageHeaderComponent,
    ProgressBarComponent,
    DataGridComponent,
    DropDownsModule,
    LayoutModule,
    NavigationModule,
    IconsModule,
    PopupModule
  ]
})
export class KendoModule { }
