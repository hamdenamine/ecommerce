import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/_models/categorie';
import { CategorieService } from 'src/app/_services/categorie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorie! : Categorie[];

  constructor(private categorieservice:CategorieService) { }

  ngOnInit(): void {
    this.get();
    
  }
  get() {
    this.categorieservice.getAll().subscribe((data) => {
      this.categorie = data;
      console.log(data);
    });
  }
  

  
}
  



