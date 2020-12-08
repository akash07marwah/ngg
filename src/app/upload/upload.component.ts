import { Component, OnInit } from '@angular/core';
import {UploadServiceService} from 'src/app/upload-service.service'
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { ClipboardService } from 'ngx-clipboard';

declare var $: any;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  constructor(public uploadService:UploadServiceService,public _clipboardService: ClipboardService) { }
  formData = new FormData();
  res="";
  ngOnInit() {
    this._clipboardService.copyFromContent("abcsdefajnjfafnaln");
  }
public  htmlContent = "Bye  Buye aaasllbakjbakbvakbakjb";
    config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: "15rem",
      minHeight: "5rem",
      placeholder: "Enter text here...",
      translate: "no",
      defaultParagraphSeparator: "p",
      defaultFontName: "Arial",
      toolbarHiddenButtons: [["bold"]],
      customClasses: [
        {
          name: "quote",
          class: "quote"
        },
        {
          name: "redText",
          class: "redText"
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1"
        }
      ]
    };
  
    fileChange(event){
      let fileList : FileList = event.target.files;
      console.log(fileList);
      const file = fileList[0];
      this.formData.append('UploadedFile',file);
    }
    uploadFile(){
      this.uploadService.uploadFile(this.formData).subscribe(res=>{
        console.log(res);
        // alert(res["state"]);
        this.res = res["text"];
      })
    }  
    

}