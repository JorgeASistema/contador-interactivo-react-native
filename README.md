# Contador Interactivo
Estructura simple. Dos botones, un texto. Botón verde para incrementar el valor mostrado en el texto. Rojo para decrementar el mismo valor, si el valor es menor o igual a 0 ya no puede decrementar, por lo que lanzará una alerta al navegador.

## Prerrequisitos
Asegurese de tener instalado en su sistema:
* Node.js en su versión más reciente.

### Instalación
Abra su terminal y navegue a la carpeta destino donde querrá ubicar el proyecto.
```bash
cd ejemplo/carpeta_destino/
```
Clone el repositorio en la carpeta destino y navegue al interior de la misma.
```
git clone [https://github.com/JorgeASistema/contador-interactivo-react-native.git](https://github.com/JorgeASistema/contador-interactivo-react-native.git)
cd contador-interactivo-react-native
```
Instalar dependencias del proryecto
```
npm install
```
Instalar herramientas para soporte web
```
npx expo install react-native-web react-dom @expo/metro-runtime
```
Iniciar el proyecto y ver en navegador
```
npx expo start --web
```
