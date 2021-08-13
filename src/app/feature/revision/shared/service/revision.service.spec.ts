import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RevisionService } from './revision.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Revision } from '../model/revision';
import { HttpResponse } from '@angular/common/http';
import { RevisionEnvio } from '../model/revisionEnvio';

describe('RevisionService', () => {
  let httpMock: HttpTestingController;
  let service: RevisionService;
  const apiEndpointRevisionConsulta = `${environment.endpoint}/revisiones`;
  const apiEndpointRevision = `${environment.endpoint}/revisiones/guardarRevision`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RevisionService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(RevisionService);
  });

  it('should be created', () => {
    const revisionService: RevisionService = TestBed.inject(RevisionService);
    expect(revisionService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyRevisiones = [
      new Revision('1', '230', 'calle', '2021-08-01', 'Buena', '2026-08-31', '50000'), new Revision('2', '231', 'carrera', '2021-08-01', 'Mala"', '2026-08-31', '30000')
    ];
    service.consultar().subscribe(revisiones => {
      expect(revisiones.length).toBe(2);
      expect(revisiones).toEqual(dummyRevisiones);
    });
    const req = httpMock.expectOne(apiEndpointRevisionConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRevisiones);
  });

  it('deberia crear un producto', () => {
    const dummyRevision = new RevisionEnvio('230', 'calle', '2021-08-01', 'Buena');
    service.guardar(dummyRevision).subscribe(
      //(respuesta) => {
      //expect(respuesta).toEqual('response');
    //}
    );
    const req = httpMock.expectOne(apiEndpointRevision);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  
});
