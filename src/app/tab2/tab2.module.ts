import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {Tab1PageModule} from '../tab1/tab1.module';
import {ListArticlesComponent} from '../components/list-articles/list-articles.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab2Page}]),
        SharedModule

    ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
