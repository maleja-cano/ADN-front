import { Component, OnInit } from '@angular/core';
import {Revision} from '@revision/shared/model/revision';
import { RevisionService } from '@revision/shared/service/revision.service';

@Component({
  selector: 'app-listar-revision',
  templateUrl: './listar-revision.component.html',
  styleUrls: ['./listar-revision.component.css']
})
export class ListarRevisionComponent implements OnInit {
  revision: Revision[] = [];
  constructor(private servicioRevision: RevisionService) { }

  ngOnInit(): void {
    this.servicioRevision.consultar()
    .subscribe(r => {
      this.revision = r;
      console.log('r: ', r);
    })
  }

}


