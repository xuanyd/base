import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { LocalStorage } from '../storage/local.storage'

export class PermissionGuard implements CanActivate{


	constructor(ls: LocalStorage){
		console.log(123)
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
		return false;
　}
}