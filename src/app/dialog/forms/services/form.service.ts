import { Injectable } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

@Injectable()
export class FormService {

  private subscription:Subscription = new Subscription()

  set setSubscription (subs:Subscription){
    this.subscription = subs
  }

  get getSubscription ():Subscription {
    return this.subscription
  }

  constructor() {}


}
