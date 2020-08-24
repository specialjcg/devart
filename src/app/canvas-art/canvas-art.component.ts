import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-canvas-art',
  templateUrl: './canvas-art.component.html',
  styleUrls: ['./canvas-art.component.scss']
})


export class CanvasArtComponent implements AfterViewInit {
  @ViewChild('myCanvasrose', {static: false}) myCanvasrose: ElementRef;
  @ViewChild('myCanvasyellow', {static: false}) myCanvasyellow: ElementRef;

  public contextrose: CanvasRenderingContext2D;
  public contextyellow: CanvasRenderingContext2D;
  private radius: number;
  private rand: number;
  private pi1: number;
  private pi2: number;
  private choixangle: number;

  ngAfterViewInit(): void {
    this.contextrose = this.myCanvasrose.nativeElement.getContext('2d');
    this.contextyellow = this.myCanvasyellow.nativeElement.getContext('2d');

  }

  clear(): void {
    this.contextrose.clearRect(0, 0, this.myCanvasrose.nativeElement.width, this.myCanvasrose.nativeElement.height);
    this.contextyellow.clearRect(0, 0, this.myCanvasyellow.nativeElement.width, this.myCanvasyellow.nativeElement.height);

  }

  dessinerrose(): void {
    this.contextrose.lineJoin = 'round';
    this.contextrose.globalCompositeOperation = 'lighter';
    this.contextrose.textBaseline = 'top';
    this.contextrose.shadowColor = 'rgb(252,90,184)';
    this.contextrose.strokeStyle = 'rgba(252,90,184,0.8)';
    this.contextrose.lineWidth = 10;
    this.contextrose.shadowOffsetX = 3;
    this.contextrose.shadowOffsetY = 0;
    this.contextrose.shadowBlur = 13;


    let xcontrol = 325;
    let ycontrol = 150;
    if (this.contextrose) {
      this.contextrose.beginPath();
      this.contextrose.moveTo(300, 150);
      for (let i = 0; i < 5; i++) {

        if (xcontrol > 600) {
          xcontrol = 0;
        }

        if (ycontrol > 300) {
          ycontrol = 0;
        }
        if (Math.random() < 0.5) {
          this.pi1 = Math.PI;
          this.pi2 = 0;

        } else {
          this.pi1 = Math.PI / 2;
          this.pi2 = -Math.PI / 2;
        }
        this.radius = 50 + Math.random() * 100;
        this.contextrose.arc(xcontrol, ycontrol, this.radius, this.pi2, this.pi1, false);
        if (this.rand === 1) {
          xcontrol = xcontrol + this.radius;
        } else {
          ycontrol = ycontrol + this.radius;

        }

      }
      this.contextrose.stroke();
    }
  }

  constructor() {
  }


  dessineryellow(): void {
    this.contextyellow.lineJoin = 'round';
    this.contextyellow.globalCompositeOperation = 'lighter';
    this.contextyellow.textBaseline = 'top';
    this.contextyellow.shadowColor = 'rgb(247,255,60)';
    this.contextyellow.strokeStyle = 'rgba(247,255,60,0.8)';
    this.contextyellow.lineWidth = 1.5;
    this.contextyellow.shadowOffsetX = 3;
    this.contextyellow.shadowOffsetY = 0;
    this.contextyellow.shadowBlur = 3;
    this.contextyellow.fillStyle = 'green';

    this.draw(300, 300, 50, 0);


  }

  draw(startX, startY, len, angle): any {
    this.contextyellow.beginPath();
    this.contextyellow.save();

    this.contextyellow.translate(startX, startY);
    this.contextyellow.rotate(angle * Math.PI / 180);
    this.contextyellow.moveTo(0, 0);
    this.contextyellow.lineTo(0, -len);
    this.contextyellow.stroke();

    if (len < 10) {
      this.contextyellow.beginPath();
      this.contextyellow.arc(0, -len, 10, 0, Math.PI / 2);
      this.contextyellow.fill();
      this.contextyellow.restore();
      return;
    }

    this.draw(0, -len, len * 0.6, -25);
    if (Math.random() < 0.5) {
      this.choixangle = 25;
    } else {
      this.choixangle = -25;
    }
    this.draw(0, -len, len * 0.8, this.choixangle);
    this.draw(0, -len, len * 0.6, 15);
    this.contextyellow.restore();
  }
}
