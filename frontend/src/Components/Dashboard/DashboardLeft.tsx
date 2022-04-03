import React from "react";
import {
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";
import person from "../../images/person.png";

import style from "./Dashboard.module.css";
import {
  ComponentTypes,
  IDashboardLeftProps,
  IDashboardLeftState,
} from "./Dashboard.types";
import classNames from "classnames";
class DashboardLeft extends React.Component<
  IDashboardLeftProps,
  IDashboardLeftState
> {
  render(): React.ReactNode {
    const personaDetails: IPersonaSharedProps = {
      imageUrl: person,
      imageInitials: "PT",
      text: "Pratik Tiwari",
      secondaryText: "Admin",
      tertiaryText: "Available",
      optionalText: "Available",
      showSecondaryText: true,
    };
    const { setCurrentComponent, currentComponent } = this.props;
    return (
      <div className={style.left}>
        <div className={style.personaContainer}>
          <Persona
            {...personaDetails}
            size={PersonaSize.size32}
            presence={PersonaPresence.online}
            imageAlt="Admin"
            style={{ color: "#fff" }}
          />
        </div>
        <div>
          <div className={style.mainNavigationIndicator}>Main Navigation</div>
          <div
            className={classNames(
              style.leftNavItem,
              currentComponent === ComponentTypes.ParkNewVehicle
                ? style.activeNavItem
                : ""
            )}
            onClick={() => {
              setCurrentComponent(ComponentTypes.ParkNewVehicle);
            }}
          >
            Park a new vehicle
          </div>
          <div
            className={classNames(
              style.leftNavItem,
              currentComponent === ComponentTypes.CheckVehicleStatus
                ? style.activeNavItem
                : ""
            )}
            onClick={() => {
              setCurrentComponent(ComponentTypes.CheckVehicleStatus);
            }}
          >
            Check vehicle status
          </div>
          <div
            className={classNames(
              style.leftNavItem,
              currentComponent === ComponentTypes.ReleaseVehicle
                ? style.activeNavItem
                : ""
            )}
            onClick={() => {
              setCurrentComponent(ComponentTypes.ReleaseVehicle);
            }}
          >
            Release a vehicle
          </div>
          <div
            className={classNames(
              style.leftNavItem,
              currentComponent === ComponentTypes.AccountSetting
                ? style.activeNavItem
                : ""
            )}
            onClick={() => {
              setCurrentComponent(ComponentTypes.AccountSetting);
            }}
          >
            Account Setting
          </div>
          <div
            className={classNames(
              style.leftNavItem,
              currentComponent === ComponentTypes.PayUserBill
                ? style.activeNavItem
                : ""
            )}
            onClick={() => {
              setCurrentComponent(ComponentTypes.PayUserBill);
            }}
          >
            Pay a user bill
          </div>
          <div
            className={classNames(
              style.leftNavItem,
              currentComponent === ComponentTypes.ServiceAreas
                ? style.activeNavItem
                : ""
            )}
            onClick={() => {
              setCurrentComponent(ComponentTypes.ServiceAreas);
            }}
          >
            Service Areas
          </div>
          <div
            className={classNames(
              style.leftNavItem,
              currentComponent === ComponentTypes.ParkingMap
                ? style.activeNavItem
                : ""
            )}
            onClick={() => {
              setCurrentComponent(ComponentTypes.ParkingMap);
            }}
          >
            Parking Map
          </div>
        </div>
        <div className={style.leftNavFooter}>Logout</div>
      </div>
    );
  }
}
export default DashboardLeft;
