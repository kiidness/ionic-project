import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ArticlesService } from '../services/articles.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public loading: HTMLIonLoadingElement;

  constructor(private loginService: LoginService, private articlesService: ArticlesService, private alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {}

  async deconnecter() {
    const alert = await this.alertCtrl.create({
      message: 'Êtes vous sûr de vouloir vous déconnecter?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.logoutConfirmed();
          }
        },
        {
          text: 'Non',
          role: 'non'
        }
      ]
    });
    await alert.present();
  }

  async supprimerCompte() {
    const alert = await this.alertCtrl.create({
      message: 'Êtes vous sûr de vouloir supprimer définitivement votre compte? Tous vos articles seront également supprimés.',
      buttons: [
        {
          text: 'Supprimer',
          handler: () => {
            this.removeAccountConfirmed();
          }
        },
        {
          text: 'Annuler',
          role: 'annuler'
        }
      ]
    });
    await alert.present();
  }

  private async logoutConfirmed() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.loginService.logoutUser();
    this.loading.dismiss();
  }

  private async removeAccountConfirmed() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.articlesService.removeAllMyArticles();
    this.loginService.removeLoggedAccount();
    this.loading.dismiss();
  }
}
