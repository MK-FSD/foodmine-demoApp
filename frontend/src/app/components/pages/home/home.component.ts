import { Component } from '@angular/core';
import { Food } from '../../../Shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
foods:Food[] = [];
constructor(private foodservice:FoodService) {
  this.foods = foodservice.getAll();
}
}
