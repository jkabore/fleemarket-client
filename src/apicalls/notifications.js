import { axiosInstance } from "./axiosInstance";

// add a notification
export const AddNotification = async (data) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_API}/api/notifications/notify`,
      data
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get all notifications by user
export const GetAllNotifications = async () => {
  try {
    const response = await axiosInstance.get(
      `${process.env.REACT_APP_API}/api/notifications/get-all-notifications`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete a notification
export const DeleteNotification = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `${process.env.REACT_APP_API}/api/notifications/delete-notification/${id}`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// read all notifications by user
export const ReadAllNotifications = async () => {
  try {
    const response = await axiosInstance.put(
      `${process.env.REACT_APP_API}/api/notifications/read-all-notifications`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
