import { useState, useEffect } from 'react';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';


export function Home() {
    const [newSkill, setNewSkill] = useState<string>('');
    const [mySkills, setMySkills] = useState<string[]>(['ReactJS', 'NodeJS', 'React Native']);
    const [gretting, setGretting] = useState<string>('');

    function handleAddNewSkill() {
        setMySkills(oldSkills => [...oldSkills, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGretting('Good Morning');
        }
        else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good Afternoon');
        } else {
            setGretting('Good Nigth');
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Yudi D.
            </Text>

            <Text style={styles.greetings}>
                { gretting }
            </Text>

            <TextInput 
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill}/>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30
    },
    greetings: {
        color: '#fff'
    }
})