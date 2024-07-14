import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RoomExtendedInterface } from '@/models/extended/RoomExtended.interface';

interface RoomState {
  rooms: RoomExtendedInterface[] | [];
  room: RoomExtendedInterface | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: RoomState = {
  rooms: [],
  room: null,
  isLoading: false,
  error: null,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<RoomExtendedInterface[]>) => {
      state.rooms = action.payload;
    },
    setRoom: (state, action: PayloadAction<RoomExtendedInterface | null>) => {
      state.room = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setRoomInitialState: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setRooms, setRoom, setLoading, setError, setRoomInitialState } =
  roomSlice.actions;

export default roomSlice.reducer;
