import { StyleSheet ,Image} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View  } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: 'https://media.infocielo.com/p/22d6812d3c6755e849b9709d2685e7f4/adjuntos/299/imagenes/001/909/0001909307/1200x675/smart/generacion-dorada-1024x717jpg.jpg',
          }}
          style={styles.imagen}
        />
      <Text style={styles.title}>Generacion Dorada</Text>
      <Text style={styles.descripcion}>La Generación Dorada fue una camada de basquetbolistas argentinos que en el lapso de más de 15 años consiguieron para la Selección de básquetbol de Argentina gran cantidad de medallas de oro, plata y bronce en todos los torneos de mayor relevancia organizados por la FIBA: Juegos Olímpicos, Mundial, FIBA Diamond Ball y Campeonato FIBA Américas. Para muchos se trató de los "mejores equipos de la historia del deporte argentino ".

      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black",
  },
  title: {
    color:"white",
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagen:{
    width: 300, 
    height: 300,
    borderRadius:30,
  },
  descripcion:{
    fontSize: 15,
    color:"white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
