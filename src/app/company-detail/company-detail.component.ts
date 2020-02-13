import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit {
  public companyData : any;
  public personList : Array<any>;
  constructor(private router:Router) {
    
  
   }

  

  ngOnInit() {
    const personData = [
      {
        "_id":1,
        "_name":"Rakesh",
        "_email":["abc@gmail.co","xyz@yahoo.com"],
        "_mobile":["9090909090","8779987799"],
        "_office_contact":["9090909090","8779987799"],
        "_location":"India",
        "_current_designation":"CEO",
        "_profilePic":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/IndianOil_Refinery.jpg/100px-IndianOil_Refinery.jpg",
        "_banner": "https://www.organoasia.com/wp-content/uploads/2013/07/banner-m-oil-and-gas-industry2.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
      },
      {
        "_id":2,
        "_name":"Rakesh",
        "_email":["abc@gmail.co","xyz@yahoo.com"],
        "_mobile":["9090909090","8779987799"],
        "_office_contact":["9090909090","8779987799"],
        "_location":"India",
        "_current_designation":"CEO",
        "_profilePic":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/IndianOil_Refinery.jpg/100px-IndianOil_Refinery.jpg",
        "_banner": "https://www.organoasia.com/wp-content/uploads/2013/07/banner-m-oil-and-gas-industry2.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
      },
      {
        "_id":3,
        "_name":"Duli",
        "_email":["abc@gmail.co","xyz@yahoo.com"],
        "_mobile":["9090909090","8779987799"],
        "_office_contact":["9090909090","8779987799"],
        "_location":"India",
        "_current_designation":"CEO",
        "_profilePic":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/IndianOil_Refinery.jpg/100px-IndianOil_Refinery.jpg",
        "_banner": "https://www.organoasia.com/wp-content/uploads/2013/07/banner-m-oil-and-gas-industry2.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
      },
      {
        "_id":4,
        "_name":"Yash",
        "_email":["abc@gmail.co","xyz@yahoo.com"],
        "_mobile":["9090909090","8779987799"],
        "_office_contact":["9090909090","8779987799"],
        "_location":"India",
        "_current_designation":"CEO",
        "_profilePic":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/IndianOil_Refinery.jpg/100px-IndianOil_Refinery.jpg",
        "_banner": "https://www.organoasia.com/wp-content/uploads/2013/07/banner-m-oil-and-gas-industry2.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
      },
      {
        "_id":5,
        "_name":"Amer",
        "_email":["abc@gmail.co","xyz@yahoo.com"],
        "_mobile":["9090909090","8779987799"],
        "_office_contact":["9090909090","8779987799"],
        "_location":"India",
        "_current_designation":"CEO",
        "_profilePic":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/IndianOil_Refinery.jpg/100px-IndianOil_Refinery.jpg",
        "_banner": "https://www.organoasia.com/wp-content/uploads/2013/07/banner-m-oil-and-gas-industry2.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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

    ];
    
    if(history.state.navigationId == 1){
      this.companyData = JSON.parse(localStorage.getItem('currentState'));
    }else{
      localStorage.setItem('currentState', JSON.stringify(history.state));
      this.companyData  = history.state;
    }
    this.personList = personData;
  }

}
