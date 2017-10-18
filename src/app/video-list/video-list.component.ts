import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    title = 'Video List';
    someItem = '<h1>Hi there</h1>';
    todayDate;
    videoList = [
        {
         name: 'Item 1',
         slug: 'item-1',
         embed: `Fhd_iKI9UX0`,
        },
        {
         name: 'Item 2',
         slug: 'item-2',
         embed: `tK7uXkZ-EFM`,
        },
        {
         name: 'Item 3',
         slug: 'item-3',
         embed: 'XALLZHKnS_U',
        }
    ];
  constructor() {}

  ngOnInit() {
    this.todayDate = new Date();
  }

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2';
  }

}
