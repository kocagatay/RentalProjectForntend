import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

    constructor(
        private authService : AuthService,
        private router : Router,
        private toastrService : ToastrService
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if (this.authService.isAuthenticated()) {
            return true;
        }else{
            this.router.navigate(['login']);
            this.toastrService.info("Sisteme giriş yapmalısınız")
            return false;
        }
    }
}
