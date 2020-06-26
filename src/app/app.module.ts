import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { DeliveryinfoComponent } from './components/deliveryinfo/deliveryinfo.component';
import { ShopProductComponent } from './components/shop-product/shop-product.component';
import { ShopWidgetComponent } from './components/shop-widget/shop-widget.component';
import { SummerSaleComponent } from './components/summer-sale/summer-sale.component';
import { ShopCategorieComponent } from './components/shop-categorie/shop-categorie.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BoxesComponent,
    DeliveryinfoComponent,
    ShopProductComponent,
    ShopWidgetComponent,
    SummerSaleComponent,
    ShopCategorieComponent,
    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
