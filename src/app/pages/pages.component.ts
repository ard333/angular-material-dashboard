import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public menus = [
    {
      "title": "Title 1",
      "icon": "theaters",
      "menuItem": [
        {
          "title": "Sub Menu 1",
          "icon": "thumb_up"
        },
        {
          "title": "Sub Menu 2",
          "icon": "thumb_down"
        }
      ]
    },
    {
      "title": "Title 2",
      "icon": "music_note",
      "menuItem": [
        {
          "title": "Sub Menu 1",
          "icon": "menu"
        },
        {
          "title": "Sub Menu 2",
          "icon": "menu"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
