import ChargingStation from '../types/ChargingStation';
import User from './User';

export enum InactivityStatus {
  INFO = 'I',
  WARNING = 'W',
  ERROR = 'E'
}

export default interface Transaction {
  id: number;
  siteID: string;
  siteAreaID: string;
  connectorId: number;
  tagID: string;
  userID: string;
  chargeBoxID: string;
  signedData?: any;
  user?: User;
  stop?: {
    tagID: string;
    userID: string;
    user?: User;
    meterStop: number;
    price: number;
    roundedPrice: number;
    priceUnit: string;
    pricingSource: string;
    stateOfCharge: number;
    totalInactivitySecs: number;
    extraInactivitySecs: number;
    inactivityStatus?: InactivityStatus;
    totalConsumptionWh: number;
    totalDurationSecs: number;
    timestamp: Date;
    transactionData?: any;
    signedData?: any;
  };
  remotestop?: {
    timestamp: Date;
    tagID: string;
    userID: string;
  };
  refundData?: {
    refundId: string;
    refundedAt: Date;
    type: any;
    reportId?: string;
    status?: any;
  };
  chargeBox?: ChargingStation;
  meterStart: number;
  timestamp: Date;
  price: number;
  roundedPrice: number;
  priceUnit: string;
  pricingSource: string;
  stateOfCharge: number;
  timezone: string;
  currentTimestamp?: Date;
  currentTotalInactivitySecs: number;
  currentInactivityStatus?: InactivityStatus;
  currentStateOfCharge: number;
  numberOfMeterValues: number;
  currentInstantWatts: number;
  currentInstanWattsL1?: number;
  currentInstanWattsL2?: number;
  currentInstanWattsL3?: number;
  currentInstanWattsDC?: number;
  currentConsumptionWh?: number;
  currentCumulatedPrice: number;
  currentTotalConsumptionWh: number;
  currentTotalDurationSecs: number;
  currentSignedData?: number;
  currentInstantVoltage?: number;
  currentInstantVoltageL1?: number;
  currentInstantVoltageL2?: number;
  currentInstantVoltageL3?: number;
  currentInstantVoltageDC?: number;
  currentInstantAmperage?: number;
  currentInstantAmperageL1?: number;
  currentInstantAmperageL2?: number;
  currentInstantAmperageL3?: number;
  currentInstantAmperageDC?: number;
  uniqueId?: string;
  errorCode?: number;
  values?: TransactionConsumption[]
}

export interface TransactionConsumption {
  date: Date;
  instantWatts: number;
  instantWattsL1: number;
  instantWattsL2: number;
  instantWattsL3: number;
  instantWattsDC: number;
  instantAmps: number;
  instantAmpsL1: number;
  instantAmpsL2: number;
  instantAmpsL3: number;
  instantAmpsDC: number;
  instantVolts: number;
  instantVoltsL1: number;
  instantVoltsL2: number;
  instantVoltsL3: number;
  instantVoltsDC: number;
  limitWatts: number;
  limitAmps: number;
  cumulatedConsumptionWh: number;
  cumulatedConsumptionAmps: number;
  stateOfCharge: number;
  cumulatedAmount: number;
}
