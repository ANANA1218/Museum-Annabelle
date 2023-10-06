import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import db from '../../../config';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'react-router-dom';
import './GetAllpeinture.css'; // Import du fichier CSS
import { Button } from 'react-native';


const GetAllpeinture = () => {
    const [oeuvres, setOeuvres] = useState([]);
    const navigation = useNavigation(); // Initialisez la navigation


    useEffect(() => {
        const fetchOeuvres = async () => {
            const oeuvresCollection = collection(db, "oeuvres");
            const snapshot = await getDocs(oeuvresCollection);

            const oeuvresData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOeuvres(oeuvresData);
        }

        fetchOeuvres();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "oeuvres", id));
        setOeuvres(prevState => prevState.filter(oeuvre => oeuvre.id !== id));
    }

    const handleEdit = async (id, field, value) => {
        const oeuvreRef = doc(db, "oeuvres", id);
        await updateDoc(oeuvreRef, { [field]: value });
        setOeuvres(prevState => prevState.map(oeuvre => oeuvre.id === id ? { ...oeuvre, [field]: value } : oeuvre));
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
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Auteur</th>
                        <th>Date de création</th>
                        <th>User ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {oeuvres.map(oeuvre => (
                        <tr key={oeuvre.id}>
                            <td>{oeuvre.id}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'nom', e.target.textContent)}>{oeuvre.nom}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'description', e.target.textContent)}>{oeuvre.description}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'image', e.target.textContent)}>{oeuvre.image}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'auteur', e.target.textContent)}>{oeuvre.auteur}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'date_creation', e.target.textContent)}>{oeuvre.dateCreation}</td>
                            <td contentEditable onBlur={(e) => handleEdit(oeuvre.id, 'user_id', e.target.textContent)}>{oeuvre.userId}</td>
                            <td><button onClick={() => handleDelete(oeuvre.id)}>Supprimer</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetAllpeinture;
