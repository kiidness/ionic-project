import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-save-and-delete-buttons',
  templateUrl: './save-and-delete-buttons.component.html',
  styleUrls: ['./save-and-delete-buttons.component.scss'],
})
export class SaveAndDeleteButtonsComponent implements OnInit {
  @Output() saveEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  save() {
    this.saveEvent.next();
  }

  async remove() {
    const alert = await this.alertCtrl.create({
      message: 'Êtes vous sûr de vouloir supprimer définitivement cet élément?',
      buttons: [
        {
          text: 'Supprimer',
          handler: () => {
            this.removeEvent.next();
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
}
