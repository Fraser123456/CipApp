import {
  Component,
  AfterViewInit,
  HostListener,
  ViewChild,
  ElementRef
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('Img', [
      state(
        'start,void',
        style({
          transform: 'translateY(10px)',
          opacity: '0'
        })
      ),
      state(
        "end",
        style({
          transform: 'translateY(0)',
          opacity: '1'
        })
      ),
      transition('start => end', animate('700ms ease-in'))
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({
          transform: 'translateY(50%)',
          opacity: '0'
        }),
        animate(
          '500ms ease-in',
          style({
            transform: 'translateY(0%)',
            opacity: '1'
          })
        )
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({
            transform: 'translateY(50%)',
            opacity: '0'
          })
        )
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
  appearImg: string = 'start';
  isOpen: boolean = false;
  title = 'CipApp-SPA';
  photoUrl = 'assets/Ice.jpg';
  @ViewChild('aboutUs', null) aboutUsDiv: ElementRef;

  ngAfterViewInit() {
    this.appearImg = 'end';
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(this.isOpen);
    const element = this.aboutUsDiv.nativeElement;
    const viewportOffset = element.getBoundingClientRect();
    const top = viewportOffset.top;
    console.log(top);

    if (top <= 374) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }
}
