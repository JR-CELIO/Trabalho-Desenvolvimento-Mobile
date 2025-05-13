import { SafeAreaView, Text, StyleSheet } from "react-native";
import { auth, signOut, db } from '../firebase';
import { DangerButton, PrimaryButton } from "../components/Buttons";
import { CustomTextInput } from "../components/CustomInputs";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function HomeScreen () {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return unsubscribe;
    }, []);

    const logout = async () => {
        await signOut(auth);
    }

    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    // const loadRecords = async () => {
    //     const snapshot = await getDocs(
    //         query(
    //             collection(db, 'records'),
    //             where('user_id', '==', user.uid)
    //         )
    //     );
    //     const records = snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data()
    //     }));

    //     setList(records);

    //     console.log(records);
    // }

    const loadRecords = async () => {
  try {
    console.log("Current user UID:", user.uid); // Check if user.uid is correct
    
    const q = query(
      collection(db, 'records'),
      where('user_id', '==', user.uid)
    );
    const snapshot = await getDocs(q);
    
    console.log("Firestore query results:", snapshot.docs); // Log raw docs
    
    const records = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log("Mapped records:", records); // Check final data
    setList(records);
  } catch (error) {
    console.error("Firestore error:", error);
  }
};

    useEffect(() => {
        if (!user) {
            return;
        }
        loadRecords();
    }, [user]);

    // const add = async () => {
    //     console.log(user.uid);

    //     if (!text) {
    //         console.log('preencha o campo.');
    //         return;
    //     }

    //     await addDoc(collection(db, 'records'), {
    //         text: text,
    //         user_id: user.uid
    //     });

    //     loadRecords();

    //     setText('');
    // }

    const add = async () => {
  try {
    if (!text) {
      alert("Please enter text");
      return;
    }
    await addDoc(collection(db, 'records'), {
      text: text,
      user_id: user.uid
    });
    await loadRecords(); // Wait for reload
    setText("");
  } catch (error) {
    console.error("Error adding document:", error);
    alert("Failed to save. Check console.");
  }
};
 
    return (
        <SafeAreaView style={{ margin: 20 }}>
            <Text style={styles.title} >TO DO LIST</Text>
            <DangerButton text={'Desconectar'} action={logout} />

            <CustomTextInput placeholder={'Digite o texto...'} value={text} setValue={setText} />

            <PrimaryButton text="Adicionar Registro" action={() => {
                add();
            }} />

            {list.map((item) => (
                <Text key={item.id}>{item.text}</Text>
            ))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        margin: 40
    },
    logoutButton: {
        backgroundColor: 'red',
        padding: 15,
        margin: 30,
        borderRadius: 15
    },
    logoutButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})