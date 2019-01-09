import { Component, OnInit } from '@angular/core';
import { GenTurnService } from '../../gen-turn.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { error } from '@angular/compiler/src/util';


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    constructor(private route: ActivatedRoute,
        private router: Router,
        private turnService: GenTurnService, ) {}

    turn: any;

    ngOnInit() {}

    externo() {
        this.turnService.externo()
        .subscribe(
            res => {
               this.turn = res;
               alert('Numero de turno: ' + this.turn.nro_turno + '\nCategoria: ' + this.turn.categoria.nombre);
            },
            error => {
                alert('Error al llamar turno');
            }
      );
    }

    interno() {
        this.turnService.interno()
        .subscribe(
            res => {
               this.turn = res;
               alert('Numero de turno: ' + this.turn.nro_turno + '\nCategoria: ' + this.turn.categoria.nombre);
            },
            error => {
                alert('Error al llamar turno');
            }
      );
    }

    tercer() {
        this.turnService.tercer()
        .subscribe(
            res => {
                this.turn = res;
                alert('Numero de turno: ' + this.turn.nro_turno + '\nCategoria: ' + this.turn.categoria.nombre);
             },
            error => {
                alert('Error al llamar turno');
            }
      );
    }
}
