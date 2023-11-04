import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  // observable functionality
  paramsSubscription: Subscription;

  // Access to the current loaded route using ActivateRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // retrieve info from the URL
    this.user = {
      // Active route, define in route parameter
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // observable, async task, can not block the code
    // Get inform any changes in the route parameter
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  // Executed when the component is destroyed.
  // Used because subscription from the route stayed in memory instead of being removed once the component is not longer used.
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
