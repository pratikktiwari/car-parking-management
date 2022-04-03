import { createTheme, mergeStyles } from "@fluentui/react";
import { IDropdownOption } from "@fluentui/react/lib/components/Dropdown";
import { ITextFieldStyles } from "@fluentui/react/lib/components/TextField";
/**
 * Park vehicle props and state
 */
export interface IParkVehicleProps {}
export interface IParkVehicleState {
  selectedCity: IDropdownOption<any> | undefined;
  selectedParkingArea: IDropdownOption<any> | undefined;
  registrationNumber: string;
  ownerName: string;
  ownerAddress: string;
  parkingDuration: string;
}
/**
 * Vehicle status state and props
 */
export interface IVehicleStatusProps {}
export interface IVehicleStatusState {
  registrationNumber: string;
}
/**
 * Vehicle release state and props
 */
export interface IReleaseVehicleProps {}
export interface IReleaseVehicleState {
  registrationNumber: string;
}
/**
 * Dashboard right state and props
 */
export interface IDashboardRightProps {
  currentComponent: ComponentTypes;
}
export interface IDashboardRightState {}

/**
 * Dashboard state and props
 */
export interface IDashboardProps {}
export interface IDashboardState {
  currentComponent: ComponentTypes;
}
/**
 * Dashbiard right
 */
export interface IDashboardLeftProps {
  setCurrentComponent: (componentName: ComponentTypes) => void;
}
export interface IDashboardLeftState {}

export enum ComponentTypes {
  ParkNewVehicle = "ParkNewVehicle",
  CheckVehicleStatus = "CheckVehicleStatus",
  ReleaseVehicle = "ReleaseVehicle",
  AccountSetting = "AccountSetting",
  PayUserBill = "PayUserBill",
  ServiceAreas = "ServiceAreas",
  ParkingMap = "ParkingMap",
}
export enum TextFieldStates {
  registrationNumber = "registrationNumber",
  ownerName = "ownerName",
  ownerAddress = "ownerAddress",
  parkingDuration = "parkingDuration",
}
export const textFieldStyles: Partial<ITextFieldStyles> = {
  fieldGroup: { width: 300 },
};
export const wrapperClass = mergeStyles({
  padding: 2,
  selectors: {
    "& > .ms-Shimmer-container": {
      margin: "10px 0",
      background: "transparent",
    },
  },
});

export const customThemeForShimmer = createTheme({
  palette: {
    // palette slot used in Shimmer for main background
    neutralLight: "#bdd4ed",
    // palette slot used in Shimmer for tip of the moving wave
    neutralLighter: "#7AAFE7",
    // palette slot used in Shimmer for all the space around the shimmering elements
    white: "#0078D4",
  },
});
