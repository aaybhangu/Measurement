import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SnapshotComponent } from "./snapshot/snapshot.component";
import { HistoricalComponent } from "./historical/historical.component";
import { RealtimeComponent } from "./realtime/realtime.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { GraphDataComponent } from "./historical/graph-data/graph-data.component";

@NgModule({
  declarations: [
    AppComponent,
    SnapshotComponent,
    HistoricalComponent,
    RealtimeComponent,
    PageNotFoundComponent,
    GraphDataComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
