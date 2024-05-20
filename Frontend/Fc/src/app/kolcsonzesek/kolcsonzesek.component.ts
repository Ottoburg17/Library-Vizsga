import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Kolcsonzesek } from 'Kolcsonzesek';

@Component({
  selector: 'app-kolcsonzesek',
  templateUrl: './kolcsonzesek.component.html',
  styleUrls: ['./kolcsonzesek.component.css']
})
export class KolcsonzesekComponent {
  ujIro: string = '';
  ujMufaj: string = '';
  ujCim: string = '';
  kolcsonzesek: Kolcsonzesek[] = [];

  constructor(private baseService: BaseService) {}

  mentes() {
    const newKolcsonzes: Kolcsonzesek = {
      iro: this.ujIro,
      mufaj: this.ujMufaj,
      cim: this.ujCim,
      id: undefined,
      kolcsonzoId: undefined
    };

    this.baseService.createKolcsonzes(newKolcsonzes).subscribe(
      response => {
        console.log('Sikeres mentés:', response);
        this.kolcsonzesek.push(response);  // Hozzáadja az új kölcsönzést a listához
        this.resetForm();  // Törli a form adatait
      },
      error => {
        console.error('Hiba történt a mentés során:', error);
      }
    );
  }

  resetForm() {
    this.ujIro = '';
    this.ujMufaj = '';
    this.ujCim = '';
  }

  torles(id: number) {
    this.baseService.deleteKolcsonzes(id).subscribe(
      () => {
        console.log('Sikeres törlés');
        this.kolcsonzesek = this.kolcsonzesek.filter(k => k.id !== id);  // Frissíti a listát
      },
      error => {
        console.error('Hiba történt a törlés során:', error);
      }
    );
  }

  javitas(id: number) {
    const kolcsonzes = this.kolcsonzesek.find(k => k.id === id);
    if (kolcsonzes) {
      this.baseService.updateKolcsonzes(id, kolcsonzes).subscribe(
        response => {
          console.log('Sikeres javítás:', response);
          // Frissítheted az állapotot szükség szerint
        },
        error => {
          console.error('Hiba történt a javítás során:', error);
        }
      );
    }
  }
}