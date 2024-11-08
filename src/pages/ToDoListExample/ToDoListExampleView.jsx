import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../providers/RootStoreContext";
import { observer } from "mobx-react";
import TextInputComponent from "../../components/TextInput/TextInputComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { Trash3 } from "react-bootstrap-icons";

const ToDoListExampleView = observer(() => {

  // Stores:
  let rootStore = useContext(RootStoreContext);
  let toDoListExampleStore = rootStore.toDoListExampleStore;

  return (
    <div className="w-full h-full p-4 flex flex-col items-center mt-[200px]">

      {/* Add Item */}
      <div className="w-[300px]">
        <TextInputComponent
          noLabel={true}
          value={toDoListExampleStore.newItem}
          onChangeCallback={(e) => toDoListExampleStore.changeNewItem(e)}
          error={toDoListExampleStore.newItemError}
          helperText={toDoListExampleStore.newItemHelper}
        />
        <ButtonComponent
          label={"Add"}
          onClickCallback={() => toDoListExampleStore.addNewItem()}
        />
      </div>

      <div className="h-[50px]"></div>

      {/* List */}
      {toDoListExampleStore.toDoList.map((item, index) => 
        <div className="flex gap-2">
          <div>
            {item}
          </div>
          <div
            className="cursor-pointer mt-[4px]"
            onClick={() => toDoListExampleStore.removeItem(index)}
          >
            <Trash3/>
          </div>
        </div>
      )}
    </div>
  );
});

export default ToDoListExampleView;