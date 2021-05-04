import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modal: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.modal.open(ModalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
    });
  }
}
