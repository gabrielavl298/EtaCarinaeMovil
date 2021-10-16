import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Animated, ScrollView} from 'react-native'

import Theme from '../constants/Theme';

const HomeScreen = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [scrollViewWidth, setScrollViewWidth] = React.useState(0);

    const boxWidth = scrollViewWidth * 0.8;
    const boxDistance = scrollViewWidth - boxWidth;
    const halfBoxDistance = boxDistance / 2;
    const pan = React.useRef(new Animated.ValueXY()).current;

    const loremWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const getMovies = async () => {
        try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        setData(json.movies);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    
    useEffect(() => {
        getMovies();
    }, []);

    const renderItem = ({ item, index }) => (
        <Animated.View
          style={{
            transform: [
              {
                scale: pan.x.interpolate({
                  inputRange: [
                    (index - 1) * boxWidth - halfBoxDistance,
                    index * boxWidth - halfBoxDistance,
                    (index + 1) * boxWidth - halfBoxDistance, // adjust positioning
                  ],
                  outputRange: [0.8, 1, 0.8], // scale down when out of scope
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <View
            style={
              {
                height: '100%',
                width: boxWidth,
                borderRadius: 24,
                backgroundColor: `rgba(${(index * 13) % 255}, ${
                  (index * 35) % 255
                }, ${(index * 4) % 255}, .5)`,
              }
            }>
            <Text>{item}</Text>
          </View>
        </Animated.View>
      );

    return (
        <View style={styles.container}>
            <View >
                <FlatList
                    horizontal
                    data={loremWords}
                    style={{ backgroundColor: '#6b6b6b', height: 250 }}
                    contentContainerStyle={{ paddingVertical: 16 }}
                    contentInsetAdjustmentBehavior="never"
                    snapToAlignment="center"
                    decelerationRate="fast"
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={1}

                    snapToInterval={boxWidth}
                    contentInset={{
                        left: halfBoxDistance,
                        right: halfBoxDistance,
                    }}
                    contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
                    onLayout={(e) => {
                        setScrollViewWidth(e.nativeEvent.layout.width);
                    }}

                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: pan.x } } }],
                        {
                          useNativeDriver: false,
                        },
                      )}
                      keyExtractor={(item, index) => `${index}-${item}`}
                      renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Theme.COLORS.DEFAULT
    }
})
