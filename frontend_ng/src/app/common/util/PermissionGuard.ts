import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { LocalStorage } from '../storage/local.storage'

export class PermissionGuard   implements CanActivate{
　　canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
　　  if(true)
				return true;
			else
				return false;
　　}
}