import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './Reportes-routing.module';
import { ReportesComponent } from './Reportes.component';

@NgModule({
    imports: [CommonModule, ReportesRoutingModule],
    declarations: [ReportesComponent]
})
export class ReportesModule {}
