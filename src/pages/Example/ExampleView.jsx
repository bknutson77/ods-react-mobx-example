import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../providers/RootStoreContext";
import { observer } from "mobx-react";
import ButtonComponent from "../../components/Button/ButtonComponent";

const ExampleView = observer(() => {

  // Stores:
  let rootStore = useContext(RootStoreContext);
  let exampleStore = rootStore.exampleStore;

  return (
    <div className="w-full h-full p-4 flex flex-col items-center mt-[200px]">
      <div className="text-3xl">{exampleStore.myNumber}</div>
      <div className="flex gap-2 mt-[50px]">
        <div className="w-[100px]">
          <ButtonComponent
            label={"Increment"}
            type={"primary"}
            onClickCallback={(e) => exampleStore.incrementMyNumber()}
          />
        </div>
        <div className="w-[100px]">
          <ButtonComponent
            label={"Decrement"}
            type={"primary"}
            onClickCallback={(e) => exampleStore.decrementNumber()}
          />
        </div>
        <div className="w-[100px]">
          <ButtonComponent
            label={"Multiply"}
            type={"primary"}
            onClickCallback={(e) => exampleStore.multiplybyTwo()}
          />
        </div>
      </div>
    </div>
  );
});

export default ExampleView;