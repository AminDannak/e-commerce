import { DummyProduct } from "./DummyProduct";

export interface DummyCategory {
  id: number;
  title: string;
  routeName: string;
  items: Array<DummyProduct>;
}
