import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// import { SlideBox } from "react-native-image-slider-box"
import { COLORS } from "../../constant"
import { SliderBox } from "react-native-image-slider-box"

const Carousel = () => {
    const slides = [
        "https://noithatm8.com/wp-content/uploads/sofffa-da-phong-khach-sang-trong.jpg",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/358/409/products/sofa-vang-da-2m-cao-cap-3-0fd28fb6-a4d7-427a-8dbd-600f6d79c5a9.jpg?v=1639886536390",
        "https://modernhousevn.com/cdn/shop/collections/page_3_1024x1024.jpg?v=1681440725",
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox images = {slides}
                dotColor = {COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: "92%", marginTop: 10 }}
                autoplay
                circleLoop
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})