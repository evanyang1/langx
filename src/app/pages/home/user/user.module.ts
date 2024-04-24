import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProfileComponentsModule } from 'src/app/components/profile/profile.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    ComponentsModule,
    ProfileComponentsModule,
  ],
  declarations: [UserPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserPageModule {}
