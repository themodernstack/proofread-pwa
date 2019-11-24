import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentViewComponent } from './document-view/document-view.component';

const routes: Routes = [
  {
      path: '',
      data: {
          title: 'Document'
      },
      children: [
          {
              path: 'create',
              component:DocumentComponent,
              data: {
                  title: 'Create',
              }
          },
          {
            path: 'update/:id',
            component:DocumentComponent,
            data: {
                title: 'Update',
            }
          },
          {
            path: 'view/:id',
            component: DocumentViewComponent,
            data: {
                title: 'View Document',
            }
          },
          {
              path: 'list',
              component: DocumentListComponent,
              data: {
                  title: 'All Documents',
              }
          },
      ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
