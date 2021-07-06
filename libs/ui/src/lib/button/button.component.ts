import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jira-clone-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';
}
