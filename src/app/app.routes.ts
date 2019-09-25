import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { FavoritesComponent } from './components/favorites/favorites.component'
import { ConfigurationComponent } from './components/configuration/configuration.component'
import { ProductComponent } from './components/product/product.component'

const ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'my-favorites', component: FavoritesComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'configuration', component: ConfigurationComponent},
    { path: '**', pathMatch:'full', redirectTo:'home'},

]

export const APP_ROUTING = RouterModule.forRoot(ROUTES,{useHash:true}) 