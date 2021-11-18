// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Pair extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token0", Value.fromString(""));
    this.set("token1", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pair entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Pair entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Pair", id.toString(), this);
    }
  }

  static load(id: string): Pair | null {
    return changetype<Pair | null>(store.get("Pair", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get trades(): Array<string> {
    let value = this.get("trades");
    return value!.toStringArray();
  }

  set trades(value: Array<string>) {
    this.set("trades", Value.fromStringArray(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("decimals", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }
}

export class Trade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("open", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("high", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("low", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("close", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("volume", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("pair", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Trade entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Trade entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Trade", id.toString(), this);
    }
  }

  static load(id: string): Trade | null {
    return changetype<Trade | null>(store.get("Trade", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get open(): BigDecimal {
    let value = this.get("open");
    return value!.toBigDecimal();
  }

  set open(value: BigDecimal) {
    this.set("open", Value.fromBigDecimal(value));
  }

  get high(): BigDecimal {
    let value = this.get("high");
    return value!.toBigDecimal();
  }

  set high(value: BigDecimal) {
    this.set("high", Value.fromBigDecimal(value));
  }

  get low(): BigDecimal {
    let value = this.get("low");
    return value!.toBigDecimal();
  }

  set low(value: BigDecimal) {
    this.set("low", Value.fromBigDecimal(value));
  }

  get close(): BigDecimal {
    let value = this.get("close");
    return value!.toBigDecimal();
  }

  set close(value: BigDecimal) {
    this.set("close", Value.fromBigDecimal(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    return value!.toBigInt();
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value!.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }
}
