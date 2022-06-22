import classes from "./style.module.css";
import { useForm } from "react-hook-form";

export const Checkout = ({ handleShowCheckout, submitOrderHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    submitOrderHandler(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Street Address</label>
        <input
          {...register("address", { required: true })}
          type="text"
          id="address"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          {...register("phoneNumber", { required: true })}
          type="text"
          id="phoneNumber"
        />
      </div>

      {errors.name || errors.address || errors.phoneNumber ? (
        <span>All the fields are required</span>
      ) : (
        ""
      )}

      <div className={classes.actions}>
        <button type="submit">Confirm</button>
        <button type="button" onClick={handleShowCheckout}>
          Cancel
        </button>
      </div>
    </form>
  );
};
