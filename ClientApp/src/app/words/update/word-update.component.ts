import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';

import { IWord } from '../word.model';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { TosterNotificationService } from 'src/app/core/services/toster-notification.service';
import { WordService } from '../service/word.service';
import { Title } from '@angular/platform-browser';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'snla-word-update',
  templateUrl: './word-update.component.html',
  styleUrls: ['./word-update.component.scss']
})
export class WordUpdateComponent implements OnInit {
  account: Account | null = null;
  pageTitle = '';
  id:string='';
  wordid: string = '';
  files1: File[] = [];
  files2: File[] = [];
  files3: File[] = [];
  files4: File[] = [];
  files5: File[] = [];
  image1: any;
  image2: any;
  image3: any;
  audio: any;
  audio1: any;
  selectedPrimaryimage: any = '';
  selectedSliderimage1: any = '';
  selectedSliderimage2: any = '';
  selectedAudio: any = '';
  selectedAudio1: any = '';
  progress = 0
  wordUpdateForm = this.fb.group({
    name: ['', [Validators.required]],
    title_En: ['', [Validators.required]],
    title_Ar: ['', [Validators.required]],
    emirati_Dilect_Ar: ['', [Validators.required]],
    emirati_Dialect: ['', [Validators.required]],
    interesting_Facts: ['', [Validators.required]],
    interesting_Facts_Ar: ['', [Validators.required]],
    interesting_Facts_En: [''],
    description: [''],
    descriptionArabic: [''],
    sentenceUsage: [''],
    sentenceUsageArabic: [''],
    descriptionRd: [''],
    sentenceUsageRd: ['']
  });
  isSaving = false;
  isImageSaving = false;
  constructor(private accountService:AccountService,private titleService: Title,private wordService:WordService,private fb: FormBuilder, private tosterService: TosterNotificationService, protected activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result)=>{
        this.account=result
      }
    )
    this.activatedRoute.params
      .subscribe(
        (params) => {
          this.wordid = params['id'];
          this.wordService.find(this.wordid).subscribe(
            (response) => {
              this.wordUpdateForm.patchValue({
                name: response.body?.name,
                title_En: response.body?.title,
                title_Ar: response.body?.titleArabic,
                emirati_Dilect_Ar: response.body?.emiratiDialectArabic,
                emirati_Dialect: response.body?.emiratiDialect,
                interesting_Facts: response.body?.interestingFactsEnglish,
                interesting_Facts_Ar: response.body?.interestingFactsArabic,
                interesting_Facts_En: response.body?.interestingFacts,
                description: response.body?.description,
                descriptionArabic: response.body?.descriptionArabic,
                sentenceUsage: response.body?.sentenceUsage,
                sentenceUsageArabic: response.body?.sentenceUsageArabic,
                descriptionRd: response.body?.descriptionRd,
                sentenceUsageRd: response.body?.sentenceUsageRd,
              });
            }
          )
          this.wordService.getMediaById(this.wordid).subscribe(
            (data)=>{
              this.id=data.id
              this.image1=data.primaryImage;
              this.image2=data.secondaryImage1;
              this.image3=data.secondaryImage2;
              this.audio=data.arabicAudio;
              this.audio1=data.emiratiDialectAudio;
              // console.log(data)
              // console.log(this.audio1)
            }
          )
          
        })
        this.updateTitle()
  }
  save(): void {
    this.isSaving = false;
    const payload: IWord = {
      emiratiDialectArabic: this.wordUpdateForm.get('emirati_Dilect_Ar')!.value,
      emiratiDialect: this.wordUpdateForm.get('emirati_Dialect')!.value,
      interestingFacts: this.wordUpdateForm.get('interesting_Facts')!.value,
      interestingFactsArabic: this.wordUpdateForm.get('interesting_Facts_Ar')!.value,
      // interesting_Facts_En: this.wordUpdateForm.get('interesting_Facts_En')!.value,
    }
    this.wordService.update(this.wordid,payload).subscribe(
      (response) => {
        this.isSaving = true;
        this.router.navigate(['words']).then(() => {
          this.tosterService.showSuccess('Word Details updated!', "success")
        })
      },
      (error)=>{
        console.log(error)
      }
      )
  }
  onSelect(event: any, type: string): void {
    if (type == 'image1') {
      
      if (event.rejectedFiles[0]?.reason == 'size') {
        this.tosterService.showError('Image size is larger than 1 MB', "error")
      }
      if (event.rejectedFiles[0]?.reason == 'type') {
        this.tosterService.showError('Only Accept .jpg images', "error")
      }
      this.files1.push(...event.addedFiles);
      this.image1 = '';
      this.selectedPrimaryimage = <File>this.files1[0];
    }
    else if (type == 'image2') {
      if (event.rejectedFiles[0]?.reason == 'size') {
        this.tosterService.showError('Image size is larger than 1 MB', "error")
      }
      if (event.rejectedFiles[0]?.reason == 'type') {
        this.tosterService.showError('Only Accept .jpg images', "error")
      }
      this.files2.push(...event.addedFiles);
      this.image2 = '';
      this.selectedSliderimage1 = <File>this.files2[0];
    }
    else if (type == 'image3') {
      if (event.rejectedFiles[0]?.reason == 'size') {
        this.tosterService.showError('Image size is larger than 1 MB', "error")
      }
      if (event.rejectedFiles[0]?.reason == 'type') {
        this.tosterService.showError('Only Accept .jpg images', "error")
      }
      this.files3.push(...event.addedFiles);
      this.image3 = '';
      this.selectedSliderimage2 = <File>this.files3[0];
    }
    else if (type == 'audio') {
      if (event.rejectedFiles[0]?.reason == 'size') {
        this.tosterService.showError('File size is larger than 200 kb', "error")
      }
      this.files4.push(...event.addedFiles);
      this.audio = '';
      this.selectedAudio = <File>this.files4[0];
    }
    else if (type == 'audio1') {
      if (event.rejectedFiles[0]?.reason == 'size') {
        this.tosterService.showError('File size is larger than 200 kb', "error")
      }
      this.files5.push(...event.addedFiles);
      this.audio1 = '';
      this.selectedAudio1 = <File>this.files5[0];
    }
  }
  onRemove(event: any, type: string): void {
    if (type == 'image1') {
      this.files1.splice(this.files1.indexOf(event), 1);
    }
    else if (type == 'image2') {
      this.files2.splice(this.files2.indexOf(event), 1);
    }
    else if (type == 'image3') {
      this.files3.splice(this.files3.indexOf(event), 1);
    }
    else if (type == 'audio') {
      this.files4.splice(this.files4.indexOf(event), 1);
    }
    else if (type == 'audio1') {
      this.files5.splice(this.files5.indexOf(event), 1);
    }
  }
  saveMedia(): void {
    this.isImageSaving = false
    const fd = new FormData();
    fd.append('id',this.id)
    fd.append('wordId',this.wordid)
    fd.append('primaryImage', this.selectedPrimaryimage)
    fd.append('secondaryImage1', this.selectedSliderimage1)
    fd.append('secondaryImage2', this.selectedSliderimage2)
    fd.append('arabicAudio', this.selectedAudio)
    fd.append('emiratidialectAudio', this.selectedAudio1)
    this.wordService.updateMedia(this.wordid, fd,this.id).subscribe(
      (event: HttpEvent<any>) => {
       
        switch (event.type) {
          case HttpEventType.Sent:
            break;
          case HttpEventType.ResponseHeader:
            break;
          case HttpEventType.UploadProgress:
            if (event.total) {
              this.progress = Math.round(event.loaded / event.total * 100);
            }
            break;
          case HttpEventType.Response:
            setTimeout(() => {
              this.progress = 0
              this.ngOnInit()
              this.router.navigate(['words']).then(() => {
                window.location.reload();
                this.tosterService.showSuccess('Media updated!', "success")
                this.isImageSaving = true;
              });
            }, 1500);
        }
      },
      (error)=>{
        this.progress = 0
        this.tosterService.showError(error,"Error!")
      })
  }
  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    const title: string = routeSnapshot.data['pageTitle'] ?? '';
    if (routeSnapshot.firstChild) {
      return this.getPageTitle(routeSnapshot.firstChild) || title;
    }
     return title;
   
  }
  private updateTitle(): void {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    this.pageTitle = pageTitle ? pageTitle : '';
    this.titleService.setTitle(pageTitle);
  }

  removeClicked(event: any) {
    this.audio1 = '';
    this.selectedAudio1 = '';
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
