import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import * as Contacts from "expo-contacts";
import styles from "../styles";

export default function ContactsFirstName() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão negada", "Não é possível acessar os contatos.");
        setLoading(false);
        return;
      }

      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers]
      });

      if (data && data.length > 0) {
        // usar firstName se disponível, senão separar o nome completo
        const mapped = data.map((c) => {
          const first = (c.firstName && c.firstName.length > 0)
            ? c.firstName
            : (c.name ? c.name.split(" ")[0] : "");
          return { id: c.id, firstName: first, phoneNumbers: c.phoneNumbers || [] };
        });
        setContacts(mapped);
      }

      setLoading(false);
    })();
  }, []);

  if (loading) return <View style={styles.container}><Text>Carregando...</Text></View>;

  if (contacts.length === 0) return <View style={styles.container}><Text>Nenhum contato encontrado.</Text></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.firstName}</Text>
            {item.phoneNumbers?.map((p, i) => (
              <Text key={i} style={styles.number}>{p.number}</Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}
