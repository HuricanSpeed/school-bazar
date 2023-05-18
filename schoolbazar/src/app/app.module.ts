import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RegisterComponent } from "./components//register/register.component";
import { LoginComponent } from './components/login/login.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { PostComponent } from './components/post/post.component';
import { ApproveuserComponent } from './components/admin/approveuser/approveuser.component';
import { ApprovepostComponent } from './components/admin/approvepost/approvepost.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, RegisterComponent, LoginComponent, AddpostComponent, PostComponent, ApproveuserComponent, ApprovepostComponent],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
