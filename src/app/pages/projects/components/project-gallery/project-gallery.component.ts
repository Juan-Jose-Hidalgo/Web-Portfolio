import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() imagesWebp: string[] = [];

  selectedIndex = 0;
  classes = '';

  ngOnInit(): void {
    this.autoSlideImages();
  }

  /**
   * Sets index to selected image on dots
   * @param index 
   */
  selectImage(index: number) {
    this.classes = this.selectedIndex > index ? 'animate__fadeInLeft' : 'animate__fadeInRight';
    this.selectedIndex = index;
  }

  previewClick() {
    if (this.selectedIndex === 0) this.selectedIndex = this.images.length - 1;
    else this.selectedIndex--;

    this.classes = 'animate__fadeInLeft';
  }

  nextClick() {
    if (this.selectedIndex === this.images.length - 1) this.selectedIndex = 0;
    else this.selectedIndex++;

    this.classes = 'animate__fadeInRight';
  }

  private autoSlideImages() {
    setInterval(() => {
      this.nextClick();
    }, 5000);
  }

}
