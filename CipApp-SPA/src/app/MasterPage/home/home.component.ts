import {
  Component,
  AfterViewInit,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('Img', [
      transition(':enter', [
        style({
          transform: 'translateY(10px)',
          opacity: '0'
        }),
        animate(
          '700ms ease-in',
          style({
            transform: 'translateY(0)',
            opacity: '1'
          })
        )
      ])
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
    ]),
    trigger("slideInOutTopLine", [
      transition(":enter", [
        style({
          transform: "translateX(50%)",
          opacity: "0"
        }),
        animate(
          "600ms ease-in",
          style({
            transform: "translateX(0%)",
            opacity: "1"
          })
        )
      ]),
      transition(":leave", [
        animate(
          "600ms ease-in",
          style({
            transform: "translateX(50%)",
            opacity: "0"
          })
        )
      ])
    ]),
    trigger("slideInOutBottomLine", [
      transition(":enter", [
        style({
          transform: "translateX(-50%)",
          opacity: "0"
        }),
        animate(
          "600ms ease-in",
          style({
            transform: "translateX(0%)",
            opacity: "1"
          })
        )
      ]),
      transition(":leave", [
        animate(
          "600ms ease-in",
          style({
            transform: "translateX(-50%)",
            opacity: "0"
          })
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  appearImg: string = "start";
  isOpen: boolean = false;
  isLoad: boolean = true;
  title: "CipApp-SPA";
  photoUrl: string = "assets/images/Ice.jpg";

  constructor() {}

  @ViewChild("aboutUs", null) aboutUsDiv: ElementRef;

  ngOnInit(): void {
    this.appearImg = "end";
  }

  ngAfterViewInit(): void {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const element = this.aboutUsDiv.nativeElement;
    const viewportOffset = element.getBoundingClientRect();
    const top = viewportOffset.top;

    if (top <= 375.5) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }
}
