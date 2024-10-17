import { createSlice } from "@reduxjs/toolkit";

let editDetails = {
  name: "",
  email: "",
  phone: "",
  website: "",
  id: "",
};
const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    list: [],
    loader: true,
    editUserDetails: { ...editDetails },
    editIndex: -1,
  },
  reducers: {
    saveUserList(state, action) {
      state.list = action.payload;
      state.loader = false;
    },
    updateLike(state, action) {
      let index = action.payload;
      if (state.list[index].like === undefined) {
        state.list[index].like = true;
      } else {
        state.list[index].like = !state.list[index].like;
      }
    },
    deleteUser(state, action) {
      let index = action.payload;
      let isDelete = window.confirm("are you sure to delete ?");
      if (isDelete) {
        state.list.splice(index, 1);
      }
    },
    setEditUserDetails(state, action) {
      let index = action.payload;
      state.editUserDetails = { ...state.list[index] };
      state.editIndex = index;
    },
    saveEditUserDetails(state, action) {
      if (state.editIndex !== -1) {
        if (state.editUserDetails.name === "" || state.editUserDetails.email === "") {
          alert("Please Complete All Feilds");
        } else {
          state.list[state.editIndex] = { ...state.editUserDetails };
          state.editIndex = -1;
        }
      }
    },
    onChangeHandel(state, action) {
      let { name, value } = action.payload;
      state.editUserDetails[name] = value;
    },
  },
});

export default UserSlice;
export const { onChangeHandel, saveEditUserDetails, setEditUserDetails, saveUserList, updateLike, deleteUser } = UserSlice.actions;
