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
    const { setCurrentComponent } = this.props;
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
            className={style.leftNavItem}
            onClick={() => {
              setCurrentComponent(ComponentTypes.ParkNewVehicle);
            }}
          >
            Park a new vehicle
          </div>
          <div
            className={style.leftNavItem}
            onClick={() => {
              setCurrentComponent(ComponentTypes.CheckVehicleStatus);
            }}
          >
            Check vehicle status
          </div>
          <div
            className={style.leftNavItem}
            onClick={() => {
              setCurrentComponent(ComponentTypes.ReleaseVehicle);
            }}
          >
            Release a vehicle
          </div>
          <div
            className={style.leftNavItem}
            onClick={() => {
              setCurrentComponent(ComponentTypes.AccountSetting);
            }}
          >
            Account Setting
          </div>
          <div
            className={style.leftNavItem}
            onClick={() => {
              setCurrentComponent(ComponentTypes.PayUserBill);
            }}
          >
            Pay a user bill
          </div>
          <div
            className={style.leftNavItem}
            onClick={() => {
              setCurrentComponent(ComponentTypes.ServiceAreas);
            }}
          >
            Service Areas
          </div>
          <div
            className={style.leftNavItem}
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
