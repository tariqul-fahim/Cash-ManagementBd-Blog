import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {CommentsComponent} from './pages/comments/comments.component';
import {ContactComponent} from './pages/contact/contact.component';
import {QuestionsComponent} from './pages/questions/questions.component';
import {ServiceComponent} from './pages/service/service.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'services', component: ServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
