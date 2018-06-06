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
      "title": "Menu 1",
      "icon": "autorenew",
      "menuItem": [
        {
          "title": "Sub Menu 1",
          "icon": "build"
        },
        {
          "title": "Sub Menu 2",
          "icon": "query_builder"
        }
      ]
    },
    {
      "title": "Menu 2",
      "icon": "trending_flat",
      "menuItem": [
        {
          "title": "Sub Menu 1",
          "icon": "trending_down"
        },
        {
          "title": "Sub Menu 2",
          "icon": "trending_up"
        }
      ]
    },
    {
      "title": "Menu 3",
      "icon": "settings",
      "menuItem": [
        {
          "title": "Sub Menu 1",
          "icon": "equalizer"
        },
        {
          "title": "Sub Menu 2",
          "icon": "volume_up"
        }
      ]
    }
  ];
}
