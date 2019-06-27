import { Component,OnInit } from '@angular/core';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'workflow';

  selectedFiles: FileList;

  ngOnInit(){
  }

  constructor(private uploadService: UploadService) {}

  upload(){//console.log("me upload");
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
  }

  selectFile(event) {//console.log("hwo");
    this.selectedFiles = event.target.files;
  }
}
