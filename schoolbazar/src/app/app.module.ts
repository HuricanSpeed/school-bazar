import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RegisterComponent } from "./components//register/register.component";

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, RegisterComponent],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
