import { Component, Input } from '@angular/core';
/*
 Loader component to show ...loading message
*/
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent  {
  @Input() isloading: boolean;
  constructor() { }

}
