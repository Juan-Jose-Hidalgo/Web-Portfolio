import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  @Output() section = new EventEmitter<string>();
  @ViewChild('profession') profession!: ElementRef;

  ngAfterViewInit(): void {
    this.initTypewriter();
  }

  initTypewriter() {

    const options = {
      loop: false,
      animateCursor: true,
      typeColor: '#e0e0e0',
      cursorColor: '#57a0e4',
    }

    const target = this.profession.nativeElement;
    const writer = new Typewriter(target, options);

    writer
      .rest(50000)
      .start()
  }

  goToProyects() {
    this.section.emit('projects');
  }

}
