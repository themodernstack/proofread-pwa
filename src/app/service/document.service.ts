import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import{Document}  from 'src/app/model/document';
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentCollection: AngularFirestoreCollection<Document>;
  private endpoint = "document";
  constructor(private db: AngularFirestore) {
    this.documentCollection = db.collection<Document>(this.endpoint);
  }
  public all(cursor: firestore.DocumentSnapshot = null, numOfItems: number = 3) {
    var query = this.documentCollection.ref.orderBy("createdAt","desc").limit(numOfItems);
    if(cursor != null){
      query = query.startAfter(cursor);
    }
    return query;
  }

  public get(id: string) {
    return this.documentCollection.doc(id).ref.get();
    
  }
  public create(document: Document) {
      document.createdAt=new Date().getTime();
      return this.documentCollection.add(document);
  }

  public update(id:string,document: Document) {
    document.updatedAt=new Date().getTime();
    return this.documentCollection.doc(id)
    .set(document, { merge: true });
  }
 
  public delete(doc: firestore.DocumentSnapshot) {
    return doc.ref.delete();
  }
}
