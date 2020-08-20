import { Component, OnInit } from "@angular/core";
import { Auth } from "kuroco/core/Auth";
import { TopicsService } from "kuroco/services/TopicsService";

@Component({
  selector: "app-show-topic-ids",
  templateUrl: "./show-topic-ids.component.html",
  styleUrls: ["./show-topic-ids.component.css"]
})
export class ShowTopicIDsComponent implements OnInit {
  list: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getTopicsList()
      .then(res => this.list = res.body.list);
  }

  async getTopicsList() {
    await Auth.login({
      requestBody: { email: 'test', password: 'qwer1234' },
    })
    return await TopicsService.getTopicsServiceRcmsApi1Topics1({});
  }
}
