import { CanActivateFn } from '@angular/router';

export const indexGuard: CanActivateFn = (route, state) => {
  return true;
};
