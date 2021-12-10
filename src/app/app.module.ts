import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import {DemoComponent} from './demo/demo.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
