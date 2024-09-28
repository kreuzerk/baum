import {ChangeDetectionStrategy, Component, computed, input} from "@angular/core";
import {Chunk} from "./chunk";

@Component({
  standalone: true,
  selector: 'chunk',
  template: `
    <div class="chunk-container" [class.is-column]="chunks().length === 1">
    @for (chunk of chunks(); track $index){
      <div class="chunk"
           [style.flex-basis]="100 / totalChunkSize() * chunk.value + '%'"
      >
        <div class="chunk-name">{{ chunk.name }} - {{ chunk.value }}</div>
        <chunk [chunks]="chunk.chunks"/>
      </div>
    }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChunkComponent {
  chunks = input.required<Chunk[]>();

  totalChunkSize = computed(() => this.chunks().reduce((acc, chunk) => acc + chunk.value, 0));

}
