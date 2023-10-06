import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import db from '../../../config';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'react-router-dom';
import './GetAllUsers.css'; // Import du fichier CSS
import { Button } from 'react-native';


const GetAllUsers = () => {
    const [Users, setUsers] = useState([]);
    const navigation = useNavigation(); // Initialisez la navigation


    useEffect(() => {
        const fetchOeuvres = async () => {
            const oeuvresCollection = collection(db, "Users");
            const snapshot = await getDocs(oeuvresCollection);

            const oeuvresData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(oeuvresData);
        }

        fetchOeuvres();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Users", id));
        setUsers(prevState => prevState.filter(oeuvre => oeuvre.id !== id));
    }

    const handleEdit = async (id, field, value) => {
        const oeuvreRef = doc(db, "Users", id);
        await updateDoc(oeuvreRef, { [field]: value });
        setUsers(prevState => prevState.map(oeuvre => oeuvre.id === id ? { ...oeuvre, [field]: value } : oeuvre));
    }

    return (
        <div className="art-exhibition"> {/* Ajout de la classe pour le CSS */}
           <Button
                title="Aller à l'autre page"
                onPress={() => navigation.navigate('OtherPage')} // Utilisez navigation.navigate
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Oeuvre</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map(oeuvre => (
                        <tr key={oeuvre.id}>
                            <td>{oeuvre.id}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'email', e.target.textContent)}>{oeuvre.email}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'role', e.target.textContent)}>{oeuvre.role}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'oeuvre', e.target.textContent)}>{oeuvre.role}</td>
                            <td><button onClick={() => handleDelete(oeuvre.id)}>Supprimer</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetAllUsers;
