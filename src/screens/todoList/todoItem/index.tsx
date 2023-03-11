import { VDFCheckBox } from "../../../components/VDFCheckBox";
import TrashIcon from './trashIcon';
import "./style.scss";

export interface IToDoItem {
  id: string;
  name: string;
  checked?: boolean;
}

interface IToDoItemProps {
  item: IToDoItem;
  onRemoveTodo?: (id: string) => void;
  onCheckedChangeTodo?: (id: string) => void;
}

export function TodoItem(props: IToDoItemProps) {
  return (
    <div key={props.item.id} className='todo-item'>
      <div className='check-area'>
        <VDFCheckBox
          checked={props.item?.checked ?? false}
          onChange={() => props.onCheckedChangeTodo?.(props.item.id)}
        />
      </div>
      <div className={`todo-content-area ${props.item.checked ? 'strikethrough-todo' : ''}`}>
        {props.item.name}
      </div>
      <div className='trash-area'>
        <span onClick={() => props.onRemoveTodo?.(props.item.id)}><TrashIcon /></span>
      </div>
    </div>
  );
}