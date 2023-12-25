import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CertifComponent } from './certif/certif.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certifications', component: CertifComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
