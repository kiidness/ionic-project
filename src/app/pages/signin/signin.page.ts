import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  
  public signinForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(private loginService: LoginService, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private router: Router,
              private formBuilder: FormBuilder
  ) {
    this.signinForm = this.formBuilder.group({
      email: ['',
        Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])],
      password2: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  ngOnInit() {
  }

  async createUser(loginForm: FormGroup): Promise<void> {
    if (!loginForm.valid) {
      console.log('Formulaire non valide pour le moment, valeur:', loginForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();

      const email = loginForm.value.email;
      const password = loginForm.value.password;
      const password2 = loginForm.value.password2;

      if(password != password2) {
        const alert = await this.alertCtrl.create({
          message: "Erreur\nVeuillez entrer 2 fois le même mot de passe.",
          buttons: [{text: 'Ok', role: 'Annuler'}],
        });
        await alert.present();
      }

      this.loginService.signupUser(email, password).then(
          () => {
            this.loading.dismiss().then(() => {
              this.loginUser(email, password);
            });
          },
          error => {
            this.loading.dismiss().then(async () => {
              const alert = await this.alertCtrl.create({
                message: error.message,
                buttons: [{text: 'Ok', role: 'Annuler'}],
              });
              await alert.present();
            });
          }
      );
    }
  }

  async loginUser(email: string, password: string) {
    this.loginService.loginUser(email, password).then(
      () => {
        this.loading.dismiss().then(() => {
          this.router.navigateByUrl('tabs/tab1');
        });
      },
      error => {
        this.loading.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: 'Ok', role: 'Annuler' }],
          });
          await alert.present();
          this.router.navigateByUrl('login');
        });
      }
    );
  }
}
