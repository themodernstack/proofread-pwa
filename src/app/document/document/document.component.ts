import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DocumentService } from 'src/app/service/document.service';
import { Document } from 'src/app/model/document';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  private documentForm: FormGroup;
  private sub: any;
  private id: string = null;
  private documentExists = true;
  private document: Document;
  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router

  ) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.id = params.id;
      }
    });
    this.initForm();
    if (this.updateContext) {
      this.setForm(this.id);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

   get updateContext() {
    return this.id != null;
  }

  private initForm() {
    this.documentForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  get valid(){
    return this.documentForm.valid;
  }

  public create() {
    this.documentService.create(this.documentForm.value).then(result => {
      this.router.navigate(['/document/view/', result.id]);
    });
  }

  public update() {
    this.documentService.update(this.id, <Document>this.documentForm.value).then(result => { 
      this.router.navigate(['/document/view/', this.id]);
    });
  }

  public setForm(id: string) {
    this.documentService.get(id).then(document => {
      if (document.exists) {
        let data = document.data();
        this.document = <Document>data;
        this.documentForm.setValue(data);
      }
      this.documentExists = document.exists;
    });
  }

}
