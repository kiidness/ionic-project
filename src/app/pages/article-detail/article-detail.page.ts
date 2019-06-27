import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx'
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Article, ArticlesService } from 'src/app/services/articles.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    private alertCtrl: AlertController, private loadingCtrl: LoadingController, private router: Router,
    private emailComposer: EmailComposer, private camera: Camera) { }

  ngOnInit() {
    let id = this.platform.getQueryParam("idArticle");
    this.articleService.getArticle(id).subscribe(res => {
      this.article = res;
      this.article.id = id;
      let email = this.loginService.getUserLoggedEmail();
      this.isMyArticle = email == this.article.mailproprietaire;
    });  
  }

  async envoyerMail() {
    let mailperso = this.loginService.getUserLoggedEmail();
    let email = {
      to: this.article.mailproprietaire,
      cc: null,
      bcc: [mailperso],
      attachments: null,
      subject: "Réponse article leboncoin - " + this.article.titre,
      body: "Bonjour,\nJe suis intéressé par votre article \"" + this.article.titre + "\".\nVoici mon mail: " + mailperso,
      isHtml: true
    }
    this.emailComposer.open(email);
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
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.articleService.removeArticle(this.article.id);
    this.loading.dismiss().then(async => {
      this.router.navigate(['tabs/tab2']);
    })
  }

  async updatePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.article.image = imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, async (error) => {
      const alert = await this.alertCtrl.create({
        message: "Erreur: la photo n'a pas pu être récupérée.\n " + error.message,
        buttons: [{ text: 'Ok', role: 'Annuler' }],
      });
      await alert.present();
     });
  }

}
