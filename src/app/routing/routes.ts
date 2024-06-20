import { Routes } from '@angular/router';
import { HomeComponent } from '../admin-component/home.component';
import { NewGameComponent } from '../admin-component/new-game/new-game.component';
import { SavedGamesComponent } from '../admin-component/saved-games/saved-games.component';
import { HomeViewComponent } from '../sim-component/home-view.component';
import { CombatViewComponent } from '../combat-component/combat-view.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'new-game',
    component: NewGameComponent,
    title: 'New Game',
  },
  {
    path: 'saved-games',
    component: SavedGamesComponent,
    title: 'Saved Games',
  },
  {
    path: 'home-view',
    component: HomeViewComponent,
    title: 'Home Base',
  },
  {
    path: 'combat-view',
    component: CombatViewComponent,
    title: 'combat!',
  },
];

export default routeConfig;
