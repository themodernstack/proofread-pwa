import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from 'src/app/model/document';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.scss']
})
export class DocumentViewComponent implements OnInit {
  private sub: any;
  private document: Document
  constructor(private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.document = new Document;
    this.sub = this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.getDocument(params.id)
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  private getDocument(id) {
    this.documentService.get(id).then(document => {
      if (!document.exists) {
        this.router.navigate(['/document/list/']);
      }
      let data = document.data();
      this.document = <Document>data;

    });
  }

}
