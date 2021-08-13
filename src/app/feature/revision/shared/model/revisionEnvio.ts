export class RevisionEnvio {
    matriculaInmobiliaria: string;
    direccion: string;
    fechaVisita: string;
    calificacion: string;

    constructor(matriculaInmobiliaria: string, direccion: string, fechaVisita: string, calificacion: string) {
        this.matriculaInmobiliaria= matriculaInmobiliaria;
        this.direccion= direccion;
        this.fechaVisita= fechaVisita;
        this.calificacion= calificacion;
    }
}