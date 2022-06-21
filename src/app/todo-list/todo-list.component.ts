import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Category } from '../Model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() selectedCategory: Category = {} as any;

  constructor(private modalService: NgbModal) { }

  public addTodoListItem() {
    const modalRef = this.modalService.open(ModalComponent, { size: 'sm' });
    modalRef.componentInstance.titleName = "Todo List";
    modalRef.componentInstance.inputLabel = "Please enter Todo:";
    modalRef.result.then((res: string) => {
      this.selectedCategory.todoList.push({ isChecked: false, todoItemName: res });
    }, () => { })
  }

  public onCheckBoxChange(id: number) {
    this.selectedCategory.todoList.forEach((l, i) => {
      if (id === i) {
        l.isChecked = !l.isChecked;
      }
    });
  }

  public removeItem(id: number) {
    this.selectedCategory.todoList = this.selectedCategory.todoList.filter((item, i) => i != id);
  }
}
