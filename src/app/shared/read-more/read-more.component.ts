import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  @Input() desc: string;
  @Input() length: number;
  @Input() needBtn = false;

  needMore = false;
  modifiedDesc: string;

  constructor() { }

  ngOnInit(): void {
    if (this.desc !== null) {
      this.modifiedDesc = this.desc;
      this.shortViewDesc();
    }
  }

  shortViewDesc() {
    // if (!this.isReadMore) {
    //   this.modifiedDesc = this.desc.substr(0, this.length);
    // }
    this.modifiedDesc = this.desc.substr(0, this.length);
  }

  fullViewDesc() {
    this.modifiedDesc = this.desc;
  }

  onReadMore() {
    this.needMore = !this.needMore;
    if (this.needMore) {
      this.fullViewDesc();
    } else {
      this.shortViewDesc();
    }
  }

}
