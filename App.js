import { Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.contenedor}>
      {/* Boton para decrementar el contador, con una alerta si el contador es menor o igual a cero. */}
      <Pressable
        onPress={() => {
          if (contador <= 0) {
            alert("El contador no puede ser menor a cero.");
          } else {
            setContador(contador - 1);
          }
        }}
        style={styles.presionableDecrementar}  
      >
        <Text style={styles.textoBoton}>Decrementar</Text>
      </Pressable>
      {/* Texto que muestra el valor del contador. */}
      <Text style={styles.textoContador}>{contador}</Text>
      {/* Boton para incrementar el contador. */}
      <Pressable
        onPress={() => {
          setContador(contador + 1);
        }}
        style={styles.presionableAumentar}
      >
        <Text style={styles.textoBoton}>Incrementar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
    presionableAumentar: {
      backgroundColor: "#4CAF50",
      padding: 5,
      borderRadius: 5,
      paddingVertical: 20,
    },
    presionableDecrementar: {
      backgroundColor: "#f44336",
      padding: 5,
      borderRadius: 5,
      paddingVertical: 20,
    },
  textoBoton: {
    fontSize: 20,
    fontWeight: "semibold",
    userSelect: "none"
  },
  textoContador: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 20
  }
});