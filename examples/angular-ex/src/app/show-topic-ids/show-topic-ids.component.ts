import { Component, OnInit } from "@angular/core";
import { TopicsApi } from "kuroco";

@Component({
  selector: "app-show-topic-ids",
  templateUrl: "./show-topic-ids.component.html",
  styleUrls: ["./show-topic-ids.component.css"]
})
export class ShowTopicIDsComponent implements OnInit {
  list: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getTopicsList();
  }

  async getTopicsList() {
    const topicsApi = new TopicsApi();
    const responseRaw = await topicsApi.rcmsApiFeedsGet({});
    const responseFeed = await responseRaw.value();
    this.list = responseFeed.list;
  }
}
