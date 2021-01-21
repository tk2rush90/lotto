import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';

const {
  githubUrl,
} = environment;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // github url
  githubUrl = githubUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
