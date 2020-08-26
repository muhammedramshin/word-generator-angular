import { Component } from '@angular/core';
import arrayWords from "../uts/words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-game';

  words = ''
  limit = 10;


handleSlideChange(newLimit:number){
  this.limit = newLimit;
}

generate (){

this.words = arrayWords.slice(0,this.limit).join(" ");

}


}
