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
  public totalRec;
  page: number = 1;
  public personList : Array<any>;
  public companyArticle : Array<any>;
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
        "_profilePic":"/assets/img/profile.png",
        "_banner": "/assets/img/services.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "_job_list":[
          {
            "profile_heading":"CEO", 
            "start_date":"Sep 2019",
            "end_date":"till", 
            "skill":"Client Managment, Bussiness Stradgy, Product Handling",
            "location":"Noida", 
            "Description":"User handling"
          },
          {
            "profile_heading":"CTO", 
            "start_date":"Jan 2018",
            "end_date":"Sep 2019", 
            "skill":"AWS, Team Managment, DevOps, Backend Technology, Database Handling",
            "location":"Gurgram", 
            "Description":"Team Handling"
          },
          {
            "profile_heading":"Principle Engineer", 
            "start_date":"sep-2020",
            "end_date":"dec_2020", 
            "skill":"Java, Spring Boot, MySql, Frontend, AWS,  DevOps",
            "location":"Noida", 
            "Description":"Module handling"
          }
        ],
        "_accomplishment":["English","Hindi"],
        "_coulleges_names":["Jhone", "Mark"],
        "_followers_name":["Jhon", "Milly"],
        "_following_companies":["abc pvt ltd", "google.com", "yahoo.in"],
        "_education":[
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Master of Computer Application (MCA), Information Technology",
            "_start_education": "2009",
            "_end_education": "2012"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Bachalore of Computer Application (BCA), Information Technology",
            "_start_education": "2006",
            "_end_education": "2009"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Sinor Secondary, Education",
            "_start_education": "2004",
            "_end_education": "2006"
          }
        ],
        "_interest":[
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Wipro Limited",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"LinkedIn",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Deloitte",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"SAP",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Cisco",
            "_followers_count":"2,202,033"
          }

        ],
        "_social_profiles":[
          {"facebook":"facebook.com"}, 
          {"yahoo":"yahoo.com"},
          {"instagram":"instagram"}
        ],
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
        "_profilePic":"/assets/img/profile.png",
        "_banner": "/assets/img/services.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "_job_list":[
          {
            "profile_heading":"CEO", 
            "start_date":"Sep 2019",
            "end_date":"till", 
            "skill":"Client Managment, Bussiness Stradgy, Product Handling",
            "location":"Noida", 
            "Description":"User handling"
          },
          {
            "profile_heading":"CTO", 
            "start_date":"Jan 2018",
            "end_date":"Sep 2019", 
            "skill":"AWS, Team Managment, DevOps, Backend Technology, Database Handling",
            "location":"Gurgram", 
            "Description":"Team Handling"
          },
          {
            "profile_heading":"Principle Engineer", 
            "start_date":"sep-2020",
            "end_date":"dec_2020", 
            "skill":"Java, Spring Boot, MySql, Frontend, AWS,  DevOps",
            "location":"Noida", 
            "Description":"Module handling"
          }
        ],
        "_accomplishment":["English","Hindi"],
        "_coulleges_names":["Jhone", "Mark"],
        "_followers_name":["Jhon", "Milly"],
        "_following_companies":["abc pvt ltd", "google.com", "yahoo.in"],
        "_education":[
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Master of Computer Application (MCA), Information Technology",
            "_start_education": "2009",
            "_end_education": "2012"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Bachalore of Computer Application (BCA), Information Technology",
            "_start_education": "2006",
            "_end_education": "2009"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Sinor Secondary, Education",
            "_start_education": "2004",
            "_end_education": "2006"
          }
        ],
        "_interest":[{
            "_logo":"/assets/img/default-logo.png",
            "_name":"Wipro Limited",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"LinkedIn",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Deloitte",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"SAP",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Cisco",
            "_followers_count":"2,202,033"
          }],
        "_social_profiles":[{"facebook":"facebook.com"}, 
          {"yahoo":"yahoo.com"},
          {"instagram":"instagram"}],
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
        "_profilePic":"/assets/img/profile.png",
        "_banner": "/assets/img/services.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "_job_list":[
          {
            "profile_heading":"CEO", 
            "start_date":"Sep 2019",
            "end_date":"till", 
            "skill":"Client Managment, Bussiness Stradgy, Product Handling",
            "location":"Noida", 
            "Description":"User handling"
          },
          {
            "profile_heading":"CTO", 
            "start_date":"Jan 2018",
            "end_date":"Sep 2019", 
            "skill":"AWS, Team Managment, DevOps, Backend Technology, Database Handling",
            "location":"Gurgram", 
            "Description":"Team Handling"
          },
          {
            "profile_heading":"Principle Engineer", 
            "start_date":"sep-2020",
            "end_date":"dec_2020", 
            "skill":"Java, Spring Boot, MySql, Frontend, AWS,  DevOps",
            "location":"Noida", 
            "Description":"Module handling"
          }
        ],
        "_accomplishment":["English","Hindi"],
        "_coulleges_names":["Jhone", "Mark"],
        "_followers_name":["Jhon", "Milly"],
        "_following_companies":["abc pvt ltd", "google.com", "yahoo.in"],
        "_education":[
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Master of Computer Application (MCA), Information Technology",
            "_start_education": "2009",
            "_end_education": "2012"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Bachalore of Computer Application (BCA), Information Technology",
            "_start_education": "2006",
            "_end_education": "2009"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Sinor Secondary, Education",
            "_start_education": "2004",
            "_end_education": "2006"
          }
        ],
        "_interest":[{
            "_logo":"/assets/img/default-logo.png",
            "_name":"Wipro Limited",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"LinkedIn",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Deloitte",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"SAP",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Cisco",
            "_followers_count":"2,202,033"
          }],
        "_social_profiles":[{"facebook":"facebook.com"}, 
          {"yahoo":"yahoo.com"},
          {"instagram":"instagram"}],
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
        "_profilePic":"/assets/img/profile.png",
        "_banner": "/assets/img/services.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "_job_list":[
          {
            "profile_heading":"CEO", 
            "start_date":"Sep 2019",
            "end_date":"till", 
            "skill":"Client Managment, Bussiness Stradgy, Product Handling",
            "location":"Noida", 
            "Description":"User handling"
          },
          {
            "profile_heading":"CTO", 
            "start_date":"Jan 2018",
            "end_date":"Sep 2019", 
            "skill":"AWS, Team Managment, DevOps, Backend Technology, Database Handling",
            "location":"Gurgram", 
            "Description":"Team Handling"
          },
          {
            "profile_heading":"Principle Engineer", 
            "start_date":"sep-2020",
            "end_date":"dec_2020", 
            "skill":"Java, Spring Boot, MySql, Frontend, AWS,  DevOps",
            "location":"Noida", 
            "Description":"Module handling"
          }
        ],
        "_accomplishment":["English","Hindi"],
        "_coulleges_names":["Jhone", "Mark"],
        "_followers_name":["Jhon", "Milly"],
        "_following_companies":["abc pvt ltd", "google.com", "yahoo.in"],
        "_education":[
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Master of Computer Application (MCA), Information Technology",
            "_start_education": "2009",
            "_end_education": "2012"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Bachalore of Computer Application (BCA), Information Technology",
            "_start_education": "2006",
            "_end_education": "2009"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Sinor Secondary, Education",
            "_start_education": "2004",
            "_end_education": "2006"
          }
        ],
        "_interest":[{
            "_logo":"/assets/img/default-logo.png",
            "_name":"Wipro Limited",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"LinkedIn",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Deloitte",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"SAP",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Cisco",
            "_followers_count":"2,202,033"
          }],
        "_social_profiles":[{"facebook":"facebook.com"}, 
          {"yahoo":"yahoo.com"},
          {"instagram":"instagram"}],
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
        "_profilePic":"/assets/img/profile.png",
        "_banner": "/assets/img/services.jpg",
        "_about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        "_job_list":[
          {
            "profile_heading":"CEO", 
            "start_date":"Sep 2019",
            "end_date":"till", 
            "skill":"Client Managment, Bussiness Stradgy, Product Handling",
            "location":"Noida", 
            "Description":"User handling"
          },
          {
            "profile_heading":"CTO", 
            "start_date":"Jan 2018",
            "end_date":"Sep 2019", 
            "skill":"AWS, Team Managment, DevOps, Backend Technology, Database Handling",
            "location":"Gurgram", 
            "Description":"Team Handling"
          },
          {
            "profile_heading":"Principle Engineer", 
            "start_date":"sep-2020",
            "end_date":"dec_2020", 
            "skill":"Java, Spring Boot, MySql, Frontend, AWS,  DevOps",
            "location":"Noida", 
            "Description":"Module handling"
          }
        ],
        "_accomplishment":["English","Hindi"],
        "_coulleges_names":["Jhone", "Mark"],
        "_followers_name":["Jhon", "Milly"],
        "_following_companies":["abc pvt ltd", "google.com", "yahoo.in"],
        "_education":[
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Master of Computer Application (MCA), Information Technology",
            "_start_education": "2009",
            "_end_education": "2012"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Bachalore of Computer Application (BCA), Information Technology",
            "_start_education": "2006",
            "_end_education": "2009"
          },
          {
            "_university_logo":"/assets/img/default-logo.png",
            "_university_name":"Maharishi Dayanand University",
            "_course_name": "Sinor Secondary, Education",
            "_start_education": "2004",
            "_end_education": "2006"
          }
        ],
        "_interest":[{
            "_logo":"/assets/img/default-logo.png",
            "_name":"Wipro Limited",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"LinkedIn",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Deloitte",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"SAP",
            "_followers_count":"2,202,033"
          },
          {
            "_logo":"/assets/img/default-logo.png",
            "_name":"Cisco",
            "_followers_count":"2,202,033"
          }],
        "_social_profiles":[{"facebook":"facebook.com"}, 
          {"yahoo":"yahoo.com"},
          {"instagram":"instagram"}],
        "_connection":["Google", "Yahoo", ""],
        "_active_companies":[""],
        "_profile_status":true
      }

    ];

    const companyArticleData = [
      {
        "_id":"12121",
        "_published_date":"20-june-2019",
        "_description":"One of the most commonly used websites for article submissions, so don’t waste your money looking for a job. Instead, build your reputation as a writer and companies will come to hire you. With an effective revenue sharing strategy, you can earn money over the articles that receive high publicity.",
        "_image":"/assets/img/information.jpg",
        "_event_name":"Diwali Celebration",
        "article_url": "www.google.com"
      },
      {
        "_id":"12122",
        "_published_date":"20-june-2019",
        "_description":"One of the most commonly used websites for article submissions, so don’t waste your money looking for a job. Instead, build your reputation as a writer and companies will come to hire you. With an effective revenue sharing strategy, you can earn money over the articles that receive high publicity.",
        "_image":"/assets/img/information.jpg",
        "_event_name":"Holi Celebration",
        "article_url": "www.google.com"
      },
      {
        "_id":"12123",
        "_published_date":"20-june-2019",
        "_description":"One of the most commonly used websites for article submissions, so don’t waste your money looking for a job. Instead, build your reputation as a writer and companies will come to hire you. With an effective revenue sharing strategy, you can earn money over the articles that receive high publicity.",
        "_image":"/assets/img/information.jpg",
        "_event_name":"Independance Day Celebration",
        "article_url": "www.google.com"
      },
      {
        "_id":"12124",
        "_published_date":"20-june-2019",
        "_description":"One of the most commonly used websites for article submissions, so don’t waste your money looking for a job. Instead, build your reputation as a writer and companies will come to hire you. With an effective revenue sharing strategy, you can earn money over the articles that receive high publicity.",
        "_image":"/assets/img/information.jpg",
        "_event_name":"New Year Celebration",
        "article_url": "www.google.com"
      },
      {
        "_id":"12125",
        "_published_date":"20-june-2019",
        "_description":"One of the most commonly used websites for article submissions, so don’t waste your money looking for a job. Instead, build your reputation as a writer and companies will come to hire you. With an effective revenue sharing strategy, you can earn money over the articles that receive high publicity.",
        "_image":"/assets/img/information.jpg",
        "_event_name":"Onam Celebration",
        "article_url": "www.google.com"
      },
      {
        "_id":"12126",
        "_published_date":"20-june-2019",
        "_description":"One of the most commonly used websites for article submissions, so don’t waste your money looking for a job. Instead, build your reputation as a writer and companies will come to hire you. With an effective revenue sharing strategy, you can earn money over the articles that receive high publicity.",
        "_image":"/assets/img/information.jpg",
        "_event_name":"Ramnavmi Celebration",
        "article_url": "www.google.com"
      }
    ]
    
    if(history.state.navigationId == 1){
      this.companyData = JSON.parse(localStorage.getItem('currentState'));
    }else{
      localStorage.setItem('currentState', JSON.stringify(history.state));
      this.companyData  = history.state;
    }
    this.personList = personData;
    this.companyArticle = companyArticleData;
  }

}
