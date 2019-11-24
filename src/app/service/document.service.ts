import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import{Document}  from 'src/app/model/document';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentCollection: AngularFirestoreCollection<Document>;
  private endpoint = "document";
  constructor(private db: AngularFirestore) {
    this.documentCollection = db.collection<Document>(this.endpoint);
  }
  public get(id: string) {
    return this.documentCollection.doc(id).ref.get();
    
  }
  public create(document: Document) {
      return this.documentCollection.add(document);
  }

  public update(id:string,document: Document) {
    return this.documentCollection.doc(id)
    .set(document, { merge: true });
  }
 
  public delete(id: string) {

  }
}
