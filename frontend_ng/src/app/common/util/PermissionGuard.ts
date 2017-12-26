import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { LocalStorage } from '../storage/local.storage'

@Injectable()
export class PermissionGuard implements CanActivate{
	constructor(private ls: LocalStorage) {}
	canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
  	console.log('routing check')
  	if(this.ls.localStorage.username == null){
  		return false;
  	}
    return true
  }
}