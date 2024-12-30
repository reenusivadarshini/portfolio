import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhotographyComponent } from './photography/photography.component';
import { HomeComponent } from './home/home.component'; // Import other components as needed
import { MainPageComponent } from './main-page/main-page.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'photograph', component: PhotographyComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' }, // Fallback for invalid routes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}


