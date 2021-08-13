import { Component, OnInit } from '@angular/core';
import { RevisionService } from '@revision/shared/service/revision.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-guardar-revision',
  templateUrl: './guardar-revision.component.html',
  styleUrls: ['./guardar-revision.component.css']
})
export class GuardarRevisionComponent implements OnInit {
  revisionForm: FormGroup;
  constructor(protected revisionServices: RevisionService) { }

  ngOnInit(): void {
     this.construirFormularioRevision();
  }

  cerar() {
    //this.revisionServices.guardar(this.revisionForm.value);
    this.revisionServices.guardar(this.revisionForm.value).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  private construirFormularioRevision() {
    this.revisionForm = new FormGroup({
      matriculaInmobiliaria: new FormControl('',[Validators.required]),
      direccion: new FormControl(''),
      fechaVisita: new FormControl('',[Validators.required]),
      calificacion: new FormControl('',[Validators.required])
    });
  }

}
