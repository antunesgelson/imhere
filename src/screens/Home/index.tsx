import { Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant/index';
import { useState } from 'react';



export default function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setparticipantName] = useState('')




    function handleeParticipantAdd(name: string) {

        if (participants.includes(participantName)) {
            return Alert.alert("Participante Existe", "Esse participante já está na lista.")
        }

        setParticipants(prevState => [...prevState, participantName])
        setparticipantName('')
    }




    function handleeParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name))
                }

            }

        ])
    }


    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nenhum evento hoje.</Text>
            <Text style={styles.eventDate}>
                Sexta, 10 de maio de 2024
            </Text>



            <View style={styles.form}>
                <TextInput
                    value={participantName}
                    onChangeText={setparticipantName}
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={'gray'}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleeParticipantAdd(participantName)}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>



            {/* Renderiza somente os itens visíveis na tela e adiciona scroll
                    Listagem GRANDE de items
            */}
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleeParticipantRemove(item)}
                    />

                )}

                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evendo ainda ? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />



            {/* 
            
            Adiciona Scroll quando a lista é maior que a tela porém renderiza TODA A LISTA independente se está visível ou não
                    Listagem Pequena de items

            <ScrollView>
                {participants.map(participant => (
                    <Participant
                        key={participant}
                        name={participant}
                        onRemove={() => handleeParticipantRemove(participant)}
                    />
                ))}
            </ScrollView>
            
            
            */}



        </View>

    )
}