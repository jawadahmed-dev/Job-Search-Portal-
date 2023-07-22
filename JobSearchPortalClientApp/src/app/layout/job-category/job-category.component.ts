import { Component, Input } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.css']
})
export class JobCategoryComponent {
  @Input()
  payload:any;
  faCalculator = faCalculator;
}
