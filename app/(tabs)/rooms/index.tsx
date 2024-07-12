import React from "react";
import { FlatList, ScrollView } from "react-native";

import chats from "@/assets/data/chats.json";
import { useDatabase } from "@/hooks/useDatabase";
import { listRooms } from "@/services/roomService";
import { ThemedView } from "@/components/themed/atomic/ThemedView";
import { defaultStyles } from "@/constants/Styles";
import RoomRow from "@/components/rooms/RoomRow";

export default function RoomsScreen() {
  const {
    data: rooms,
    loading,
    loadMore,
    refetch,
    hasMore,
  } = useDatabase(listRooms);

  console.log(rooms);

  return (
    <ThemedView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <FlatList
          data={rooms}
          renderItem={({ item: room }) => <RoomRow room={room} />}
          keyExtractor={(item) => item.$id.toString()}
          ItemSeparatorComponent={() => (
            <ThemedView style={[defaultStyles.separator, { marginLeft: 90 }]} />
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </ThemedView>
  );
}
