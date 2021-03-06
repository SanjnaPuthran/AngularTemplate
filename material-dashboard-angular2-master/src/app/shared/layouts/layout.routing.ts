import { Routes } from '@angular/router';

import { DashboardComponent } from '../../feature/dashboard/dashboard.component';
import { UserProfileComponent } from '../../feature/user-profile/user-profile.component';
import { TableListComponent } from '../../feature/table-list/table-list.component';
import { TypographyComponent } from '../../feature/typography/typography.component';
import { IconsComponent } from '../../feature/icons/icons.component';
import { MapsComponent } from '../../feature/maps/maps.component';
import { NotificationsComponent } from '../../feature/notifications/notifications.component';
import { UpgradeComponent } from '../../feature/upgrade/upgrade.component';
import { FieldManagementComponent } from 'app/feature/field-management/field-management.component';

export const LayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'fields',        component: FieldManagementComponent },
];
