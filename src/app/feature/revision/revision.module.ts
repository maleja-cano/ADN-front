import { NgModule } from '@angular/core';

import { RevisionRoutingModule } from './revision-routing.module';
import { ListarRevisionComponent } from './components/listar-revision/listar-revision.component';
import { GuardarRevisionComponent } from './components/guardar-revision/guardar-revision.component';
import { RevisionComponent } from './components/revision/revision.component';
import { SharedModule } from '@shared/shared.module';
import { RevisionService } from './shared/service/revision.service';

@NgModule({
    declarations: [
      GuardarRevisionComponent,
      ListarRevisionComponent,
      RevisionComponent
    ],
    imports: [
      RevisionRoutingModule,
      SharedModule
    ],
    providers: [RevisionService]
  })
  export class RevisionModule { }