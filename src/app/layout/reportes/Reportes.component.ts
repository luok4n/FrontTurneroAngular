import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
    templateUrl: './Reportes.component.html',
    styleUrls: ['./Reportes.component.scss']
})

export class ReportesComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dashboard: DashboardService, ) {}


    aux: Array<any> = [];
    listurns: Array<{categoria: string, asesor: string, nro_turno: string}> = [];
    contador: 0;
    categoria: string;
    asesor: string;
    tiempo1: any;
    tiempo2: any;
    tiempo3: any;

    ngOnInit() {
        this.listTurn();
        this.Promedio1();
    }

    listTurn() {
        this.dashboard.listTurn()
        .subscribe(
            res => {
                this.aux[0] = res;
                if ( this.aux[0] === null) {
                    this.listurns[0] =  {categoria: ' ', asesor: ' ', nro_turno: ' '};
                } else {
                    for (let i = 0 ; i < this.aux[0].length ; i++) {
                        this.categoria = res[i].categoria.nombre;
                        this.asesor = res[i].asesor.nombre;
                        this.listurns[i] = {categoria: this.categoria, asesor: this.asesor, nro_turno: res[i].nro_turno};
                    }
                }
            return(this.listurns);
            }
      );
    }

    Promedio1() {
        this.dashboard.Promedio1()
        .subscribe(
            res => {
                this.tiempo1 = res;
                return(this.tiempo1);
            }
        );
    }

    Promedio2() {
        this.dashboard.Promedio1()
        .subscribe(
            res => {
                this.tiempo2 = res;
                return(this.tiempo1);
            }
        );
    }

    Promedio3() {
        this.dashboard.Promedio1()
        .subscribe(
            res => {
                this.tiempo3 = res;
                return(this.tiempo1);
            }
        );
    }
}
