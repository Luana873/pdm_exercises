import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import * as Contacts from "expo-contacts";
import styles from "../styles";

type ContactItem = Contacts.Contact & { id: string };

export default function ContactsC() {
  const [contacts, setContacts] = useState<ContactItem[]>([]);
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
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.FirstName]
      });

      if (data && data.length > 0) {
        // filtrar nomes que começam com 'C' (case-insensitive)
        const filtered = data.filter((c) => {
          const name = (c.name || "").trim();
          return name.length > 0 && name[0].toLowerCase() === "c";
        });
        setContacts(filtered as ContactItem[]);
      }

      setLoading(false);
    })();
  }, []);

  if (loading) return <View style={styles.container}><Text>Carregando...</Text></View>;

  if (contacts.length === 0) return <View style={styles.container}><Text>Nenhum contato iniciado com 'C'.</Text></View>;

  return (
