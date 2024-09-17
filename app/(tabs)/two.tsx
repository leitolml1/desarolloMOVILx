import { StyleSheet, Image, ScrollView, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>Galería</Text>
      <View style={styles.container}>
        <View style={styles.div}>
          <Image
            source={{
              uri: 'https://www.unocontraunoweb.com/wp-content/uploads/2020/07/182813_chapu_1-e1595275097984.jpg',
            }}
            style={styles.imagen}
          />
          <Text style={styles.descripcion}>Andrés Nocioni</Text>
        </View>

        <View style={styles.div}>
          <Image
            source={{
              uri: 'https://resizer.glanacion.com/resizer/v2/carlos-delfino-el-ultimo-vestigio-activo-de-la-XH5HRRVZOFGJLOK7GFZTX2BSCA.jpg?auth=403a06f69bf8cfe68237af4aac9730053ad72f5b5b1a31a9f1a200b192a428ee&width=880&height=586&quality=70&smart=true',
            }}
            style={styles.imagen}
          />
          <Text style={styles.descripcion}>Carlos Delfino</Text>
        </View>

        <View style={styles.div}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fabri_Oberto.jpg/330px-Fabri_Oberto.jpg',
            }}
            style={styles.imagen}
          />
          <Text style={styles.descripcion}>Fabricio Oberto</Text>
        </View>

        <View style={styles.div}>
          <Image
            source={{
              uri: 'https://cafexmedio.com.ar/cmwpbw/wp-content/uploads/2024/08/ginobilipalomita.jpg',
            }}
            style={styles.imagen}
          />
          <Text style={styles.descripcion}>Emanuel Ginobili</Text>
        </View>

        <View style={styles.div}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQqYir8OaXRkGHzV3Vcbke2zbvuYgU6P7WQ&s',
            }}
            style={styles.imagen}
          />
          <Text style={styles.descripcion}>Luis Scola</Text>
        </View>

        <View style={styles.div}>
          <Image
            source={{
              uri: 'https://canalshowsport.com.ar/wp-content/uploads/2024/06/magnanooooo.jpg',
            }}
            style={styles.imagen}
          />
          <Text style={styles.descripcion}>Rubén Magnano</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  div: {
    width: '50%',
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  imagen: {
    width: '100%', 
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  descripcion: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#00000080',
    padding: 5,
    borderRadius: 5,
  },
});
