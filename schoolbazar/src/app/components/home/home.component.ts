import { Component, OnInit } from "@angular/core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HttpService } from "src/app/http.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	faChevronDown = faChevronDown;
	relative: boolean = true;
	cheapest: boolean = false;
	mostexpensive: boolean = false;
	posts: any;
	postsdefault: any;
	noposts: boolean = false;

	constructor(private http: HttpService) {}

	ngOnInit(): void {
		this.loadPosts();
	}

	loadPosts(){
		this.http.getPosts(0).subscribe(data => {
			this.posts = data;
			if(data){
				this.noposts = false;
			} else {
				this.noposts = true;
			}
		})
	}

	changeFilterGlobal(filter: number) {
		switch (filter) {
			case 0:
				this.relative = true;
				this.cheapest = false;
				this.mostexpensive = false;
				this.loadPosts();
				break;
			case 1:
				this.posts.posts.sort((a: any, b: any) => a.price - b.price)
				this.relative = false;
				this.cheapest = true;
				this.mostexpensive = false;
				break;	
			case 2:
				this.posts.posts.sort((a: any, b: any) => b.price - a.price)
				this.relative = false;
				this.cheapest = false;
				this.mostexpensive = true;
				break;
			default:
				break;
		}
	}

}
