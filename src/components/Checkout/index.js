import classes from "./style.module.css";

export const Checkout = ({ handleShowCheckout }) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Street Address</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" id="phoneNumber" />
      </div>

      <button type="submit">Confirm</button>
      <button type="button" onClick={handleShowCheckout}>
        Cancel
      </button>
    </form>
  );
};
