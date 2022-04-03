import React from "react";
import style from "./Dashboard.module.css";
import {
  ComponentTypes,
  IDashboardRightProps,
  IDashboardRightState,
} from "./Dashboard.types";
import ParkVehicle from "./ParkVehicle";
class DashboardRight extends React.Component<
  IDashboardRightProps,
  IDashboardRightState
> {
  state = {};
  getSelectedComponent = (): JSX.Element => {
    const component = this.props.currentComponent;
    switch (component) {
      case ComponentTypes.ParkNewVehicle:
        return <ParkVehicle />;
      case ComponentTypes.CheckVehicleStatus:
        return <div>Vehicle status</div>;
      case ComponentTypes.ReleaseVehicle:
        return <div>Release Vehicle</div>;
      case ComponentTypes.AccountSetting:
        return <div>Account setting</div>;
      case ComponentTypes.PayUserBill:
        return <div>Pay user bill</div>;
      case ComponentTypes.ServiceAreas:
        return <div>Service Areas</div>;
      case ComponentTypes.ParkingMap:
        return <div>Parking map</div>;
      default:
        return <></>;
    }
  };
  render(): React.ReactNode {
    return <div className={style.right}>{this.getSelectedComponent()}</div>;
  }
}
export default DashboardRight;
