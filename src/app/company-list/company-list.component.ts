import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.less']
})
export class CompanyListComponent implements OnInit {

  public companylist : Array<any>;
  public companylistData;
  public totalRec;
  page: number = 1;
  constructor(private router:Router) { }

  ngOnInit() {
    const companylist = [
      {
        "_id":"12345",
        "_name": "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address": "Noida India 201301",
        "_location": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account ": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12346",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address ": "Noida India 201301",
        "_location": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12347",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size ": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address": "Noida India 201301",
        "_location": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12348",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address": "Noida India 201301",
        "_location ": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12349",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address": "Noida India 201301",
        "_location": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12350",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size ": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address": "Noida India 201301",
        "_location": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12351",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address": "Noida India 201301",
        "_location": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12352",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address": "Noida India 201301",
        "_location": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      },
      {
        "_id":"12353",
        "_name" : "Aban Offshore",
        "_type" :"Oil & gas",
        "_founded" : "1986",
        "_specialities ": "Oil & gas producers",
        "_logo" : "/assets/img/enterprise.png",
        "_size": 200,
        "_about": "Indian Oil provides products and services all along the energy value chain, and is India's largest commercial entity. The firm has been on the Global 500 as long as the list has been recorded.",
        "_contact" : ["0000000000","9999990909","0101010101"],
        "_banner": "/assets/img/services.jpg",
        "_tag" : ["tag1","tag2","tag3"],
        "_taglist" : ["tag1","tag2","tag3"],
        "_address ": "Noida India 201301",
        "_location ": {
            "type":"primary",
            "office_name":"ABC pvt ltd",
            "address":"A1, Sector-135", 
            "geo_location": {
              "let":"010",
              "log":"11"
            }
          },
        "_branchies" : [
          {
            "location":"india",
            "office_address":"A1, Sector -123"
          },
          {
            "location":"UK",
            "office_address":"A1, Street London"
          }
        ],
        "_social_account": [
          "linkedin.com",
          "facebook.com"
        ],
        "_website_url" : "www.abc.com",
        "_industry" : "Indian Oil Corporation",
        "_active_status" : true
      }

    ];

    this.companylist = companylist;
    this.companylistData =  this.companylist;
    this.loadEmployee();
  }

  private loadEmployee() {
    this.companylist = this.companylistData;
    this.totalRec = this.companylist.length;
    localStorage.setItem('companies', JSON.stringify(this.companylist));
  }

}
