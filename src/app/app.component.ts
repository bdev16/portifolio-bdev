import { Component, inject, NgModule } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { Skill } from '../model/skill';
import { Project } from '../model/project';

@Component({
  selector: 'app-root',
  standalone: true,             
  imports: [CarouselModule, MatButtonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio-bdev';
  
  readonly dialog = inject(MatDialog);

  skillList: Skill[] = [
    new Skill("/icons8-c-sharp-logo-100.png", "C# | Básico"),
    new Skill("/icons8-.net-framework-96.png", ".NET | Básico"),
    new Skill("/icons8-python-100.png", "Python | Básico"),
    new Skill("/js.png", "JavaScript | Básico"),
    new Skill("/icons8-angular-100.png", "Angular | Básico"),
    new Skill("/icons8-html5-96.png", "HTML5| Básico"),
    new Skill("/icons8-css3-100.png", "CSS3 | Básico"),
    new Skill("/servidor-sql.png", "SQL | Básico"),
    new Skill("/icons8-git-100.png", "Git | Básico"),
    new Skill("/icons8-git-96.png", "GitHub | Básico"),
  ];

  projectList: Project[] = [
    new Project(
      "TaskList",
      "C#; ASP.NET; ANGULAR; POSTGRES;",
       "TaskList é uma aplicação web que tem o objetivo de criar e gerenciar tarefas, permitindo que os usuários criem e gerenciem suas próprias tarefas, definindo se elas foram concluídas ou não. O back-end da aplicação" + 
      "foi desenvolvido utilizando a linguagem C# e o ASP.NET, enquanto o front-end foi desenvolvido utilizando o Angular.",
      "https://front-tasklist.vercel.app/",
      "TaskListProject.jpeg",
      "https://github.com/bdev16/front-tasklist",
      "https://github.com/bdev16/TaskList"
    ),
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    // Pequeno delay para garantir o DOM renderizado
  }

  customOptions: OwlOptions  = {
    loop: true,
    autoHeight: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 200,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  customOptions2: OwlOptions  = {
    loop: true,
    autoHeight: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 100,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  openDialog(project: Project):void {
    this.dialog.open(DialogBoxComponent, {
      data: project
    });
  }
}
