import React from "react";
import DashboardLeft from "./DashboardLeft";
import style from "./Dashboard.module.css";
import DashboardRight from "./DashboardRight";
import { ComponentTypes } from "./Dashboard.types";
class Dashboard extends React.Component {
  state = {
    currentComponent: ComponentTypes.ParkNewVehicle,
  };
  setCurrentComponent = (componentName: ComponentTypes): void => {
    if (this.state.currentComponent !== componentName) {
      this.setState({
        currentComponent: componentName,
      });
    }
  };
  render(): React.ReactNode {
    const { currentComponent } = this.state;
    return (
      <div className={style.container}>
        <DashboardLeft setCurrentComponent={this.setCurrentComponent} />
        <DashboardRight currentComponent={currentComponent} />
      </div>
    );
  }
}
export default Dashboard;
