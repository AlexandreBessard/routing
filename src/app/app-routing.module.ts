import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  // localhost:4200/
  { path: "", component: HomeComponent },
  // localhost:4200/users
  { path: "users", component: UsersComponent, children: [
      // Start with /users -> users/:id/:name
      { path: ":id/:name", component: UserComponent },
    ] },
  // localhost:4200/servers
  { path: "servers", component: ServersComponent, children: [
      // Both start with server/ implicitly
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent }
    ] },

  { path: "not-found", component: PageNotFoundComponent },
  // wildcard route to catch all routes are not found and must be placed at the end
  { path: "**", redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
