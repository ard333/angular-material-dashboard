import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public menus = [
    {
      "title": "Dashboard",
      "icon": "dashboard",
      "path": "/pages/dashboard",
      "menuItem": []
    },
    {
      "title": "Multi Level Menu",
      "icon": "wrap_text",
      "menuItem": [
        {
          "title": "Some Example",
          "icon": "build",
          "path": "/pages/example",
        }
      ]
    },
    {
      "title": "Dashboard",
      "icon": "dashboard",
      "path": "/pages/dashboard",
      "menuItem": []
    },
    {
      "title": "Multi Level Menu",
      "icon": "wrap_text",
      "menuItem": [
        {
          "title": "Some Example",
          "icon": "build",
          "path": "/pages/example",
        }
      ]
    },
  ];
}
