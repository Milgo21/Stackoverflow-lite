import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/auth/auth-guard.service';

const routes: Routes = [
  {path:'', loadComponent:() => import('./components/home-page/home-page.component').then(h=>h.HomePageComponent)},
  {path:'login', loadComponent:() => import('./components/Authentication/login/login.component').then(l=>l.LoginComponent)},
  {path:'register', loadComponent:() => import('./components/Authentication/register/register.component').then(r=>r.RegisterComponent)},
  {path:'reset', loadComponent:() => import('./components/Authentication/forgotpassword/forgotpassword.component').then(f=>f.ForgotpasswordComponent)},
  {path:'posts',canActivate:[AuthGuardService], loadComponent:() => import('./components/questions/posts/posts.component').then(p=>p.PostsComponent)},
  {path:'id/:id', loadComponent:() => import('./components/questions/posts/singlepost/singlepost.component').then(s=>s.SinglepostComponent)},
  {path:'ask', canActivate:[AuthGuardService], loadComponent:() => import('./components/questions/askquestion/askquestion.component').then(a=>a.AskquestionComponent)},
  {path:'update', canActivate:[AuthGuardService], loadComponent:() => import('./components/questions/updatequestion/updatequestion.component').then(u=>u.UpdatequestionComponent)},
  {path:'profile', canActivate:[AuthGuardService], loadComponent:() => import('./components/profile/profile.component').then(p=>p.ProfileComponent)},
  {path:'admin', canActivate:[AuthGuardService], loadComponent:() => import('./components/admin/admin.component').then(a=>a.AdminComponent),
    children :[
      {path:'', loadComponent:() => import('./components/admin/questions/questions.component').then(q=>q.QuestionsComponent)},
      {path:'users', loadComponent:() => import('./components/admin/users/users.component').then(u=>u.UsersComponent)}
    ]
  },
  {path:'**', loadComponent:() => import('./components/page-not-found/page-not-found.component').then(n=>n.PageNotFoundComponent)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
