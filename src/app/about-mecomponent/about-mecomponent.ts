import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-mecomponent',
  imports: [RouterModule],
  templateUrl: './about-mecomponent.html',
  styleUrls: ['./about-mecomponent.css']
})
export class AboutMeComponent {
  private router = inject(Router);
}
