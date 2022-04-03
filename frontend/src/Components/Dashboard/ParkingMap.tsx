import React from "react";
import style from "./Dashboard.module.css";

import bike1 from "../../images/bike1.png";
import parking from "../../images/parking.png";
import car from "../../images/Tuning-Car-PNG-Photo.png";
import suv from "../../images/suv.png";
import bus from "../../images/bus.png";
import truck from "../../images/truck.png";
import pickUpTruck from "../../images/pickUpTruck.png";
import {
  IParkingArea,
  IParkingData,
  IParkingSlot,
  Status,
  VehicleClass,
} from "./Dashboard.types";

class ParkingMap extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={style.mapContainer}>
        <h3>Map</h3>
        <div className={style.mapListTopContainer}>
          <h4>Jalandhar</h4>
          <div className={style.cityContainer}>
            <h5>LPU Law Gate</h5>
            <div className={style.mainMapContent}>
              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={bike1} alt="bike" />
                </div>
                <p>ABC-AB-123</p>
              </div>

              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={car} alt="car" />
                </div>
                <p>ABC-AB-123</p>
              </div>

              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={suv} alt="suv" />
                </div>
                <p>ABC-AB-123</p>
              </div>

              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>

              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={pickUpTruck} alt="pick up truck" />
                </div>
                <p>ABC-AB-123</p>
              </div>

              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={bus} alt="bus" />
                </div>
                <p>ABC-AB-123</p>
              </div>

              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={truck} alt="truck" />
                </div>
                <p>ABC-AB-123</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={pickUpTruck} alt="pick up truck" />
                </div>
                <p>ABC-AB-123</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={pickUpTruck} alt="pick up truck" />
                </div>
                <p>ABC-AB-123</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}>
                  <img src={pickUpTruck} alt="pick up truck" />
                </div>
                <p>ABC-AB-123</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>
              <div className={style.singleParking}>
                <div className={style.parkingImage}></div>
                <p>Free Slot</p>
              </div>

              {/* hello world */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ParkingMap;

// VehicleClass
const sampleParkingData: IParkingData = {
  status: Status.Completed,
  parkingData: [
    {
      Jalandhar: [
        {
          "LPU Law Gate": [
            {
              vehicleClass: VehicleClass.SUV,
              registrationNumber: "123-ABC-AHG",
            },
            {
              vehicleClass: VehicleClass.Car,
              registrationNumber: "JH-ABC-AHG",
            },
          ],
          "LPU Gate": [
            {
              vehicleClass: VehicleClass.Truck,
              registrationNumber: "123-ABC-AHG",
            },
          ],
        },
      ],
      Ranchi: [
        {
          "Bus stand parking place": [
            {
              vehicleClass: VehicleClass.SUV,
              registrationNumber: "123-ABC-AHG",
            },
          ],
        },
      ],
    },
  ],
};
// const parkingSlots:IParkingSlot[] = [
//   {
//     "vehicleClass": VehicleClass.SUV,
//     "registrationNumber": "123-ABC-AHG"
//   },
//   {
//     "vehicleClass": VehicleClass.Car,
//     "registrationNumber": "JH-ABC-AHG"
//   },
// ];
// const parkingAreas: IParkingArea[] = [
//   {"LPU Law Gate": parkingSlots},
//   {"LPU Mall": parkingSlots},
// ]
