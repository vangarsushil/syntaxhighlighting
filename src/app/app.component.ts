import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // response: HighlightResult;

  code = ` <!DOCTYPE html>
  <html>
  <title>HTML Tutorial</title>
  <body>
  
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
  
  </body>
  </html>`
  
  }
