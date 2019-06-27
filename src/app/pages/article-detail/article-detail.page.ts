import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Article, ArticlesService } from 'src/app/services/articles.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {
  article: Article;
  isMyArticle: boolean;

  loading: HTMLIonLoadingElement;

  constructor(private platform: Platform, private articleService: ArticlesService, private loginService: LoginService,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
    let id = this.platform.getQueryParam("idArticle");
    this.articleService.getArticle(id).subscribe(res => {
      this.article = res;
      this.article.id = id;
      let email = this.loginService.getUserLoggedEmail();
      this.isMyArticle = email == this.article.mailproprietaire;
    });

    
  }

  envoyerMail() {
    console.log(this.article.mailproprietaire);
  }

  async save() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.articleService.updateArticle(this.article, this.article.id);
    this.loading.dismiss().then(async () => {
      const alert = await this.alertCtrl.create({
        message: 'Vos modifications ont bien étés mises à jour',
        buttons: [
          { text: 'Ok' }
        ]
      });
      await alert.present();
    });
  }

  async remove() {
    const alert = await this.alertCtrl.create({
      message: 'Êtes vous sûr de vouloir supprimer définitivement cet article?',
      buttons: [
        {
          text: 'Supprimer',
          handler: () => {
            this.removeConfirmed();
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

  async removeConfirmed() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.articleService.removeArticle(this.article.id);
    this.loading.dismiss().then(async => {
      this.router.navigate(['tabs/tab2']);
    })
  }

}
