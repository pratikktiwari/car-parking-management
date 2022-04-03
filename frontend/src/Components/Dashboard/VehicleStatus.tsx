import React from "react";
import style from "./Dashboard.module.css";
import {
  customThemeForShimmer,
  IVehicleStatusProps,
  IVehicleStatusState,
  TextFieldStates,
  textFieldStyles,
  wrapperClass,
} from "./Dashboard.types";
import { TextField } from "@fluentui/react/lib/TextField";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Shimmer } from "@fluentui/react";

class VehicleStatus extends React.Component<
  IVehicleStatusProps,
  IVehicleStatusState
> {
  state = {
    registrationNumber: "",
  };
  handleFieldChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (typeof newValue !== "undefined") {
      this.setState({ registrationNumber: newValue });
    }
  };
  handleButtonClick = () => {
    console.log("clicked");
  };
  render(): React.ReactNode {
    const { registrationNumber } = this.state;
    return (
      <div>
        <h2 className={style.header}>Check vehicle status</h2>
        <div className={style.parkingContainer}>
          <div className={style.singleField}>
            <TextField
              label="Vehicle registration number"
              value={registrationNumber}
              onChange={this.handleFieldChange}
              styles={textFieldStyles}
              name={TextFieldStates.registrationNumber}
            />
          </div>
        </div>
        <div className={style.singleField}>
          <PrimaryButton
            text="Search details"
            onClick={this.handleButtonClick}
            allowDisabledFocus
            disabled={false}
          />
        </div>
        <div className={style.recordDetails}>
          <p className={style.recordTittle}>
            Parking details will appear here.
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
export default VehicleStatus;
