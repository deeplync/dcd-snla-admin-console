import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// import { AccountService } from 'src/app/core/services/account.service';

/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *snlaHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *snlaHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
@Directive({
  selector: '[snlaHasAnyAuthority]',
})
export class HasAnyAuthorityDirective implements OnDestroy {
  private authorities!: string | string[];

  private readonly destroy$ = new Subject<void>();

  constructor( private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

  @Input()
  set snlaHasAnyAuthority(value: string | string[]) {
    this.authorities = value;
    this.updateView();
    // Get notified each time authentication state changes.
   
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateView(): void {
    // const hasAnyAuthority = this.accountService.hasAnyAuthority(this.authorities);
    this.viewContainerRef.clear();
    // if (hasAnyAuthority) {
    //   this.viewContainerRef.createEmbeddedView(this.templateRef);
    // }
  }
}