import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  private rating:number=0;

  private stars:Array<boolean>;

  @Output()
  private  ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
  private readonly:boolean = true;

  constructor() { }

  ngOnInit(){

  }
  clickStar(index :number){
    if ( !this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }

  }
  ngOnChanges(){
    this.stars=[];
    for(let i=1;i<6;i++){
      this.stars.push(i > this.rating);
    }
  }
}
