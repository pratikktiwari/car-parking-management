import React from "react";
import style from "./Dashboard.module.css";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownOption,
  IDropdownStyles,
} from "@fluentui/react/lib/Dropdown";
import {
  customThemeForShimmer,
  IParkVehicleProps,
  IParkVehicleState,
  TextFieldStates,
  textFieldStyles,
  wrapperClass,
} from "./Dashboard.types";
import { TextField } from "@fluentui/react/lib/TextField";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Shimmer } from "@fluentui/react";

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

class ParkVehicle extends React.Component<
  IParkVehicleProps,
  IParkVehicleState
> {
  state = {
    selectedCity: undefined,
    selectedParkingArea: undefined,
    registrationNumber: "",
    ownerName: "",
    ownerAddress: "",
    parkingDuration: "",
  };
  onCityChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption<any> | undefined,
    index?: number | undefined
  ): void => {
    this.setState({
      selectedCity: item,
    });
  };
  onParkingPlaceChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption<any> | undefined,
    index?: number | undefined
  ): void => {
    this.setState({
      selectedParkingArea: item,
    });
  };
  handleFieldChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (typeof newValue !== "undefined") {
      switch (event.currentTarget.name) {
        case TextFieldStates.registrationNumber:
          this.setState({ registrationNumber: newValue });
          break;
        case TextFieldStates.ownerName:
          this.setState({ ownerName: newValue });
          break;
        case TextFieldStates.ownerAddress:
          this.setState({ ownerAddress: newValue });
          break;
        case TextFieldStates.parkingDuration:
          const val = Number(newValue);
          if (newValue.length === 0 || (!isNaN(val) && val > 0 && val < 12)) {
            this.setState({ parkingDuration: newValue });
          }
          break;
        default:
          break;
      }
    }
  };
  handleButtonClick = () => {
    console.log("clicked");
  };
  render(): React.ReactNode {
    const parkingCityList = [
      {
        key: "punjabHeaders",
        text: "Punjab",
        itemType: DropdownMenuItemType.Header,
      },
      { key: "jalandhar", text: "Jalandhar" },
      { key: "chandigarh", text: "Chandigarh" },
      { key: "amritsar", text: "Amritsar" },
      { key: "kathua", text: "Kathua", disabled: true },
      { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
      {
        key: "jharkhandHeaders",
        text: "Jharkhand",
        itemType: DropdownMenuItemType.Header,
      },
      { key: "ranchi", text: "Ranchi" },
      { key: "devghar", text: "Devghar" },
    ];
    const parkingJalandharList = [
      { key: "jalandhar_lpu", text: "LPU Gate" },
      { key: "jalandhar_law_gate", text: "LPU Law Gate" },
      { key: "jalandhar_bus_stand", text: "Bus stand parking place" },
    ];
    const {
      selectedCity,
      selectedParkingArea,
      ownerAddress,
      ownerName,
      registrationNumber,
      parkingDuration,
    } = this.state;
    return (
      <div>
        <h2 className={style.header}>Park a new vehicle</h2>
        <div className={style.parkingContainer}>
          <div className={style.singleField}>
            <Dropdown
              label="Parking City"
              // @ts-ignore
              selectedKey={selectedCity ? selectedCity?.key : undefined}
              onChange={this.onCityChange}
              placeholder="Select a city"
              options={parkingCityList}
              styles={dropdownStyles}
            />
          </div>
          <div className={style.singleField}>
            <Dropdown
              label="Parking Area"
              selectedKey={
                // @ts-ignore
                selectedParkingArea ? selectedParkingArea?.key : undefined
              }
              onChange={this.onParkingPlaceChange}
              placeholder="Select a parking area"
              options={parkingJalandharList}
              styles={dropdownStyles}
            />
          </div>
          <div className={style.singleField}>
            <TextField
              label="Vehicle registration number"
              value={registrationNumber}
              onChange={this.handleFieldChange}
              styles={textFieldStyles}
              name={TextFieldStates.registrationNumber}
            />
          </div>
          <div className={style.singleField}>
            <TextField
              label="Parking duration"
              value={parkingDuration}
              onChange={this.handleFieldChange}
              styles={textFieldStyles}
              name={TextFieldStates.parkingDuration}
            />
          </div>
          <div className={style.singleField}>
            <TextField
              label="Owner name"
              value={ownerName}
              onChange={this.handleFieldChange}
              styles={textFieldStyles}
              name={TextFieldStates.ownerName}
            />
          </div>
          <div className={style.singleField}>
            <TextField
              label="Owner address"
              value={ownerAddress}
              onChange={this.handleFieldChange}
              styles={textFieldStyles}
              name={TextFieldStates.ownerAddress}
            />
          </div>
        </div>
        <div className={style.singleField}>
          <PrimaryButton
            text="Add to records"
            onClick={this.handleButtonClick}
            allowDisabledFocus
            disabled={false}
          />
        </div>
        <div className={style.recordDetails}>
          <p className={style.recordTittle}>
            Parking details will appear here once a record is successfully
            submitted.
          </p>
          <div className={style.detailsWrapper}>
            <div className={style.shimmerWrapper}>
              <div className={wrapperClass}>
                <Shimmer
                  shimmerColors={{
                    shimmer: customThemeForShimmer.palette.themeTertiary,
                    shimmerWave: customThemeForShimmer.palette.themeSecondary,
                  }}
                />
                <Shimmer
                  width="75%"
                  shimmerColors={{
                    shimmer: customThemeForShimmer.palette.themeTertiary,
                    shimmerWave: customThemeForShimmer.palette.themeSecondary,
                  }}
                />
                <Shimmer
                  width="50%"
                  shimmerColors={{
                    shimmer: customThemeForShimmer.palette.themeTertiary,
                    shimmerWave: customThemeForShimmer.palette.themeSecondary,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ParkVehicle;
