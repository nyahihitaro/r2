// tslint:disable:variable-name
import { TypeConverter, cast, element } from '../TypeConverter';

export interface Order {
  order_type: string;
  product_id: string;
  side: string;
  quantity: number;
  price: number;
  leverage_level?: number;
  order_direction?: string;
}

export interface SendOrderRequest {
  order: Order;
}

export class SendOrderResponse extends TypeConverter {
  @cast id: string;
  @cast order_type: string;
  @cast quantity: string;
  @cast disc_quantity: string;
  @cast iceberg_total_quantity: string;
  @cast side: string;
  @cast filled_quantity: string;
  @cast price: number;
  @cast created_at: number;
  @cast updated_at: number;
  @cast status: string;
  @cast leverage_level: number;
  @cast source_exchange: string;
  @cast product_id: string;
  @cast product_code: string;
  @cast funding_currency: string;
  @cast crypto_account_id?: any;
  @cast currency_pair_code: string;
  @cast average_price: string;
  @cast target: string;
  @cast order_fee: string;
  @cast source_action: string;
  @cast unwound_trade_id?: any;
  @cast trade_id?: any;
}

export type CancelOrderResponse = any;

export class Execution extends TypeConverter {
  @cast id: string;
  @cast quantity: string;
  @cast price: string;
  @cast taker_side: string;
  @cast created_at: number;
  @cast my_side: string;
}

export class OrdersResponse extends TypeConverter {
  @cast id: string;
  @cast order_type: string;
  @cast quantity: string;
  @cast disc_quantity: string;
  @cast iceberg_total_quantity: string;
  @cast side: string;
  @cast filled_quantity: string;
  @cast price: number;
  @cast created_at: number;
  @cast updated_at: number;
  @cast status: string;
  @cast leverage_level: number;
  @cast source_exchange: string;
  @cast product_id: string;
  @cast product_code: string;
  @cast funding_currency: string;
  @cast crypto_account_id?: any;
  @cast currency_pair_code: string;
  @cast average_price: string;
  @cast target: string;
  @cast order_fee: string;
  @cast source_action: string;
  @cast unwound_trade_id?: any;
  @cast trade_id: string;
  @cast settings?: any;
  @cast trailing_stop_type: boolean;
  @cast trailing_stop_value: boolean;
  @cast @element(Execution) executions: Execution[];
  @cast stop_triggered_time?: any;
}

export class TradingAccount extends TypeConverter {
  @cast id: string;
  @cast leverage_level: number;
  @cast max_leverage_level: number;
  @cast current_leverage_level: number;
  @cast pnl: string;
  @cast equity: string;
  @cast margin: string;
  @cast free_margin: string;
  @cast trader_id: string;
  @cast status: string;
  @cast product_code: string;
  @cast currency_pair_code: string;
  @cast position: number;
  @cast balance: string;
  @cast created_at: number;
  @cast updated_at: number;
  @cast pusher_channel: string;
  @cast margin_percent: string;
  @cast product_id: string;
  @cast funding_currency: string;
}

export type TradingAccountsResponse = TradingAccount[];
export class PriceLevelsResponse extends TypeConverter {
  @cast @element(Array, Number) buy_price_levels: number[][];
  @cast @element(Array, Number) sell_price_levels: number[][];
}