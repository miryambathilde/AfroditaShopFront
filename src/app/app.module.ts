import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// liberias //
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ProductListComponent,
    DetailProductComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
