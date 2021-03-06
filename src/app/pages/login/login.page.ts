import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(private loginService: LoginService, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private router: Router,
              private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  ngOnInit() {
  }

  async loginUser(loginForm: FormGroup): Promise<void> {
    if (!loginForm.valid) {
      console.log('Formulaire non valide pour le moment, valeur:', loginForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();

      const email = loginForm.value.email;
      const password = loginForm.value.password;

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
            });
          }
      );
    }
  }
}
