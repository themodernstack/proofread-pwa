import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuerySnapshot, QueryDocumentSnapshot,DocumentSnapshot } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  private cursor: any= null;
  private numOfItems: number = 3;
  private end: Boolean = false;
  private list: Array<firestore.QueryDocumentSnapshot>=[];
  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadNext();
  }

  private loadNext(){
    this.documentService.all(this.cursor,this.numOfItems).get().then(data=>{
      if(data.empty){
        this.end=true;
        return;
      }
      this.cursor = data.docs[data.docs.length-1];
      this.list = this.list.concat(data.docs);
      this.end = data.docs.length < this.numOfItems;
   });
  }

  private delete(index: number){
    if (this.list.length == index-1){
      this.cursor = this.list[this.list.length-2]
    }
    this.documentService.delete(this.list[index]).then(data => {
      this.list.splice(index,1);
      this.loadNext();
    });
  }

}
