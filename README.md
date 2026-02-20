# Netflix Support Chatbot 🤖🎬

Este proyecto es un chatbot de soporte para Netflix llamado "R2D2", desarrollado con Node.js, Express y la API de Google Gemini. El chatbot está diseñado para responder preguntas sobre contenido de Netflix, resolver dudas de cuenta y recomendar películas y series.
<img width="1909" height="859" alt="image" src="https://github.com/user-attachments/assets/62213b04-a8f3-4034-8507-54aae407d754" />


## 🚀 Características

- **Asistente virtual de Netflix**: Chatbot que simula ser el asistente oficial de Netflix
- **Recomendaciones personalizadas**: Sugiere contenido basado en género, estado de ánimo y preferencias
- **Soporte técnico básico**: Ayuda con problemas comunes de cuenta
- **Interfaz moderna**: Diseño estilo Netflix con modo oscuro y animaciones
- **Historial de conversación**: Mantiene el contexto de la conversación

## 🛠️ Tecnologías

- **Backend**: Node.js + Express
- **IA**: Google Gemini API (@google/generative-ai)
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Otros**: CORS, dotenv

## 📋 Requisitos

- Node.js (v14 o superior)
- Cuenta de Google Cloud con API de Gemini habilitada
- Clave API de Google Gemini

## ⚙️ Instalación

1. Clona el repositorio:
```
bash
git clone <url-del-repositorio>
cd proyecto8
```

2. Instala las dependencias:
```
bash
npm install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu clave API de Google Gemini:
```
env
apiKey=TU_CLAVE_API_AQUI
modelName=gemini-1.5-flash
```

4. Inicia el servidor:
```
bash
node ejemplo8.js
```

5. Abre el chat en tu navegador:
   - Navega a `http://localhost:3000/ejemplo8.html`

## 📁 Estructura del Proyecto

```
proyecto8/
├── ejemplo8.js          # Servidor Express con la lógica del chatbot
├── ejemplo8.html        # Interfaz del chat (Frontend)
├── config.js            # Configuración (archivo de entorno)
├── package.json         # Dependencias del proyecto
└── README.md           # Este archivo
```

## 🎮 Cómo Usar

1. Abre `ejemplo8.html` en tu navegador
2. Escribe tu mensaje en el campo de texto
3. Presiona Enter o haz clic en el botón de enviar
4. ¡El chatbot te responderá!

   <img width="1890" height="859" alt="image" src="https://github.com/user-attachments/assets/fd8734c8-050a-4a57-a5b4-52047ccd3213" />


### Ejemplos de preguntas:
- "¿Qué me recomiendas ver?"
- "¿Cómo puedo cancelar mi suscripción?"
- "¿Qué series de terror tienen?"
- "Estoy aburrido, ¿qué veo?"

## 📝 Configuración del Bot

El chatbot está configurado con instrucciones específicas en `ejemplo8.js`:

- **Rol**: Asistente de Netflix llamado "R2D2"
- **Tono**: Entusiasta, cercano y cinéfilo
- **Regla especial**: No menciona plataformas competidoras (Disney+, HBO, etc.)
- **Estrategia**: Redirige preguntas de competencia hacia alternativas en Netflix

## 🔧 Personalización

### Cambiar el modelo de Gemini
Edita `config.js`:
```
javascript
modelName: "gemini-1.5-pro" // o el modelo que prefieras
```

### Modificar las instrucciones del bot
Edita el `systemInstruction` en `ejemplo8.js` para cambiar la personalidad o comportamiento del chatbot.

## ⚠️ Notas

- El servidor debe estar ejecutándose en el puerto 3000
- La API de Google Gemini tiene límites de uso gratuitos
- Asegúrate de tener una clave API válida

## 📄 Licencia

ISC

---

¡Disfruta de tu asistente de Netflix! 🍿📺
