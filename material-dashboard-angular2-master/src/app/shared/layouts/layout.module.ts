import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { DashboardComponent } from '../../feature/dashboard/dashboard.component';
import { UserProfileComponent } from '../../feature/user-profile/user-profile.component';
import { TableListComponent } from '../../feature/table-list/table-list.component';
import { TypographyComponent } from '../../feature/typography/typography.component';
import { IconsComponent } from '../../feature/icons/icons.component';
import { MapsComponent } from '../../feature/maps/maps.component';
import { NotificationsComponent } from '../../feature/notifications/notifications.component';
import { UpgradeComponent } from '../../feature/upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class LayoutModule {}
