import { ReportesModule } from './Reportes.module';

describe('ReportesgeModule', () => {
    let reportesModule: ReportesModule;

    beforeEach(() => {
        reportesModule = new ReportesModule();
    });

    it('should create an instance', () => {
        expect(ReportesModule).toBeTruthy();
    });
});
