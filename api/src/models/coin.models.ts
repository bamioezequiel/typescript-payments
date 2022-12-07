import { model, Schema } from "mongoose";
import { Coin } from "../interfaces/coin.interface";

const CoinSchema = new Schema<Coin>(
  {
    amount: {
      type: Number,
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

const CoinModel = model("coins", CoinSchema);
export default CoinModel;
