import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store/store";
import { Button } from "semantic-ui-react";

export default function Scratch() {
  // Directly use useSelector with the RootState type
  const data = useSelector((state: RootState) => state.test.data);

  // Directly use useDispatch with AppDispatch type
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Scratch Page</h1>
      <h3>The data is {data}</h3>
      <Button onClick={() => dispatch({ type: "test/increment" })}>
        Incremeent
      </Button>
      <Button onClick={() => dispatch({ type: "test/decrement" })}>
        Decrement
      </Button>
      <Button
        onClick={() => dispatch({ type: "test/incrementByAmount", payload: 5 })}
      >
        Increment by 5
      </Button>
    </div>
  );
}
