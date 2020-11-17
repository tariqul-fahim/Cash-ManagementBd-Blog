import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {map, shareReplay} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {UiService} from '../services/ui.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  @Output() menuOpened = new EventEmitter();

  menuLink: any[] = [
    {
      name: 'হোম',
      url: '/'
    },
    {
      name: 'প্রশ্নোত্তর',
      url: '/questions'
    },
    {
      name: 'মন্তব্য',
      url: '/comments'
    },
    {
      name: 'যোগাযোগ',
      url: '/contact'
    },
    {
      name: 'সেবা',
      url: '/services'
    },
    {
      name: 'আমাদের সম্পর্কে',
      url: '/about-us'
    }

  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 768px)'])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  selectedPath = '';
  scrollPosition = 0;
  isMenuOpen = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public uiService: UiService,
    private router: Router
  ) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true);
    this.routerActiveDesign();
  }
  scrolling = () => {
    this.scrollPosition = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    // console.log(this.scrollPosition);
  }

  onClickHamburger() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuOpened.emit(this.isMenuOpen);
    // if (this.isMenuOpen) {
    //   document.body.style.overflow = 'auto';
    //   console.log('Menu Opened');
    // } else {
    //   document.body.style.overflow = 'visible';
    // }
  }

  hideMenu() {
    this.isMenuOpen = false;
  }


  routerActiveDesign() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = this.router.url;
    });
  }

}
