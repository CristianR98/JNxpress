import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { ProductComponent } from './product/product.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { ConfigurationComponent } from './configuration/configuration.component'
import { ResultsComponent } from './results/results.component'



const routes:Routes = [
    { path: '', component: HomeComponent, data: {title:'Home'} },
    { 
        path: 'user/:id', component: UserComponent, data: {title:'Usuario: '},
        children: [
            { path: 'results', component:ResultsComponent, data: {title: 'Resultados: '} }
        ]
    },
    { path: 'product/:id', component: ProductComponent, data: {title:'Producto: '} },
    { path: 'results', component: ResultsComponent, data: {title:'Resultados: '} ,},
    { path: 'favorites', component: FavoritesComponent, data: {title:'Favoritos'} },
    { path: 'config', component: ConfigurationComponent, data: {title:'Configuración'} },
    { path: '**', redirectTo: '', pathMatch:'full' }
]

export const PAGES_ROUTES = RouterModule.forRoot(routes,{useHash:true})