export class Revision {
    idRevision: string;
    matriculaInmobiliaria: string;
    direccion: string;
    fechaVisita: string;
    calificacion: string;
    fechaProximaRevision: string;
    valorRevision: string;

    constructor(idRevision: string, matriculaInmobiliaria: string, direccion: string, fechaVisita: string, calificacion: string, fechaProximaRevision: string, valorRevision: string) {
        this.idRevision= idRevision;
        this.matriculaInmobiliaria= matriculaInmobiliaria;
        this.direccion= direccion;
        this.fechaVisita= fechaVisita;
        this.calificacion= calificacion;
        this.fechaProximaRevision= fechaProximaRevision;
        this.valorRevision= valorRevision;
    }
}