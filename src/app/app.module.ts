import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlatoComponent } from './plato/plato.component';
import { ComboBoxDirective } from './_directive/combobox.directive';



@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ConsumoComponent,
    HeaderComponent,
    FooterComponent,
    PlatoComponent,
    ComboBoxDirective
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
