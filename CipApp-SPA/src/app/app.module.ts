import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './MasterPage/home/home.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './MasterPage/aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './MasterPage/tags/tags.component';
import { ProductsComponent } from './ProductsPage/products/products.component';
import { MainRoutes } from './Routing/Routes';
import { StartComponent } from './start/start.component';

@NgModule({
   declarations: [
      HomeComponent,
      ValueComponent,
      NavComponent,
      AboutusComponent,
      FooterComponent,
      TagsComponent,
      ProductsComponent,
      StartComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(MainRoutes)
   ],
   providers: [],
   bootstrap: [
      StartComponent
   ]
})
export class AppModule { }
