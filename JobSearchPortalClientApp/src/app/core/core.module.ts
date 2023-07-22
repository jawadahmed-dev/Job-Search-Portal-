import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/guest/header/header.component';
import { GuestLayoutComponent } from '../layout/guest/guest-layout/guest-layout.component';
import { HeroComponent } from '../layout/guest/hero/hero.component';
import { FooterComponent } from '../layout/guest/footer/footer.component';
import { JobCategoryListingComponent } from '../layout/job-category-listing/job-category-listing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobCategoryComponent } from '../layout/job-category/job-category.component';



@NgModule({
  declarations: [
    HeaderComponent,
    GuestLayoutComponent,
    HeroComponent,
    FooterComponent,
    JobCategoryListingComponent,
    JobCategoryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
