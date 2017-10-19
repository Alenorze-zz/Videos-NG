import { VideoItem } from './../videos/video';
import { VideoService } from '../videos/video.service';
import { Component, OnInit, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
    private req: any;
    title = 'Video List';
    videoList: [VideoItem];
  constructor(private _video: VideoService) {}

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      this.videoList = data as [VideoItem];
    });
  }

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2';
  }

  ngOnDestroy() {
      this.req.unsubscribe();
  }
}
