import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  navHeaderBg = '#E6F3FF';

  constructor() { }

  setNavHeaderBg(color: string) {
    this.navHeaderBg = color;
  }

  getNavHeaderColor() {
    return this.navHeaderBg;
  }
}
