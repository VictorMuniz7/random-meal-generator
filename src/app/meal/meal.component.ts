import { Component, OnInit } from '@angular/core';
import { MealService } from '../service/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit{

  meal: any[] = ['']
  ingredients: any = []

  constructor(
    private mealService: MealService
  ){}

  ngOnInit(): void {
    this.generateMeal()
  }

  generateMeal(){
    this.scrollToTop()
    this.ingredients = ['']
    this.mealService.getRandomMeal().subscribe({
      next: (data) => {
        this.meal = data.meals

          for (let i = 1; i < 21; i++) {
            let ingredient;
            if (this.meal[0][`strMeasure${i}`] !== null
              && this.meal[0][`strMeasure${i}`] !== undefined
              && this.meal[0][`strIngredient${i}`] !== undefined
              && this.meal[0][`strIngredient${i}`] !== null) {
              ingredient = `${this.meal[0][`strMeasure${i}`]} ${this.meal[0][`strIngredient${i}`]}`;
              this.ingredients = [...this.ingredients, ingredient];
            }
          }
      },
      error: (error: any) => console.log(error)
    })
  }

  scrollToTop() {
    const element = document.querySelector('.back');
    if (element) {
      element.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}


