import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { States, states } from 'src/app/interfaces/state';

@Component({
  selector: 'data-state-filter',
  templateUrl: './data-state-filter.component.html',
  styleUrls: ['./data-state-filter.component.sass']
})

export class DataStateFilterComponent {
  @Input() states_form: States[] = [];
  @Input() label: string = 'Novo local...';
  @Input() disabled: boolean = false; 
  showDropdown = false;
  isLoading = true;
  selectedStates: States | null = null;
  showPlaceholder = true;
  query = '';
  @Input() initialValue: string | null = null;
  @Output() changeLocations: EventEmitter<string> = new EventEmitter();
  @Output() changeQuery: EventEmitter<string> = new EventEmitter();

  getText() {
    const text = document.getElementById('state-filter-data')?.textContent;
    this.query = text as string;
    this.changeQuery.emit(this.query);
  }

  onShowPlaceholder() {
    setTimeout(() => {
      this.resetInput();
      this.showPlaceholder = !this.selectedStates;
    }, 300);
  }

  onHidePlaceholder() {
    if (!this.disabled) {
      this.showPlaceholder = false;
    }
  }

  removeState(state: States, event: Event) {
    event.stopPropagation();
    if (this.selectedStates === state ){
      this.selectedStates = null;
    }
    this.emitLocations();
    this.onShowPlaceholder();
  }

  addState(state: States) {
    this.resetInput();
    this.selectedStates = state;
    this.showPlaceholder = false;
    this.emitLocations();
    this.showDropdown = false;
  }

  emitLocations() {
    if (this.selectedStates) {
      this.changeLocations.emit(this.selectedStates.state_code);
    } else {
      this.changeLocations.emit("");
    }
  }

  focusOutInput() {
    this.showDropdown = false;
  }

  focusOnInput() {
    if (!this.disabled) { 
      let container = document.getElementById('state-filter-data');
      if (container) {
        container.focus();
      }
      this.showDropdown = true;
    }
  }

  resetInput() {
    this.query = '';
    let container = document.getElementById('state-filter-data');
    if(container) {
      container.textContent = '';
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  getStatesList() {
    if (this.query.length) {
      return states.filter(state =>
        state.name.toLowerCase().includes(this.query.toLowerCase().trim()) ||
        state.state_code.toLowerCase().includes(this.query.toLowerCase().trim())
      ).sort((a, b) => a.name.localeCompare(b.name)).slice(0, 100);
    }
    return [];
  }

  blockTyping(event: KeyboardEvent) {
    if (this.disabled) {
      event.preventDefault();
    }
  }
}
