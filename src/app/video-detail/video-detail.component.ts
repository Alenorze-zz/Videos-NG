import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
    private routeSub: any;
    slug: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.routeSub = this.route.params.subscribe(params => {
          this.slug = params['slug'];
      });
  }
  ngOnDestroy() {
      this.routeSub.unsubscribe();
  }

}
