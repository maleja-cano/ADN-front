import { by, element } from 'protractor';

export class RevisionPagina {
    private linkGuardarRevision = element(by.id('linkGuardarRevision'));
    private linkListarRevision = element(by.id('linkListarRevision'));
    private inputMatriculaInmobiliaria = element(by.id('matriculaInmobiliaria'));
    private inputDireccion = element(by.id('direccion'));
    private inputFechaVisita = element(by.id('fechaVisita'));
    private inputCalificacion = element(by.id('calificacion'));
    private listaRevisiones = element.all(by.css('r'));

    async clickBotonGuardarRevision() {
        await this.linkGuardarRevision.click();
    }

    async clickMostrarRevisiones() {
        await this.linkListarRevision.click();
    }

    async ingresarMatricula(matriculaInmobiliaria) {
        await this.inputMatriculaInmobiliaria.sendKeys(matriculaInmobiliaria);
    }

    async ingresarDireccion(direccion) {
        await this.inputDireccion.sendKeys(direccion);
    }

    async ingresarFechaVisita(fechaVisita) {
        await this.inputFechaVisita.sendKeys(fechaVisita);
    }

    async ingresarCalificacion(calificacion) {
        await this.inputCalificacion.sendKeys(calificacion);
    }

    async contarRevisiones() {
        return this.listaRevisiones.count();
    }
}