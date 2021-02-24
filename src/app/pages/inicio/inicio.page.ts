import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EstiloPreguntas } from 'src/app/models/estilo-preguntas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router, private alerta: AlertController) { }

  ngOnInit() {
  }

  public async misGuias(){
    var data = new EstiloPreguntas();
    console.log(data.getCorrecta1())
    if(parseInt(data.getCorrecta1()) >=1 && parseInt(data.getCorrecta1()) <=4)
      {
        this.router.navigateByUrl('mis-guias');
      }else{
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'NO TIENES GUIAS CREDAS',
          cssClass: 'alertcss',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('OK');
              },
              cssClass: 'buttoncss',
            },
          ],
          backdropDismiss: true,
        });

        await alert.present();
      }
  }

  public nombreGuia(){
    this.router.navigateByUrl('nombre-guia');
  }

  public informacion(){
    this.router.navigateByUrl('informacion');
  }

}
