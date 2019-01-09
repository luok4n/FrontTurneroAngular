import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesComponent } from './Reportes.component';

describe('ReportesComponent', () => {
    let component: ReportesComponent;
    let fixture: ComponentFixture<ReportesComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ReportesComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});