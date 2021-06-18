import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {Home} from "../screens/Home";
import {CarDetalis} from "../screens/CarDetalis";
import {Scheduling} from "../screens/Scheduling";
import {SchedulingDetalis} from "../screens/SchedulingDetalis";
import {SchedulingComplete} from "../screens/SchedulingComplete";
import {MyCars} from "../screens/MyCars";
import {Splash} from "../screens/Splash";

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="CarDetalis" component={CarDetalis} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetalis" component={SchedulingDetalis} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />

      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
