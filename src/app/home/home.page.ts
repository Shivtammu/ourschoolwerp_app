import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  categories = [
    { label: 'Fees', icon: 'cash' },
    { label: 'Online Exams', icon: 'clipboard' },
    { label: 'Digital Content', icon: 'film' },
    { label: 'Online Classes', icon: 'desktop' },
    { label: 'Circulars', icon: 'megaphone' },
    { label: 'Support', icon: 'help-circle' },
    { label: 'Menu', icon: 'restaurant' },
    { label: 'Progress Report', icon: 'stats-chart' },
    { label: 'Transport', icon: 'bus' },
    { label: 'Settings', icon: 'settings' },
    { label: 'Attendance', icon: 'checkmark-done' },
    { label: 'Calendar', icon: 'calendar' },
    { label: 'Profile', icon: 'person' },
    { label: 'Exam Timetable', icon: 'calendar-number' },
    { label: 'Time Table', icon: 'time' }
  ];
  constructor() {}

}

