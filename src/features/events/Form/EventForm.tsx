import { ChangeEvent, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/types/event";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../app/store/store";

export default function EventForm() {
  const { register, handleSubmit, formState, isSubmitting } = useForm({
    mode: "onSubmit",
  });

  // const { id } = useParams();

  // const event = useSelector((state: RootState) =>
  //   state.events.events.find((e: AppEvent) => e.id === id)
  // );

  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === id)
  );

  const dispatch = useDispatch();

  const initialValues =
    event !== undefined
      ? event
      : {
          title: "",
          category: "",
          description: "",
          city: "",
          venue: "",
          date: "",
        };

  const [values, setValues] = useState(initialValues);

  function onSubmit(data: any) {
    console.log(data);
    // id = id ?? createId();
    // console.log(values);
    // event !== undefined
    //   ? dispatch(updateEvent({ ...event, ...values }))
    //   : dispatch(
    //       createEvent({
    //         ...values,
    //         hostedBy: "bob",
    //         attendees: [],
    //       })
    //     );
    // navigate(`/events/${id}`);
  }

  // function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
  //   const { name, value } = event.target;
  //   setValues({ ...values, [name]: value });
  // }

  return (
    <Segment clearing>
      <Header
        content={event !== undefined ? "Update meetup" : "Create meetup"}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <input
            defaultValue={event?.title}
            placeholder="Title"
            {...register("name", { required: true })}
          />
          {formState.errors.name && (
            <p style={{ color: "red" }}>Title is required</p>
          )}
        </Form.Field>
        <Form.Field>
          <input
            defaultValue={event?.category}
            placeholder="Category"
            {...register("category", { required: true })}
          />
          {formState.errors.event && (
            <p style={{ color: "red" }}>Category is required</p>
          )}
        </Form.Field>
        <Form.Field>
          <input
            defaultValue={event?.description}
            placeholder="Description"
            {...register("description", { required: true })}
          />{" "}
          {formState.errors.description && (
            <p style={{ color: "red" }}>Description is required</p>
          )}
        </Form.Field>
        <Form.Field>
          <input
            defaultValue={event?.city}
            placeholder="City"
            {...register("city", { required: true })}
          />{" "}
          {formState.errors.city && (
            <p style={{ color: "red" }}>City is required</p>
          )}
        </Form.Field>

        <Form.Field>
          <input
            defaultValue={event?.venue}
            placeholder="Location"
            {...register("venue", { required: true })}
          />{" "}
          {formState.errors.venue && (
            <p style={{ color: "red" }}>Location is required</p>
          )}
        </Form.Field>
        <Form.Field>
          <input
            defaultValue={event?.date}
            type="date"
            placeholder="Date"
            {...register("date", { required: true })}
          />{" "}
          {formState.errors.date && (
            <p style={{ color: "red" }}>Date is required</p>
          )}
        </Form.Field>
        {/* <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field> */}
        <Button
          loading={isSubmitting}
          type="submit"
          floated="right"
          positive
          content="Submit"
        />
        <Button
          type="button"
          floated="right"
          content="Cancel"
          as={Link}
          to="/meetups"
        />
      </Form>
    </Segment>
  );
}
function register(
  arg0: string,
  arg1: { required: boolean }
): import("react/jsx-runtime").JSX.IntrinsicAttributes &
  import("react").ClassAttributes<HTMLInputElement> &
  import("react").InputHTMLAttributes<HTMLInputElement> {
  throw new Error("Function not implemented.");
}
