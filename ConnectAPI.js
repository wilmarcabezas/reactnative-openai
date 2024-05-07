import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';

function ConnectAPI(props) {
    const [message, setMessage] = useState('');
    //const message="Escribe el pais mas poblado del Mundo,  solo usa cinco letras";

    useEffect(() => {
        fetch('https://api.openai.com/v1/chat/completions',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer sk-AQUI VA TU API!!!"
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content":"SOlo escribe la respuesta a la pregunta:"+props.message }],
                "temperature": 0,
                "max_tokens":50,
            })
        })
        .then(response => response.json())
        .then(data=>{
            setMessage(data.choices[0].message.content)
        })
    }, [props.message]);
    

    return (
        <View>
            <Text>{message}</Text>
        </View>
    )

// Ejemplo de OpenAI para conectarnos.
//   curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//      "model": "gpt-3.5-turbo",
//      "messages": [{"role": "user", "content": "Say this is a test!"}],
//      "temperature": 0.7
//    }'
//    Bearer Token: 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 
}

export default ConnectAPI;