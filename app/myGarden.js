import React, { useContext, useEffect, useState } from 'react';
import { Text } from "../theme/text";
import { DataContext } from "../utils/context/dataContext";
import { SafeAreaWrapperFullWidth } from "../components/safeAreaWrapper";
import { TouchableOpacity, View } from "react-native";
import { gardenType } from "../utils/constants/constants";
import { router } from "expo-router";

export default MyGarden = () => {

    const { user, userGardens } = useContext(DataContext);
    const [data, setData] = useState();


    // useEffect(() => {

    //     if (userData)
    //         setData(userData)
    // }, [userData])

    return (
        <>
            <SafeAreaWrapperFullWidth>

                {userGardens.map((garden) =>
                    <TouchableOpacity onPress={() => router.push({ pathname: '/gardenDetail', params: garden })} key={garden.id} style={{
                        height: 80, borderColor: 'black', borderWidth: 1, marginTop: 20, borderRadius: 20, flex: 1, justifyContent: 'center', paddingLeft: 20
                    }}>

                        <Text variant='smallHeading'>{gardenType[garden.gardenType].optionText}</Text>






                    </TouchableOpacity>
                )}
            </SafeAreaWrapperFullWidth>
        </>
    )
}