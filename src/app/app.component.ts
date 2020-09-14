import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IRS-UI'
  private translate:TranslateService

  constructor(translate: TranslateService) {
    this.translate = translate
  }

  public ngOnInit() {
    this.translate.setDefaultLang('en')
  }
}
