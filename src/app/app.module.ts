import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ApolloModule } from "apollo-angular";
import { AppComponent } from "./app.component";
import { FeedComponent } from "./list.component";
import { routes } from "./routes";
import { provideClient } from "./client";

@NgModule({
  declarations: [AppComponent, FeedComponent],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ApolloModule.forRoot(provideClient)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
