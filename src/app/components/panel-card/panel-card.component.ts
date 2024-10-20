import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-card',
  templateUrl: './panel-card.component.html',
  styleUrl: './panel-card.component.scss'
})
export class PanelCardComponent {
    @Input({required: true, alias: 'title'}) cardTitle = '';
    @Input({required:true}) cardContent = '';
}
