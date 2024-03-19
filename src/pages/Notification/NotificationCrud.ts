import axios from "axios";
import AuthService from "../../services/AuthService";


export const Email_Template = "http://8.213.34.246:3010/email_template";

export function getAllEmails() {
  return axios.get(`${Email_Template}/find-all`);
}