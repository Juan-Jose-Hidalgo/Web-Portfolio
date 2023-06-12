import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/models/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project!: IProject;

  constructor(private router: Router) { }

  projectInfo() {
    this.router.navigateByUrl(`/proyectos/${this.project.id}`);
  }

}
