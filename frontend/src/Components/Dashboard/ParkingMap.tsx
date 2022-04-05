import React from "react";
import style from "./Dashboard.module.css";

import bike1 from "../../images/bike1.png";
// import parking from "../../images/parking.png";
import car from "../../images/Tuning-Car-PNG-Photo.png";
import suv from "../../images/suv.png";
import bus from "../../images/bus.png";
import truck from "../../images/truck.png";
import pickUpTruck from "../../images/pickUpTruck.png";
import {
  IParkingArea,
  IParkingData,
  IParkingSlot,
  ParkingCity,
  Status,
  VehicleClass,
} from "./Dashboard.types";

class ParkingMap extends React.Component {
  getParkingMap = () => {
    return sampleParkingData.parkingData.map((item: ParkingCity) => {
      return (
        <>
          <h4 className={style.cityNameH4}>{item.city}</h4>
          <div className={style.cityContainer}>
            {item.areaList.map((parkingArea: IParkingArea) => {
              return (
                <>
                  <h5 className={style.areaNameH5}>{parkingArea.areaName}</h5>
                  <div className={style.mainMapContent}>
                    {parkingArea.parkingList.map(
                      (parkingItem: IParkingSlot) => {
                        return (
                          <div className={style.singleParking}>
                            <div className={style.parkingImage}>
                              {parkingItem.vehicleClass ===
                                VehicleClass.Bike && (
                                <img src={bike1} alt="bike" />
                              )}
                              {parkingItem.vehicleClass ===
                                VehicleClass.Car && <img src={car} alt="car" />}
                              {parkingItem.vehicleClass ===
                                VehicleClass.SUV && <img src={suv} alt="suv" />}
                              {parkingItem.vehicleClass ===
                                VehicleClass.Bus && <img src={bus} alt="bus" />}
                              {parkingItem.vehicleClass ===
                                VehicleClass.Truck && (
                                <img src={truck} alt="truck" />
                              )}
                              {parkingItem.vehicleClass ===
                                VehicleClass.PickupTruck && (
                                <img src={pickUpTruck} alt="pick up truck" />
                              )}
                              {parkingItem.vehicleClass ===
                                VehicleClass.Bike && (
                                <img src={bike1} alt="bike" />
                              )}
                            </div>
                            <p>{parkingItem.registrationNumber}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </>
              );
            })}
          </div>
          <hr />
        </>
      );
    });
  };
  render(): React.ReactNode {
    return (
      <div className={style.mapContainer}>
        <h3>Map</h3>
        <hr />
        <div className={style.mapListTopContainer}>
          {this.getParkingMap()}
          {/* <h4>Jalandhar</h4>
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
            </div>
          </div> */}
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
      city: "Jalandhar",
      areaList: [
        {
          areaName: "LPU Law Gate",
          parkingList: [
            {
              index: 0,
              vehicleClass: VehicleClass.SUV,
              registrationNumber: "123-ABC-AHG",
            },
            {
              index: 1,
              vehicleClass: VehicleClass.Car,
              registrationNumber: "JH-ABC-AHG",
            },
            {
              index: 2,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 3,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 4,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 5,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 6,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 7,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 8,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 9,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 10,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 11,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
          ],
        },
        {
          areaName: "LPU Gate",
          parkingList: [
            {
              index: 0,
              vehicleClass: VehicleClass.SUV,
              registrationNumber: "123-ABC-AHG",
            },
            {
              index: 1,
              vehicleClass: VehicleClass.Car,
              registrationNumber: "JH-ABC-AHG",
            },
            {
              index: 2,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 3,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 4,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 5,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 6,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 7,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 8,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 9,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 10,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 11,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
          ],
        },
      ],
    },
    {
      city: "Ranchi",
      areaList: [
        {
          areaName: "Bus stand parking place",
          parkingList: [
            {
              index: 0,
              vehicleClass: VehicleClass.SUV,
              registrationNumber: "123-ABC-AHG",
            },
            {
              index: 1,
              vehicleClass: VehicleClass.Car,
              registrationNumber: "JH-ABC-AHG",
            },
            {
              index: 2,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 3,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 4,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 5,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 6,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 7,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 8,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 9,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 10,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
            {
              index: 11,
              vehicleClass: VehicleClass.None,
              registrationNumber: "Free Slot",
            },
          ],
        },
      ],
    },
  ],
};
