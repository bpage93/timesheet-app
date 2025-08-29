import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [RouterModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  private router = inject(Router);
}
