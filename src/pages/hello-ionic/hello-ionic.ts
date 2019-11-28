import { Component } from '@angular/core';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // private document: DocumentViewer,
  constructor(public navCtrl: NavController) {

  radioGroupChange(e){
    this.newTask.title = "fdsfds";
    this.newTask.id =5; 
    this.newTask.freqency = e;
 
  }
  addTask(){
    this.tasksService.addTask(this.newTask);
  }
  GoToNewPage() {
    this.navCtrl.push(ListPage);
}
  // const options: DocumentViewerOptions = {
  //   title: 'My PDF'
  // }
  // this.document.viewDocument('../assets/documents/prayer.pdf', 'application/pdf', options)
}
