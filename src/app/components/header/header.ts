import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMenuOpen = false; 
  activeLink = ''; 
  
  links = ['Accueil', 'blog', 'produits', 'contact']; 
  
  toggleMenu():void { 
    this.isMenuOpen = !this.isMenuOpen; 
  } 
  
  setActive(link: string) { 
    this.activeLink = link; 
    this.isMenuOpen = false; // ferme le menu mobile après clic 
  } 
  
}


