import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@kibun_data';

export const loadDiaries = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch (e) {
        console.log("데이터 로드 오류", e);
        return {};
    }
}

export const saveDiaryEntry = async (diaries, date, mood) => {
    try {
        const newDiaries = { ...diaries, [date]: mood};
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newDiaries));
        return newDiaries;
    } catch (e) {
        console.log("저장 오류", e);
        return diaries;
    }
}