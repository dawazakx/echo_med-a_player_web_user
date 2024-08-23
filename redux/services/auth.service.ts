import { UserTypes } from "@/types/Auth.types";
import axios from "axios";
import store from "store";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const Register = async (payload: UserTypes) => {
  try {
    const url = `${baseURL}/api/v1/user/signup`;
    const response = await axios.post(url, payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const LoginUser = async (payload: { emailOrUsername: string; password: string }) => {
  try {
    const url = `${baseURL}/api/v1/user/login`;
    const response = await axios.post(url, payload);
    console.log(response.data);
    const token = response.data.token;
    store.set("atk", token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const VerifyOTP = async (payload: { email: string; otp: string }) => {
  try {
    const url = `${baseURL}/api/v1/user/verify`;
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ResendOTP = async (payload: { email: string }) => {
  try {
    const url = `${baseURL}/api/v1/user/resend-otp`;
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ForgotPassword = async (payload: { email: string }) => {
  try {
    const url = `${baseURL}/api/v1/user/forgot-password`;
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ResetPassword = async (payload: {
  email: string;
  otp: string;
  password: string;
}) => {
  try {
    const url = `${baseURL}/api/v1/user/reset-password`;
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
