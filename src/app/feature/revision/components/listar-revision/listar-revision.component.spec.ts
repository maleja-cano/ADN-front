import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ListarRevisionComponent } from './listar-revision.component';
import { RevisionService } from '@revision/shared/service/revision.service'
import { Revision } from '@revision/shared/model/revision';
import { HttpClient } from '@angular/common/http';

describe('ListarRevisionComponent', () => {
  let component: ListarRevisionComponent;
  let fixture: ComponentFixture<ListarRevisionComponent>;
  let servicioRevision: RevisionService;
  let revision: Revision[] =[new Revision("1", "230", "calle", "2021-08-01", "Buena", "2026-08-31", "50000"), new Revision("2", "231", "carrera", "2021-08-01", "Mala", "2026-08-31", "30000")]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRevisionComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [RevisionService, HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRevisionComponent);
    component = fixture.componentInstance;
    servicioRevision = TestBed.inject(RevisionService);
    spyOn(servicioRevision, 'consultar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(revision.length).toBe(component.revision.length);
  });
});
