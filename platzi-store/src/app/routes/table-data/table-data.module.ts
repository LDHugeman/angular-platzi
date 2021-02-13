import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableDataRoutingModule } from './table-data-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableDataComponent } from './components/table-data/table-data.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableDataComponent],
  imports: [CommonModule, TableDataRoutingModule, MatTableModule],
})
export class TableDataModule {}
