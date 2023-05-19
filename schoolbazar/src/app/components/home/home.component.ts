import { Component, OnInit } from "@angular/core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { HttpService } from "src/app/http.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	faChevronUp = faChevronUp;
	relative: boolean = true;
	cheapest: boolean = false;
	mostexpensive: boolean = false;
	posts: any;
	noposts: boolean = false;
	filteredData: any;
	showStav: boolean = false;
	showGrade: boolean = false;
	showPlace: boolean = false;
	showSubject: boolean = false
	checkboxFilters: any = { grade: [], state: [], place: [], subject: [] };
	userData: any;


	constructor(private http: HttpService) {}

	ngOnInit(): void {
		this.loadPosts();
		if(!this.userData){
			this.checkUser();
		}
	}

	checkUser() {
		this.http.getUser().subscribe((response) => {
		  this.userData = response
		  this.userData = this.userData.data
		}, (error) => {})
	}

	reverse(what: number) {
		switch (what) {
			case 0:
				this.showStav = !this.showStav
				break;
			case 1:
				this.showGrade = !this.showGrade
				break;
			case 2:
				this.showPlace = !this.showPlace
				break;
			case 3:
				this.showSubject = !this.showSubject
				break
			default:
				break;
		}
	}

	errorMessage: string = ""

	loadPosts(){
		this.http.getPosts(0).subscribe((data: any) => {
			this.posts = data;
			if(data){
				this.noposts = false;
			} else {
				this.noposts = true;
			}
			this.setPosts()
		}, (error) => {
			this.errorMessage = error.error.message
			this.noposts = true
		})
	}

	setPosts(){
		this.filteredData = this.posts.posts;
		console.log(this.filteredData)
	}

	changeFilterGlobal(filter: number) {
		switch (filter) {
			case 0:
				this.relative = true;
				this.cheapest = false;
				this.mostexpensive = false;
				break;
			case 1:
				this.filteredData.sort((a: any, b: any) => a.price - b.price)
				this.relative = false;
				this.cheapest = true;
				this.mostexpensive = false;
				break;	
			case 2:
				this.filteredData.sort((a: any, b: any) => b.price - a.price)
				this.relative = false;
				this.cheapest = false;
				this.mostexpensive = true;
				break;
			default:
				break;
		}
	}
  
	checkboxChanged(filterValue: number, filterType: string): void {
		const filterIndex = this.checkboxFilters[filterType].indexOf(filterValue);
		if (filterIndex > -1) {
		  this.checkboxFilters[filterType].splice(filterIndex, 1);
		} else {
		  this.checkboxFilters[filterType].push(filterValue);
		}
	
		this.filterData();
	}

	filterData(): void {
		if(this.posts){
			this.filteredData = this.posts.posts.filter((item: any) => {
				return (
				this.checkboxFilters.grade.length === 0 ||
				this.checkboxFilters.grade.includes(item.grade)
				) && (
				this.checkboxFilters.state.length === 0 ||
				this.checkboxFilters.state.includes(item.state)
				) && (
				this.checkboxFilters.subject.length === 0 ||
				this.checkboxFilters.subject.includes(item.subject)
				) && (
				this.checkboxFilters.place.length === 0 ||
				this.checkboxFilters.place.includes(item.place)
				);
			});
		}
	}

}
