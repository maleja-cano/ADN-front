import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisionService } from '@revision/shared/service/revision.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { GuardarRevisionComponent } from './guardar-revision.component';

describe('GuardarRevisionComponent', () => {
  let component: GuardarRevisionComponent;
  let fixture: ComponentFixture<GuardarRevisionComponent>;
  let servicioRevision: RevisionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarRevisionComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [RevisionService, HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarRevisionComponent);
    component = fixture.componentInstance;
    servicioRevision=TestBed.inject(RevisionService);
    spyOn(servicioRevision, 'guardar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
