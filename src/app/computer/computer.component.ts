import { Computer } from './../models/Computer.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {
  @Input() computer!: Computer;
  message!: string;
  
  ngOnInit(): void {
      this.message= "soyew les bienvenue";
  }


}
