import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { Category } from './Model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [];

  selectedCategory: Category = {} as any;

  constructor(private modalService: NgbModal) {}

  public selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  public addCategory() {
    const modalRef = this.modalService.open(ModalComponent, {size: 'sm'});
    modalRef.componentInstance.titleName = "Categories";
    modalRef.componentInstance.inputLabel = "Please enter category name:";
    modalRef.result.then((res: string) =>{
      this.categories.push({"name": res, todoList: []});
      this.selectedCategory = this.categories[this.categories.length-1];
    }, () =>{}
    )
  }
}
