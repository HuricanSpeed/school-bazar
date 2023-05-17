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
	showStav: boolean = true;
	showGrade: boolean = true;
	checkboxFilters: any = { grade: [], state: [] };


	constructor(private http: HttpService) {}

	ngOnInit(): void {
		this.loadPosts();
	}

	reverse(what: number) {
		switch (what) {
			case 0:
				this.showStav = !this.showStav
				break;
			case 1:
				this.showGrade = !this.showGrade
				break;
			default:
				break;
		}
	}

	loadPosts(){
		this.http.getPosts(0).subscribe(data => {
			this.posts = data;
			if(data){
				this.noposts = false;
			} else {
				this.noposts = true;
			}
			this.setPosts()
		})
	}

	setPosts(){
		this.filteredData = this.posts.posts;
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
		this.filteredData = this.posts.posts.filter((item: any) => {
			return (
			this.checkboxFilters.grade.length === 0 ||
			this.checkboxFilters.grade.includes(item.grade)
			) && (
			this.checkboxFilters.state.length === 0 ||
			this.checkboxFilters.state.includes(item.state)
			);
		});
	}

}
