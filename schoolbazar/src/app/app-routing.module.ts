import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { AddpostComponent } from "./components/addpost/addpost.component";
import { PostComponent } from "./components/post/post.component";
import { ApprovepostComponent } from "./components/admin/approvepost/approvepost.component";
import { ApproveuserComponent } from "./components/admin/approveuser/approveuser.component";

//add routes
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'addpost', component: AddpostComponent },
	{ path: 'post/:id', component: PostComponent},
	{ path: 'admin/post', component: ApprovepostComponent},
	{ path: 'admin/user', component: ApproveuserComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
