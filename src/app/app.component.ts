import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {ChunkComponent} from "./chunk.component";
import {Chunk} from "./chunk";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChunkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /*
  chunks: Chunk[] = [
    {
      name: 'Parent',
      size: 400,
      chunks: [
        {
          name: 'Child 1',
          size: 200,
          chunks: [
            {
              name: 'Child 1.1',
              size: 2200,
              chunks: []
            },
            {
              name: 'Child 1.2',
              size: 8000,
              chunks: []
            }
          ]
        },
        {
          name: 'Child 2',
          size: 200,
          chunks: []
        }
      ]
    }
  ]
   */
  chunks: Chunk[] = [{
      "name": "main-EL44KLST.js",
      "value": 102028,
      "chunks": [{
        "name": "node_modules",
        "value": 81865,
        "chunks": [{
          "name": "@angular",
          "value": 81865,
          "chunks": [{
            "name": "common",
            "value": 5674,
            "chunks": [{
              "name": "fesm2022",
              "value": 5674,
              "chunks": [{"name": "common.mjs", "value": 5674, "chunks": []}]
            }]
          }, {
            "name": "platform-browser",
            "value": 11695,
            "chunks": [{
              "name": "fesm2022",
              "value": 11695,
              "chunks": [{"name": "platform-browser.mjs", "value": 11695, "chunks": []}]
            }]
          }, {
            "name": "router",
            "value": 64496,
            "chunks": [{
              "name": "fesm2022",
              "value": 64496,
              "chunks": [{"name": "router.mjs", "value": 64496, "chunks": []}]
            }]
          }]
        }]
      }, {
        "name": "src",
        "value": 19374,
        "chunks": [{
          "name": "app",
          "value": 19337,
          "chunks": [{"name": "app.routes.ts", "value": 288, "chunks": []}, {
            "name": "app.config.ts",
            "value": 53,
            "chunks": []
          }, {"name": "app.component.ts", "value": 18996, "chunks": []}]
        }, {"name": "main.ts", "value": 37, "chunks": []}]
      }]
    }]
}
