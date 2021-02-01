import {trigger, state, style, animate, transition, group} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    isDropDown:boolean;
    title: string;
    icon: string;
    class: string;
    id:string;
    children?:RouteInfo[];
    state?:string;
    oc?:string;
    isShown?:boolean;
}
export const ROUTES: RouteInfo[] = [
    { id:'dashboard', path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' ,isDropDown:false},

    { id:'admin', path: '', title: 'Admin',isShown:false ,state:'default',oc:'close',  icon:'admin_panel_settings', class: '' ,isDropDown:true,children :
    [{ id:'userProfile', path: '/user-profile', title: 'User Profile',  icon:'person', class: '' ,isDropDown:false}]
  },
  { id:'feature', path: '', title: 'Features',  icon:'extension', class: '' ,isDropDown:true,children :
  [
    { id:'tableList', path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' ,isDropDown:false},
    { id:'typography', path: '/typography', title: 'Typography',  icon:'library_books', class: '' ,isDropDown:false},
    { id:'icons', path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' ,isDropDown:false},
    { id:'maps', path: '/maps', title: 'Maps',  icon:'location_on', class: '' ,isDropDown:false},
    { id:'notifications', path: '/notifications', title: 'Notifications',  icon:'notifications', class: '',isDropDown:false },
  ]},
  
    
    { id:'management', path: '', title: 'Management',  icon:'handyman', class: 'dropdown',isDropDown:true , 
    children :[{id:'fields', path: '/fields', title: 'Fields',  icon: 'table_view', class: '' ,isDropDown:false}]},
    
    { id:'upgrade', path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' ,isDropDown:false}
    
  
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('rotated => default', animate('800ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
  ]),
  //for dd slid transition
  trigger('openClose', [
    state('open', style({ height: '*' })),
    state('close', style({ height: '0px' })),
    transition('close => open', animate('500ms ease-out')),
    transition('open => close', animate('500ms ease-in'))
]),



]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isShown:boolean = false;

  constructor( ) { }
  //menuItem : RouteInfo;
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  toogleMenu( menuItem) {

    menuItem;
    this.menuItems.forEach(element =>{
      if (element.id === menuItem.id) {
        element.state = (element.state === 'default' ? 'rotated' : 'default');
        element.oc = (element.oc=== 'close' ? 'open' : 'close');
        element.isShown=(element.isShown===false ? true:false);
        
    }else{
      element.state='default';
      element.oc='close';
      element.isShown=false;
    }
    
  });   
    
}
}
