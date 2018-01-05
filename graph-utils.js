import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryStack, VictoryTheme } from "victory-native";

const delitos2016 = [
  {crimen: 'robo', cantidad: 345},
  {crimen: 'asalto', cantidad: 500},
  {crimen: 'hurto', cantidad: 225},
  {crimen: 'tacha de auto', cantidad: 50},
  {crimen: 'homicidio', cantidad: 300},
  {crimen: 'robo vehiculo', cantidad: 30}
]

const delitos2017 = [
  {crimen: 'robo', cantidad: 225},
  {crimen: 'asalto', cantidad: 437},
  {crimen: 'hurto', cantidad: 117},
  {crimen: 'tacha de auto', cantidad: 35},
  {crimen: 'homicidio', cantidad: 87},
  {crimen: 'robo vehiculo', cantidad: 10}
]

export default class LineGraph extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Prueba Gráfico Delitos</Text>

        //Inicio de la linea del gráfico
        //VictoryChart es para la grilla del gráfico
        <VictoryChart
        domainPadding = {0}
        theme = {VictoryTheme.material} >

        //Eje x
        <VictoryAxis
        tickValues= {[1,2,3,4,5,6]}
        tickFormat = {['Robo', 'Asalto', 'Hurto', 'Homicidio','Tacha\nAutos','Robo de\nVehículo']}
        />

        //Eje y
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x / 1000}`)}
        />

        //Stack en donde se colocan datos de dos años distintos
        //cada uno en un VictoryLine separado
        <VictoryStack
          style = {{
            data: {width: 15, stroke: "white", strokeWidth: 2}
          }}
            colorScale= {['red', 'blue']}>
          <VictoryLine
            data={delitos2016}
            x="crimen"
            y="cantidad"
            />
            <VictoryLine
              data={delitos2017}
              x="crimen"
              y="cantidad"
              />
          </VictoryStack>
        </VictoryChart>
      </View>

      <Text style={styles.title}>Geografía</Text>
      <Text style={styles.text}>
        <ol>
          <li>San José - 36/100 mil</li>
          <li>Limón - 20/100 mil</li>
          <li>Alajuela - 12/100 mil</li>
        </ol>
      </Text>
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
     justifyContent: 'left',
     fontSize: 18
   },
   text: {
     justifyContent: 'left',
     fontSize: 12
   },
});
