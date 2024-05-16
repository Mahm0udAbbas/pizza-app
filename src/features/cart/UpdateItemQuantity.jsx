import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQunitity, increaseItemQunitity } from "./cartSlice";

export default function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center gap-1 md:gap-3 '>
      <Button type='round' onClick={() => dispatch(decreaseItemQunitity(id))}>
        -
      </Button>
      <span className='text-sm font-medium'>{currentQuantity}</span>
      <Button type='round' onClick={() => dispatch(increaseItemQunitity(id))}>
        +
      </Button>
    </div>
  );
}
