import { model, Schema } from "mongoose";
import { Order } from "../interfaces/order.interface";

const OrderSchema = new Schema<Order>(
  {
    orderId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    priceTotal: {
      type: Number,
      required: true,
      default: 0,
    },
    userId: {
      required: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const OrderModel = model("orders", OrderSchema);
export default OrderModel;
