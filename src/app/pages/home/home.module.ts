import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { FormsModule } from '@angular/forms';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [HomeComponent, WhoWeAreComponent, OurServicesComponent, TechnologiesComponent, ReviewsComponent, ContactComponent, ExperienceComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ThemeModule,
    FormsModule
  ]
})
export class HomeModule { }
