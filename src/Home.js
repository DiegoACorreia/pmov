import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';


const Box = (props) => {
    return (
      <View style={styles.box}>
        <Image
          source={props.img}
          resizeMode='contain'
          style={{marginBottom: 15, borderRadius: 2, alignSelf: 'center'}}
        />
        <Text style={{marginLeft: 5 }}>{props.nome}</Text>
        <Text style={{marginLeft: 5 }}>Local: {props.local}</Text>
        <Text style={{marginLeft: 5 }}>Diária: R${props.diaria}</Text>
        <TouchableOpacity style={styles.button}
        onPress={() => 
          console.log("pressed")}>
          <Text style={{color: 'white', textAlign: 'center'}}>Reservar</Text>
        </TouchableOpacity>
      </View>
    );
}


export default function Home () {
  return (
    <><>
      <StatusBar
        hidden={true}/>
    </>
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 18}}>IFReservas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 18}}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    <ScrollView style={{backgroundColor: '#f0f0f1'}}>
      <Box img= {require('./assets/img1.jpg')} nome='Hotel Beach' local='Rio Branco, AC' diaria='367'/>
      <Box img= {require('./assets/img2.jpg')} nome='Laguna Hotel' local='São Paulo, SP' diaria='345'/>
      <Box img= {require('./assets/img3.jpeg')} nome='Space Hotel' local='Maceió, AL' diaria='134'/>
      <Box img= {require('./assets/img4.jpeg')} nome='Foca Hotel' local='Goiânia, GO' diaria='345'/>
      <Box img= {require('./assets/img5.jpeg')} nome='Aesthetics Hotel' local='Curitiba, PA' diaria='678'/>
      <Box img= {require('./assets/img6.jpg')} nome='Sol e mar Hotel' local='Rio de Janeiro, RJ' diaria='457'/>
    </ScrollView></>
  );
}

const styles = StyleSheet.create({
  header: {
   flexDirection: 'row',
   backgroundColor: 'black' ,
   alignItems: 'center',
   height: 80,
   justifyContent: 'space-between',
   paddingRight: 10,
   paddingLeft: 10,
  },
  box: {
    borderRadius: 2,
    padding: 10,
    height: 350,
    backgroundColor: 'white',
    marginHorizontal: 18,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginTop: 12,
    borderRadius: 40,
    backgroundColor: '#24ca1f',
    padding: 15,
    width: 150,
    alignSelf: 'center',
  }
});

