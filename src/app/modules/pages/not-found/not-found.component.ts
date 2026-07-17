import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

    constructor(
        private meta: Meta,
        private title: Title,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
        this.title.setTitle('Página não encontrada - Querido Diário');
    }

    goHome(): void {
        this.router.navigate(['/']);
    }
}