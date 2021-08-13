import { Injectable } from '@angular/core';
//import { HttpService } from '@core-service/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Revision } from '../model/revision';
import { RevisionEnvio } from '../model/revisionEnvio';


@Injectable({
	providedIn: 'root',
})
export class RevisionService {
  constructor(protected http: HttpClient) { }

  public consultar() {
    return this.http.get<Revision[]>(`${environment.endpoint}/revisiones`, {});
  }

  guardar(revisionE: RevisionEnvio) {
    return this.http.post<RevisionEnvio>(`${environment.endpoint}/revisiones/guardarRevision`, revisionE,{
			observe: 'response'
		});
  }
}

