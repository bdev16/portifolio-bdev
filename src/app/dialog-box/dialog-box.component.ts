import { Component, Inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../model/project';

@Component({
  selector: 'app-dialog-box',
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Project) {}
}
