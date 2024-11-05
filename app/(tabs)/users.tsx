import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface User {
    id: number,
    email: string,
    name: string
}

export default function UsersScreen() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function getUsers() {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:3000/users");
                const object = await response.json();

                console.log(object);
                setUsers(object);
            } catch (error) {
                console.log(error);
                alert("Um erro aconteceu ao recuperar os usuários!");
            } finally {
                setLoading(false);
            }
        }

        getUsers();
    }, [])

    return (
        <View style={styles.container}>
            {
                loading ? 
                    <ActivityIndicator /> : 
                    (users.map(user => <View key={user.id}><Text>{user.name}</Text><Text>{user.email}</Text></View>))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
