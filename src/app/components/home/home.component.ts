import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // 気温
  public temperature: string;
  // 湿度
  public humidity: string;
  // 風速
  public wind: string;

  /**
   * 天気情報の取得
   */
  public getWeatherInfo() {}
}
