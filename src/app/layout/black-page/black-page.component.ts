import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-black-page',
    templateUrl: './black-page.component.html',
    styleUrls: ['./black-page.component.scss']
})
export class BlackPageComponent implements OnInit {
    displayedColumns: string[] = ['id', 'categoria', 'name', 'turno'];
    dataSource = ELEMENT_DATA;
    ngOnInit() {
    }
  }


  export interface PeriodicElement {
    name: string;
    position: number;
    categoria: string;
    turno: number;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: '1', categoria: 'A', turno: 1},
    {position: 2, name: '2', categoria: 'B', turno: 1},
    {position: 3, name: '3', categoria: 'A', turno: 2},
    {position: 4, name: '4', categoria: 'C', turno: 1},
    {position: 5, name: '5', categoria: 'C', turno: 2},
    {position: 6, name: '6', categoria: 'A', turno: 3},
    {position: 7, name: '7', categoria: 'A', turno: 4},
    {position: 8, name: '8', categoria: 'B', turno: 2},
  ];
