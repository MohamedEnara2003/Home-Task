import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/layouts/header/header";
import { Footer } from "./shared/layouts/footer/ui/footer";
import { VerificationLink } from "./shared/layouts/navigations/verification-link/verification-link";
import { NavResponsive } from "./shared/layouts/navigations/nav-responsive/nav-responsive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, VerificationLink, NavResponsive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('home-task');
}
