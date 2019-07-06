import { Component, OnInit } from '@angular/core';
import { MapService } from './service/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  lat: number = 10.349690;
  lng: number = 107.072662;
  listMarker: Array<any> = [];
  markerFromService: any;
  constructor(private wsService: MapService) { }
  ngOnInit() {
    this.wsService.listen('decode').subscribe((data: any) => {

      this.markerFromService = JSON.parse(data);
      const index = this.listMarker.findIndex(n => n.userid === this.markerFromService.userid)
      if (this.listMarker.length === 0) {
        this.listMarker.push(this.markerFromService);
      }
      else if (index !== -1) {
        console.log('asd');
        this.listMarker.splice(index, 1);
        this.listMarker.push(this.markerFromService);
      }
      else if (index === -1){
        this.listMarker.push(this.markerFromService);
      }
    });
  }
  abc() {
    console.log(this.listMarker);
  } 
  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
  } 
  onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();

  }
}
