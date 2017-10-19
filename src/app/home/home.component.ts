import { VideoService } from '../videos/video.service';
import { VideoItem } from '../videos/video';
import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit, OnDestroy {
  private req: any;
   homeImageList: [VideoItem];
  constructor(private router: Router, private http: Http, private _video: VideoService) { }

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      this.homeImageList = [] as [VideoItem];
      data.filter( item => {
          if (item.featured) {
            this.homeImageList.push(item);
          }
      });
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  preventNormal(event: MouseEvent, image: any) {
      if (!image.prevented) {
          event.preventDefault();
          this.router.navigate(['./videos']);
     }
  }

}
