import { Component } from '@angular/core';
//import the relevant services
import { PostsService } from '../services/post.service';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  //dependency injection
  providers: [PostsService]
})
export class UserComponent { 
  
  //when defining variables good pratice to using typing
  name: string; 
  email: string;

  //address is object, create an interface for it
  address: address;
  //add array of hobbies for this user
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  //this runs every time the component is rendered, inject the service imported above
  constructor(private postsService: PostsService) {
    //give properties/variables initial state in the constructor
    this.name = 'John Doe'; 
    this.email = 'john@gmail.com';
    this.address = {
        street: '12 Main St',
        city: 'Boston',
        state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    //returns observable and we need to subscribe to it
    this.postsService.getPosts().subscribe(posts => {
        console.log(posts);
        this.posts = posts;
    });

  }

  toggleHobbies() {
      if (this.showHobbies == true) {
          this.showHobbies = false;
      } else {
          this.showHobbies = true;
      }
  }

  addHobby(hobby: string) {
      this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
      this.hobbies.splice(i, 1);
  }


}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string
}