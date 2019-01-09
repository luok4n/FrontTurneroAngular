import { Component, OnInit } from '@angular/core';
import { ListTurnService } from '../../list-turn.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private listservice: ListTurnService, ) {}


    aux: Array<any> = [];
    listurns: Array<{categoria: string, asesor: string, nro_turno: string}> = [];
    contador: 0;
    categoria: string;
    asesor: string;

    ngOnInit() {
        this.listTurn();
    }

    listTurn() {
        this.listservice.listTurn()
        .subscribe(
            res => {
                this.aux[0] = res;
                if ( this.aux[0] === null) {
                    this.listurns[0] =  {categoria: ' ', asesor: ' ', nro_turno: ' '};
                } else {
                    for (let i = 0 ; i < this.aux[0].length ; i++) {
                        this.categoria = res[i].categoria.nombre;
                        this.asesor = res[i].asesor.id;
                        this.listurns[i] = {categoria: this.categoria, asesor: this.asesor, nro_turno: res[i].nro_turno};
                    }
                }
            return(this.listurns);
            }
      );
    }
}
