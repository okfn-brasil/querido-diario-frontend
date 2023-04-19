import { Component, OnInit } from '@angular/core';
import { AlertModel, AlertsList } from 'src/app/interfaces/alerts';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { UserQuery } from 'src/app/stores/user/user.query';

interface List {
  [key: number]: AlertModel[];
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.sass']
})
export class AlertsComponent implements OnInit {
  notFound = false;
  currPage = 0;
  alerts: List = {};
  isOpenModal = false;
  showDeleteModal = false;
  selectedId = '';
  isLoading = false;
  totalItems = 0;
  error = false;
  showEditEmailModal = false;
  cities = [];
  isLoggedIn = false;

  constructor(
    private alertsService: AlertsService,
    private citiesService: CitiesService,
    private userQuery: UserQuery,
  ) { }

  ngOnInit(): void {
    this.getList(0);
    this.getCities();

    this.userQuery.userData$.subscribe(userData => {
      if(userData.full_name) {
        this.isLoggedIn = true;
      }
    });
  }

  getCities() {
    this.citiesService.getAll().subscribe(result => {
      this.cities = result.cities;
    });
  }


  getList(page: number) {
    this.isLoading = true;
    this.notFound = false;
    this.alertsService.getAlerts(page).subscribe(response => {
      const alertsResponse = response as AlertsList;
      this.alerts[page] = alertsResponse.results;
      this.totalItems = alertsResponse.count;
      this.currPage = page;
      this.isLoading = false;
      if(this.totalItems && !this.alerts[page].length) {
        this.currPage -= 1;
      } else if(!this.totalItems){
        this.notFound = true;
      }
    }, () => {
      if(this.totalItems) {
        this.error = true;
      } else {
        this.notFound = true;
      }
      this.isLoading = false;
    })
  }

  setOpenModal() {
    this.isOpenModal = true;
  }

  onCloseCreate() {
    this.isOpenModal = false;
  }

  setCloseModal() {
    this.isOpenModal = false;
    this.currPage = 0;
    this.getList(this.currPage);
  }

  onDeleteAlert(id: string) {
   this.selectedId = id;
   this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  confirmDelete() {
    this.isLoading = true;
    this.closeDeleteModal();
    this.alertsService.deleteAlert(this.selectedId).subscribe(() => {
      this.getList(this.currPage);
    }, () => {

    });
  }
  
  closeEditEmail() {
    this.showEditEmailModal = false;
  }

  openEditEmail() {
    this.showEditEmailModal = true;
  }


  onChangePage(page: number) {
    this.getList(page);
    window.scrollTo(0,0);
  }
}
