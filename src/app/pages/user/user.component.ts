import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user.class';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  perfil:boolean = false
  user:User

  loading:boolean = true

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe( (data:any) => {

      if (data.perfil) {

        this.perfil = true
        let sub = this.userService.verifySession().subscribe(user => {
          this.user = user.content
          sub.unsubscribe()
          this.loading = false
        })


      }else {

        this.perfil = false
        
        this.activatedRoute.paramMap.subscribe((data:any) => {

          let subs = this.userService.getUserById(data.params.id).subscribe(user => {
            this.user = user.content
            if (this.userService.getUser) {
                if (this.user.id == this.userService.getUser.id) {
                  this.router.navigate(['/mi-perfil'])
                }
            }
            this.loading = false
            subs.unsubscribe()
          })

        })

      }


    })
  }

}
