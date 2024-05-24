import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hom',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hom.component.html',
  styleUrl: './hom.component.css'
})
export class HomComponent {

  gas_amt: number = 0;
  grocery_amt: number = 0;
  dining_amt: number = 0;
  verizon_amt: number = 0;
  other_amt: number = 0;
  total_amt: number = 0;

  pvde_gas_amt: number = 0;
  pvde_grocery_amt: number = 0;
  pvde_dining_amt: number = 0;
  pvde_verizon_amt: number = 0;
  pvde_other_amt: number = 0;
  pvde_total_amt: number = 0;

  percent = {
    "gas": 4,
    "grocery": 4,
    "dining": 3,
    "verizon": 2,
    "other": 1
  }

  calculatePercentageAmt() {
    this.pvde_gas_amt = parseFloat(((this.percent["gas"] * this.gas_amt) / 100).toFixed(2));
    this.pvde_grocery_amt = parseFloat(((this.percent["grocery"] * this.grocery_amt) / 100).toFixed(2));
    this.pvde_dining_amt = parseFloat(((this.percent["dining"] * this.dining_amt) / 100).toFixed(2));
    this.pvde_verizon_amt = parseFloat(((this.percent["verizon"] * this.verizon_amt) / 100).toFixed(2));
    this.pvde_other_amt = parseFloat(((this.percent["other"] * this.other_amt) / 100).toFixed(2));

    this.calculateTotal();
    this.calculatePVDETotal();
  }

  calculateTotal(){
    this.total_amt = parseFloat((this.gas_amt + this.grocery_amt + this.dining_amt + this.verizon_amt + this.other_amt).toFixed(2));
  }

  calculatePVDETotal(){
    this.pvde_total_amt = parseFloat((this.pvde_gas_amt + this.pvde_grocery_amt + this.pvde_dining_amt + this.pvde_verizon_amt + this.pvde_other_amt).toFixed(2));
  }
}
