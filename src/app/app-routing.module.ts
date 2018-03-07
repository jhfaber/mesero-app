import { ConsumoComponent } from './consumo/consumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatoComponent } from './plato/plato.component';

const appRoutes: Routes = [
    { path: 'plato', component: PlatoComponent },
    { path: 'consumo', component: ConsumoComponent },
    { path: 'consulta', component: ConsultaComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}