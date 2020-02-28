import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, ɵAnimationGroupPlayer, state } from '@angular/animations';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    // trigger('SlideInOut', [
    //   state('next', style({
    //     transform: 'translateX(0%)',
    //     opacity: '1'
    //   })),
    //   state('endNext', style({
    //     transform: 'translateX(-50%)',
    //     opacity: '0'
    //   })),
    //   state('previous', style({
    //     transform: 'translateX(50%)',
    //     opacity: '0'
    //   })),
    //   state('endPrevious', style({
    //     transform: 'translateX(0%)',
    //     opacity: '0'
    //   })),
    //   transition('next => endNext', animate('600ms ease-out')),
    //   transition('endNext => next', animate('600ms ease-in')),
    //   transition('previous => endPrevious', animate('600ms ease-in')),
    //   transition('endPrevious => previous', animate('600ms ease-out'))
    // ]),
    trigger('SlideInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(50%)',
          opacity: '0'
        }),
        animate(
          '600ms ease-in',
          style({
            transform: 'translateX(0%)',
            opacity: '1'
          })
        )
      ]),
      transition(':leave', [
        animate(
          '600ms ease-in',
          style({
            transform: 'translateX(50%)',
            opacity: '0'
          })
        )
      ])
    ]),
  ]
})
export class ProductsComponent implements OnInit {
  state: string = "previous";
  isOpen: number = 1;
  isDone: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public Next(): void{
    // this.state = 'next';
    this.isDone = false;
    this.isOpen++;
  }

  public Previous(): void{
    this.isDone = false;
    this.isOpen--;
  }

  public AnimationIsDone(){
    // this.state = 'previous';
    this.isDone = true;
  }

}
