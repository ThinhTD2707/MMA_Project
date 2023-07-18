import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constant"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999
    },
    image: {
        aspectRatio: 1,
        resizeMode: "cover"
    },
    detail: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        widt: SIZES.width - 44,
        top: 20
    },
    rattingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 5
    },
    ratting: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large
    },
    rattingText:{
        color: COLORS.gray,
        fontFamily: "medium"
    },
    descriptionWraper:{
        marginTop: SIZES.large*2,
        marginHorizontal: SIZES.large
    },
    description:{
        fontFamily: "medium",
        fontSize: SIZES.large-2
    },
    title:{
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    price:{
        paddingHorizontal: 10,
        fontFamily:"semibold",
        fontSize: SIZES.large
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    }

})

export default styles