import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartCountComponent } from './cart-count/cart-count.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartCountComponent,
    UserFeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
