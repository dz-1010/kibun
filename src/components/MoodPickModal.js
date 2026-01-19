import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

const MOODS = ['😆', '😭', '😡', '🫩', '😌'];

export default function MoodPickModal({ visible, date, onClose, onSelectMood }) {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{date}</Text>
                    <Text style={styles.modalSubTitle}>어떤 기분이었나요?</Text>
                    <View style={styles.moodPicker}>
                        {MOODS.map((m) => (
                        <TouchableOpacity key={m} onPress={() => onSelectMood(m)}>
                            <Text style={styles.moodOption}>{m}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        padding: 30,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 25,
        alignItems: 'center',
        elevation: 10,
    },
    modalTitle: {
        fontSize: 14,
        color: '#999',
        marginBottom: 5,
    },
    modalSubTitle: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginBottom: 25,
    },
    moodPicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    moodOption: {
        fontSize: 40
    }
})