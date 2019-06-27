import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ArticlesService, Article } from 'src/app/services/articles.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.page.html',
  styleUrls: ['./ajouter-article.page.scss'],
})
export class AjouterArticlePage implements OnInit {
  public articleForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  image: string = "data:image/jpeg;base64,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";  
  constructor(private loginService: LoginService, private articlesService: ArticlesService,
    public loadingCtrl: LoadingController, private camera: Camera,
    public alertCtrl: AlertController,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.articleForm = this.formBuilder.group({
        titre: ['',
          Validators.compose([Validators.required, Validators.minLength(3)])],
        description: [
          '',
          Validators.compose([Validators.required, Validators.minLength(10)]),
        ],
        prix: [
          '',
          Validators.compose([Validators.required, Validators.min(0)]),
        ],
      });
    }

  ngOnInit() {
  }

  async creerAnnonce (articleForm: FormGroup): Promise<void> {
    if (!articleForm.valid) {
      console.log('Formulaire non valide pour le moment, valeur:', articleForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();

      var article: Article = {
        titre: articleForm.value.titre,
        description: articleForm.value.description,
        prix: articleForm.value.prix,
        mailproprietaire: this.loginService.getUserLoggedEmail(),
        image: this.image
      };
      
      this.articlesService.addArticle(article).then(
          () => {
            this.loading.dismiss().then(() => {
              this.router.navigateByUrl('tabs/tab2');
            });
          },
          error => {
            this.loading.dismiss().then(async () => {
              const alert = await this.alertCtrl.create({
                message: error.message,
                buttons: [{ text: 'Ok', role: 'Annuler' }],
              });
              await alert.present();
            });
          }
      );
    }
  }

  async updatePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.image = imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, async (error) => {
      const alert = await this.alertCtrl.create({
        message: "Erreur: la photo n'a pas pu être récupérée.\n" + error.message,
        buttons: [{ text: 'Ok', role: 'Annuler' }],
      });
      await alert.present();
     });
  }

}
