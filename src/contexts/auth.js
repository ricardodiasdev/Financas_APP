import React, { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //Logar usuário
  async function signIn(email, password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        alert(error.code);
      });
  }
  //Cadastrar usuário
  async function signUp(nome, email, password) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            saldo: 0,
            nome: nome,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          })
          .catch((error) => {
            alert(error.code);
          });
      });
  }
  //Armazenar dados no celular
  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  //Verificar se tem usuário cadastrado
  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");
      storageUser && setUser(JSON.parse(storageUser));
      storageUser && setLoading(false);
    }
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
