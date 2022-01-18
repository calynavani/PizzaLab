import { Component } from '@angular/core';
import { menuItem } from './menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  menuItems:menuItem[]=[new menuItem("Blackened Salmon Pizza", "Dinner", 20), new menuItem("Cajun Chicken Alfredo Pizza", "Dinner", 20), new menuItem("Shrimp Pizza", "Dinner", 20), new menuItem("4-Cheese Breadsticks", "Appetizer", 8), new menuItem("WingDings", "Appetizer", 8),new menuItem("Chicken Parmesean Pizza ", "Dinner", 20), new menuItem("Ceaser Salad", "Appetizer", 10)
  , new menuItem("Top Shelf Margarita", "Cocktails", 10) , new menuItem("Top Shelf Long Island", "Cocktails", 10)];
 

}
