import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentRoutingModule } from './document-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule }         from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { DateFormatPipe } from './../pipe/date.format.pipe';
import { TruncatePipe } from './../pipe/truncate.pipe';
import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [DocumentComponent, DocumentViewComponent, DocumentListComponent,DateFormatPipe, TruncatePipe],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    EditorModule,
  ]
})
export class DocumentModule { }
