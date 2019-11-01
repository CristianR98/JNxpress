import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { ProductComponent } from './product/product.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { ResultsComponent } from './results/results.component'
import { LoginGuard } from '../services/guards/login.guard'
import { SalesComponent } from './sales/sales.component'



const routes:Routes = [
    { path: '', component: HomeComponent, data: {title:'Home'} },
    { path: 'user/:id', component: UserComponent, data: {title:'Usuario: ', perfil:false} },
    { path: 'mi-perfil', component: UserComponent, canActivate:[LoginGuard], data: {title: 'Mi Perfil', perfil: true} },
    { path: 'mis-productos', component: ResultsComponent, canActivate:[LoginGuard], data: {title: 'Mis productos', user: true} },
    { path: 'ventas', component: SalesComponent, canActivate:[LoginGuard], data: {title:'Ventas'} },
    { path: 'compras', component: SalesComponent, canActivate:[LoginGuard], data: {title:'Compras'} }, 
    { path: 'favoritos', component: FavoritesComponent, canActivate:[LoginGuard], data: {title:'Favoritos'} },
    { path: 'product/:id', component: ProductComponent, data: {title:'Producto: '} },
    { path: 'results', component: ResultsComponent, data: {title:'Resultados: ', user:false} ,},
    { path: '**', redirectTo: '', pathMatch:'full' }
]

export const PAGES_ROUTES = RouterModule.forRoot(routes,{useHash:true})