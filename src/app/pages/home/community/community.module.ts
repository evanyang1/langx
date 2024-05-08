import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';
import { CommunityPage } from './community.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponentsModule } from 'src/app/components/home/home.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityPageRoutingModule,
    HomeComponentsModule,
    ComponentsModule,
  ],
  declarations: [CommunityPage],
})
export class CommunityPageModule {}
