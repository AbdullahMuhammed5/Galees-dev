import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile-card",
  templateUrl: "./profile-card.component.html",
  styleUrls: ["./profile-card.component.scss"]
})
export class ProfileCardComponent implements OnInit {
  constructor(private http: HttpClient) { }
  profiles;
  types: string[] = ["Baby Sitter", "Nanny", " Elderly Sitter "];
  selectedType: string;
  changeType(type) {
    this.selectedType = type;
  }
  genders: string[] = ["Female", "Male"];
  selectedGender: string;
  changeGender(gender) {
    this.selectedGender = gender;
  }
  experiences: string[] = [
    "First aid certification",
    "Non-smoker",
    "Has children",
    "Has a car",
    "Has reviews or references"
  ];
  selectedExp: string;
  changeExp(exp) {
    this.selectedExp = exp;
  }
  ngOnInit() {
    this.http.get('http://localhost:8000/get-profile-card').subscribe(
      // res => this.profiles = res
      res => {
        console.log(res);
        this.profiles = res;
      }
    );
  }
}
