import React from "react";
import { StyleSheet, View, Dimensions, Animated } from "react-native";
import type { PagerViewOnPageScrollEventData } from "react-native-pager-view";
import PagerView from "react-native-pager-view";
import { Image } from "expo-image";

const p1 = require("@/data/shop/pager1.png");
const p2 = require("@/data/shop/pager2.png");
const p3 = require("@/data/shop/pager3.png");
const p4 = require("@/data/shop/pager4.png");

const sample = [
  { key: 1, image: p1 },
  { key: 2, image: p2 },
  { key: 3, image: p3 },
  { key: 4, image: p4 },
];

const { width, height } = Dimensions.get("window");
const DOT_SIZE = 20;

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, sample.length];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, sample.length * DOT_SIZE],
  });

  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: "absolute",
            transform: [{ translateX: translateX }],
          },
        ]}
      />
      {sample.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View style={styles.paginationDot} />
          </View>
        );
      })}
    </View>
  );
};

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const ViewPager = () => {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <AnimatedPagerView
        initialPage={0}
        style={styles.pagerView}
        onPageScroll={Animated.event<PagerViewOnPageScrollEventData>(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            // listener: ({ nativeEvent: { offset, position } }) => {
            //   console.log(`Position: ${position} Offset: ${offset}`);
            // },
            useNativeDriver: true,
          },
        )}
      >
        {sample.map((item) => (
          <View collapsable={false} key={item.key}>
            <Image
              style={styles.image}
              source={item.image}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        ))}
      </AnimatedPagerView>
      <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 4,
  },
  pagerView: { height: height / 4 },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  pagination: {
    position: "absolute",
    right: width / 2 - DOT_SIZE * 2,
    bottom: 20,
    flexDirection: "row",
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
    backgroundColor: "#88dfef",
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 1,
    borderColor: "#00000030",
  },
});

export default ViewPager;
