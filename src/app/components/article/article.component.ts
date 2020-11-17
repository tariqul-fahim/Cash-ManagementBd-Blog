import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor() { }

  @Input() card: Question;
  public istrue: boolean;
  public applyClassObj: any;
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore


  ngOnInit(): void {
    this.istrue = this.card.isLeft;
    this.applyClass();
  }
  public applyClass(){
    this.applyClassObj = {
      container: this.istrue,
      reverse_container: !this.istrue
    };
  }



}
