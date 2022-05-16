import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {

  minDate: Date = new Date();

  date = this.minDate.getDate() + '.' + (this.minDate.getMonth() + 1) + '.' + this.minDate.getFullYear();

  sleep = 1;

  headache = 1;

  tiredness = 1;

  appetite = 1;

  constipation = 1;

  self_blame_thoughts = 1;

  mood = 1;

  self_destructive_thoughts = 1;

  concentration = 1;

  physical_discomfort = 1;

  tense_feeling = 1;

  sleep_length: string = '8';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDailyReport() {
  }
}
