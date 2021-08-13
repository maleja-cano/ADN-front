import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { RevisionPagina } from '../page/revision/revision.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let revision: RevisionPagina;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        revision = new RevisionPagina();
    });

    it('Deberia guardar revision', () => {
        page.navigateTo();
        navBar.clickBotonRevisiones();
        revision.clickBotonGuardarRevision();
        revision.ingresarMatricula('230');
        revision.ingresarDireccion('calle');
        revision.ingresarFechaVisita('2021-08-01');
        revision.ingresarCalificacion('Buena');
        //expect(1)
    });

    it('Deberia mostrar revisiones', () => {
        page.navigateTo();
        navBar.clickBotonRevisiones();
        revision.clickMostrarRevisiones();
        expect(4).toBe(revision.contarRevisiones());
    });
});