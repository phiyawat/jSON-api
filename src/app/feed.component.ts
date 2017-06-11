import { Component, OnInit, OnDestroy } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs/Subscription";

import gql from "graphql-tag";

import "rxjs/add/operator/toPromise";

const AllDatasQuery = gql`
  query{
      allDatas {
          id
          email
          name
      }
  }
`;

@Component({
  selector: "app-feed",
  template: `
    <div class="w-100" style="max-width: 400px">

      <br><br>List of member<br><br>

      <div class="pa3 bg-black-05 ma3" *ngFor="let post of allDatas">
      
        <div>
          {{post.email}}&nbsp;<br>
          {{post.name}}
        </div>

      </div>

    </div>
  `,
  host: { style: "width: 100%; display: flex; justify-content: center;" }
})
export class FeedComponent implements OnInit {
  // OnDestroy
  loading = true;
  allDatas: any; //change function
  allPostsSub: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.allPostsSub = this.apollo
      .watchQuery({
        query: AllDatasQuery
      })
      .subscribe(({ data, loading }: any) => {
        this.allDatas = data.allDatas; //change function
        this.loading = loading;
      });
  }
  /*
 ngOnDestroy() {
    this.allPostsSub.unsubscribe();
  }
  */
}
