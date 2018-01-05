import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryStack, VictoryTheme } from "victory-native";

const delitos2016 = [
  {crimen: 'enero', cantidad: 345},
  {crimen: 'febrero', cantidad: 500},
  {crimen: 'marzo', cantidad: 225},
  {crimen: 'abril', cantidad: 50},
  {crimen: 'mayo', cantidad: 300},
  {crimen: 'junio', cantidad: 110},
  {crimen: 'julio', cantidad: 211},
  {crimen: 'agosto', cantidad: 180},
  {crimen: 'setiembre', cantidad: 60},
  {crimen: 'octubre', cantidad: 11},
  {crimen: 'noviembre', cantidad: 1},
  {crimen: 'diciembre', cantidad: 96}
]

const delitos2017 = [
  {crimen: 'robo', cantidad: 225},
  {crimen: 'asalto', cantidad: 437},
  {crimen: 'hurto', cantidad: 117},
  {crimen: 'tacha de auto', cantidad: 35},
  {crimen: 'homicidio', cantidad: 87},
  {crimen: 'robo vehiculo', cantidad: 10}
]

const mockingDelitos = [
  {title: 'Robo', subtitle: '4'},
  {title: 'Robo', subtitle: '5'},
  {title: 'Robo', subtitle: '4'},
  {title: 'Robo', subtitle: '7'},
  {title: 'Robo', subtitle: '9'}
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Prueba Gráfico Delitos</Text>

        <VictoryChart
        domainPadding = {40}
        padding={{ top: 20, bottom: 100, left: 20, right: 20 }}
        theme = {VictoryTheme.material} >

        
        <VictoryAxis
        tickValues= {[1,2,3,4,5,6,7,8,9,10,11,12]}
        tickFormat = {['Ene ', 'Feb ', 'Mar', 'Abr','May','Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic']}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x / 100}`)}
        />

        <VictoryStack
          style = {{
            data: {width: 15, stroke: "white", strokeWidth: 2}
          }}
            colorScale= {['red']}>
          <VictoryLine
            data={delitos2016}
            x="crimen"
            y="cantidad"
            labels = {(datum) => datum.y}
            //height= {200}
            //width = {100}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            />

          </VictoryStack>
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   title: {
     fontSize: 18,
     textAlign: 'left'
   },
   text: {
     fontSize: 12,
     textAlign: 'left'
   },
});
