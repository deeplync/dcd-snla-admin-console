import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AccountService } from '../core/services/account.service';

import { TosterNotificationService } from '../core/services/toster-notification.service';
import { Account } from '../model/account.model';
import { ISettings } from './model/settings.model';
import { SettingsService } from './service/settings.service';

@Component({
  selector: 'snla-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  pageTitle = '';
isAboutExpanded:boolean=false
isPrivacypolicyExpanded:boolean=false
isTermsandconditionExpanded:boolean=false
applicatinSettingsData:any;
settingsForm = this.fb.group({
  id: [],
  aboutUs: [null, [Validators.required]],
  privacyPolicy: [null, [Validators.required]],
  termsAndConditions: [null, [Validators.required]],
  
});
public isAboutUsCollapsed = false;
public isPrivacypolicyCollapsed = true;
public isTermsandconditionCollapsed = true;
isAboutUsSaving:boolean=false;
isPrivacyPolicySaving:boolean=false;
isTermsAndConditionsSaving:boolean=false;
constructor(private accountService:AccountService,private fb: FormBuilder,private tosterService:TosterNotificationService,private settingsService:SettingsService,private titleService: Title, private router: Router) { }
account: Account | null = null;
  /*for editor config*/
config: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  sanitize: false,
  height: '15rem',
  minHeight: '5rem',
  placeholder: 'Enter text here...',
  translate: 'no',
  defaultParagraphSeparator: 'p',
  defaultFontName: 'Arial',
  toolbarHiddenButtons: [
    ['insertImage'],
    ['insertVideo']
    ],
  customClasses: [
    {
      name: "quote",
      class: "quote",
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: "titleText",
      class: "titleText",
      tag: "h1",
    },
  ]
};
/*end of editor config*/
  ngOnInit(): void {
    this.updateTitle()
    this.accountService.fetchAccount().subscribe(
      (result)=>{
        this.account=result
      }
    )
    this.isAboutExpanded=true
    this.settingsService.fetchAll().subscribe(
      (settingsData)=>{
        this.applicatinSettingsData=settingsData
        this.updateSettingsForm( this.applicatinSettingsData);
      }
    )
  }
  isExpand(setting:string):void{
    if(setting=='aboutus')
    {
      this.isAboutExpanded=true
      this.isPrivacypolicyExpanded=false
      this.isTermsandconditionExpanded=false
    }
    else if(setting=='privacypolicy')
    {
      this.isAboutExpanded=false
      this.isPrivacypolicyExpanded=true
      this.isTermsandconditionExpanded=false
    }
    else if(setting=='termsandconditions')
    {
      this.isAboutExpanded=false
      this.isPrivacypolicyExpanded=false
      this.isTermsandconditionExpanded=true
    }
  }
  saveAboutUs():void{
    this.isAboutUsSaving=true
    let payload:ISettings={
      privacyPolicy: this.settingsForm.get(['privacyPolicy'])!.value,
      termsAndConditions: this.settingsForm.get(['termsAndConditions'])!.value,
      aboutUs: this.settingsForm.get(['aboutUs'])!.value,
      id:this.applicatinSettingsData.id
    }
    this.settingsService.update(payload).subscribe(
      ()=>{this.tosterService.showSuccess('About Us updated!',"success"),this.isAboutUsSaving=false,this.ngOnInit()},
      (error)=>{ this.tosterService.showError(error,"Error!")}
    )
  }
  savePrivacyPolicy():void{
    this.isPrivacyPolicySaving=true
    let payload:ISettings={
      privacyPolicy: this.settingsForm.get(['privacyPolicy'])!.value,
      termsAndConditions: this.settingsForm.get(['termsAndConditions'])!.value,
      aboutUs: this.settingsForm.get(['aboutUs'])!.value,
      id:this.applicatinSettingsData.id
    }
    this.settingsService.update(payload).subscribe(
      ()=>{this.tosterService.showSuccess('Privacy Policy updated!',"success"),this.isPrivacyPolicySaving=false,this.ngOnInit()},
      (error)=>{ this.tosterService.showError(error,"Error!")}
    )
  }
  saveTermsAndCondition():void{
    this.isTermsAndConditionsSaving=true
    let payload:ISettings={
      privacyPolicy: this.settingsForm.get(['privacyPolicy'])!.value,
      termsAndConditions:  this.settingsForm.get(['termsAndConditions'])!.value,
      aboutUs:this.settingsForm.get(['aboutUs'])!.value,
      id:this.applicatinSettingsData.id
    }
    this.settingsService.update(payload).subscribe(
      ()=>{this.tosterService.showSuccess('Terms And Conditions updated!',"success"),this.isTermsAndConditionsSaving=false,this.ngOnInit()},
      (error)=>{ this.tosterService.showError(error,"Error!")}
    )
  }
  private updateSettingsForm(settingsData:ISettings):void{
    this.settingsForm.patchValue({
      id: settingsData.id,
      aboutUs: settingsData.aboutUs,
      privacyPolicy: settingsData.privacyPolicy,
      termsAndConditions: settingsData.termsAndConditions, 
    });
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
}
