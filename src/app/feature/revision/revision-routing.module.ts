import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardarRevisionComponent } from './components/guardar-revision/guardar-revision.component';
import { ListarRevisionComponent } from './components/listar-revision/listar-revision.component';
import { RevisionComponent } from './components/revision/revision.component';

const routes: Routes = [
    {
        path: '',
        component: RevisionComponent,
        children: [
            {
                path: 'guardar',
                component: GuardarRevisionComponent
            },
            {
                path: 'listar',
                component: ListarRevisionComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RevisionRoutingModule { }