import { Router } from "@angular/router";
import { Component } from "@angular/core";

/**MODELS */

/**SERVICES */

@Component({
  selector: "app-main-pages",
  template: `
    <router-outlet></router-outlet>
  `
})
export class MainPagesComponent {
  constructor(private router: Router) {}
}
