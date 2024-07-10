import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { Colors } from "@/constants/Colors";
import {
  backer,
  creator,
  earlyAdopter,
  fundamental,
  moderator,
  pioneer,
  sponsor,
  teacher,
} from "@/constants/badges";

const mockBadges = [
  "backer",
  "early-adopter",
  "creator",
  "fundamental",
  "pioneer",
  "teacher",
];

// Mapping of badge names to imported images
const badgeImages = {
  Backer: backer,
  Creator: creator,
  "Early Adopter": earlyAdopter,
  Fundamental: fundamental,
  Moderator: moderator,
  Pioneer: pioneer,
  Sponsor: sponsor,
  Teacher: teacher,
};

const BadgesCard = ({ badges = mockBadges }) => {
  const [badgesList, setBadgesList] = useState([]);

  useEffect(() => {
    initBadges();
  }, [badges]);

  const initBadges = () => {
    const badgesData = badges.map((badge) => {
      const name = badge
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return {
        name,
        url: badgeImages[name] || { uri: `/assets/image/badges/${badge}.png` },
        pageURL: `https://example.com/litepaper/library/badges#${badge}-badge`,
      };
    });
    setBadgesList(badgesData);
  };

  const openPage = async (pageURL) => {
    console.log(pageURL);
  };

  const renderBadgeItem = ({ item }) => (
    <Pressable
      style={styles.badgeContent}
      onPress={() => openPage(item.pageURL)}
    >
      <Image source={item.url} style={styles.badgeImage} />
      <Text style={styles.badgeText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Badges</Text>
        <Text style={styles.cardSubtitle}>The badges you've earned.</Text>
      </View>
      <View style={styles.cardContent}>
        <FlatList
          data={badgesList}
          renderItem={renderBadgeItem}
          keyExtractor={(item) => item.name}
          numColumns={3}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

export default BadgesCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  cardHeader: {
    padding: 20,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  cardContent: {
    padding: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  badgeContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },
  badgeImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  badgeText: {
    textAlign: "center",
    marginTop: 10,
  },
});
