import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const personList = [
      {
        "_name":"Rakesh",
        "_email":["abc@gmail.co","xyz@yahoo.com"],
        "_mobile":["9090909090","8779987799"],
        "_office_contact":["9090909090","8779987799"],
        "_location":"India",
        "_current_designation":"CEO",
        "about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "_job_list":[
          {
            "profile_heading":"CEO", 
            "start_date":"sep-2020",
            "end_date":"dec_2020", 
            "skill":"Technical manager",
            "location":"Noida", 
          "Description":"abdc dummy"
          }
        ],
        "_accomplishment":["English","Hindi"],
        "_coulleges_names":["Jhone", "Mark"],
        "_followers_name":["Jhon", "Milly"],
        "_following_companies":["abc pvt ltd", "google.com", "yahoo.in"],
        "_education":["MBA","MCA"],
        "_interest":["Dialottee", "Google"],
        "_social_profiles":["facebook.com", "yahoo.com"],
        "_connection":["Google", "Yahoo", ""],
        "_active_companies":[""],
        "_profile_status":true
      }
    ]
  }

}
