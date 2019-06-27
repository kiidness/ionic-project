import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ArticlesService, Article } from 'src/app/services/articles.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.page.html',
  styleUrls: ['./ajouter-article.page.scss'],
})
export class AjouterArticlePage implements OnInit {
  public articleForm: FormGroup;
  public loading: HTMLIonLoadingElement;
  
  constructor(private loginService: LoginService, private articlesService: ArticlesService,
    public loadingCtrl: LoadingController,
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
        image: "https://image.but.fr/is/image/but/8605014760487_Q?$produit_niv3_l$"
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
}
