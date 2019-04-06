import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SnapshotComponent } from "./snapshot/snapshot.component";
import { RealtimeComponent } from "./realtime/realtime.component";
import { HistoricalComponent } from "./historical/historical.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "snapshot", component: SnapshotComponent },
  { path: "realtime", component: RealtimeComponent },
  { path: "historical", component: HistoricalComponent },
  { path: "", component: HistoricalComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
